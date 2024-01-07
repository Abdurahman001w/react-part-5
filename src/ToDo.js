function ToDo({ todo, changeTask, removeTask }) {
  return (
    <div className="item-todo">
      <div
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => changeTask(todo.id)}
      >
        {todo.task}
      </div>
      <div
        className="item-delete btn btn-danger d-flex justify-content-center"
        onClick={() => removeTask(todo.id)}
      >
        X
      </div>
    </div>
  );
}
export default ToDo;
