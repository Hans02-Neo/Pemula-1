// app/page.tsx
'use client'

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useTodos } from './components/useTodos';

export default function HomePage() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <main style={{ maxWidth: 480, margin: '4rem auto' }}>
      <h1>Todo List (CSR)</h1>

      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} toggle={toggleTodo} remove={removeTodo} />
    </main>
  );
}
