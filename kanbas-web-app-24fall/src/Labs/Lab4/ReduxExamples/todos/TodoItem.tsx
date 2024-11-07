import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-start">
      <div className="flex-grow-1">
        {todo.title}
      </div>
      <div>
        <button
          onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click"
          className="btn btn-primary btn-sm me-2"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
