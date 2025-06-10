

'use client';

import { useEffect, useState } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    setTodos(data);
  };

  const handleAdd = async () => {
    if (!newTodo.trim()) return;
    await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo })
    });
    setNewTodo("");
    fetchTodos();
  };

  const handleToggleComplete = async (id: number) => {
    await fetch('/api/todos', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchTodos();
  };

  const handleDelete = async (id: number) => {
    await fetch('/api/todos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>📋 Todo List</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={newTodo}
          placeholder="Enter new todo"
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
        />
        <button onClick={handleAdd} style={{ padding: "0.5rem 1rem" }}>
          ➕ Add Todo
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "0.5rem" }}>
            <span style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginRight: "1rem"
            }}>
              {todo.title}
            </span>
            <button onClick={() => handleToggleComplete(todo.id)} style={{ marginRight: "0.5rem" }}>
              ✅ {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleDelete(todo.id)} style={{ color: "red" }}>
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}