import React from "react";

function ToDo() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([
    "Read a book",
    "Coding practice",
    "Do sudarshan kriya",
    "Eat healthy",
  ]);

  let handleBtnClick = () => {
    setTodoList([...todoList, newTask]);
    setNewTask("");
  };

  return (
    <div className="todo">
      <h1>React To Do App</h1>

      <input
        type="text"
        className="form-input"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-sm btn-primary"
        onClick={handleBtnClick}
      >
        Add Task
      </button>

      <div className="list-container">
        <ul class="list-group">
          {todoList.map((todo) => {
            return <li class="list-group-item">{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
