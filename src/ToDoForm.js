import { useState } from "react";

function ToDoForm({ addTask }) {
  const [input, setInput] = useState();

  const handerChange = (e) => {
    setInput(e.target.value);
  };
  const handlerSaubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };
  return (
    <div className="d-flex justify-content-center ">
      <form onClick={handlerSaubmit}>
        <input
          type="text"
          placeholder="Add task..."
          value={input}
          onChange={handerChange}
        />
        <input type="checkbox" checked={true} />
        <button className="btn">+</button>
      </form>
    </div>
  );
}
export default ToDoForm;
