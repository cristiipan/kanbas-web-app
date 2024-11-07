import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo.title.trim()) {
      const newTodo = {
        ...todo,
        id: new Date().getTime().toString(),
        done: false
      };
      console.log("Adding new todo:", newTodo);
      dispatch(addTodo(newTodo));
      dispatch(setTodo({ id: "-1", title: "", done: false }));
    }
  };

  return (
    <div className="d-flex align-items-center mb-3" style={{ maxWidth: "450px" }}>
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        className="form-control me-2"
        placeholder="Enter a todo..."
        style={{ maxWidth: "300px" }}
      />
      <button
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
        className="btn btn-warning me-2"
        disabled={todo.id === "-1"}
      >
        Update
      </button>
      <button
        onClick={handleAddTodo}
        id="wd-add-todo-click"
        className="btn btn-success"
        disabled={todo.id !== "-1"}
      >
        Add
      </button>
    </div>
  );
}
