import { legacy_createStore as createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

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

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

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

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.unshift({ text: action.payload.text, id: action.payload.id });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});
// when you use createReducer func, you can mutate state .... "Immer" inside redux toolkit helps you, it will return new state
// *So* when you mutate your state.. don't return it by your self. Let Immer do that

//const store = createStore(reducer);
const store = configureStore({ reducer });
export default store;
