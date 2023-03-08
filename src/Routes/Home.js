import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/store";

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
  const addClicked = () => {
    const id = Date.now();
    dispatch(add({ text, id })); // the way to set multiple data in payload
  };
  const currentState = useSelector((state) => state);

  const deleteClicked = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={addClicked}>Add</button>
      </form>
      <ul>
        {currentState.map((state, index) => (
          <li key={index}>
            <h2>{state.text}</h2>
            <button onClick={() => deleteClicked(state.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
