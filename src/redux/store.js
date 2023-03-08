import { legacy_createStore as createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

/* export const addToDo = (text, id) => {
  return {
    type: "ADD",
    text,
    id,
  };
};
export const deleteToDo = (id) => {
  return {
    type: "DELETE",
    id,
  };
}; */

// export const addToDo = createAction("ADD");
// export const deleteToDo = createAction("DELETE");

//console.log(addToDo(), deleteToDo());
/* const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return [{ text: action.payload.text, id: action.payload.id }, ...state];
    case "DELETE":
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
}; */

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload.text, id: action.payload.id });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });
// when you use createReducer func, you can mutate state .... "Immer" inside redux toolkit helps you, it will return new state
// *So* when you mutate your state.. don't return it by your self. Let Immer do that

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload.text, id: action.payload.id });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

//const store = createStore(reducer);
// const store = configureStore({ reducer });
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
