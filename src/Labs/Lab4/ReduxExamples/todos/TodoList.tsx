import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  // 从 Redux 中获取 todos 数据
  const { todos } = useSelector((state: any) => state.todosReducer);

  return (
    <div className="mt-4 ms-3" id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ul className="list-group" style={{ maxWidth: "450px" }}>
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
