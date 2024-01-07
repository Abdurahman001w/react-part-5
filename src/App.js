import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (input) => {
    if (input) {
      const newItem = {
        id: Math.random().toString(36).substr(2.9),
        task: input,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const changeTask = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };
  return (
    <div className="App d-flex justify-content-center">
      <header>
        <h1>количество задач № 0{todos.length}</h1>
      </header>
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            changeTask={changeTask}
            removeTask={removeTask}
          />
        );
      })}
      <ToDoForm addTask={addTask} />
    </div>
  );
}
export default App;
