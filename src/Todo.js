import React from "react";
import "./App.css";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        <span className={todo.complete ? "complete" : ""}>{todo.name}</span>
      </label>
    </div>
  );
}
