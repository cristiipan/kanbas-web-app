import React, { useState } from "react";

export default function WorkingWithArrays() {
  const API = process.env.REACT_APP_REMOTE_SERVER + "/lab5/todos";
  const [todo, setTodo] = useState({ id: "1" });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working With Arrays</h3>

      {/* 检索整个数组 */}
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />

      {/* 根据 ID 检索数组中的项 */}
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        id="wd-todo-id"
        defaultValue={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <hr />

      {/* 筛选数组项 */}
      <h4>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />

      {/* 创建新任务 */}
      <h4>Creating New Items in an Array</h4>
      <a
        id="wd-create-todo"
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr />
    </div>
  );
}