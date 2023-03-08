import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo } from "../redux/store";

function Home() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  const dispatch = useDispatch();
  const onClick = () => {
    const id = Date.now();
    dispatch(addToDo({ text, id })); // the way to set multiple data in payload
  };
  const currentState = useSelector((state) => state);
  //console.log(currentState);
  const btnOnClick = (event) => {
    const targetId = parseInt(event.target.parentNode.id);
    dispatch(deleteToDo(targetId));
  };
  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </form>
      <ul>
        {currentState.map((state) => (
          <li key={state.id} id={state.id}>
            <h2>{state.text}</h2>
            <button onClick={btnOnClick}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
