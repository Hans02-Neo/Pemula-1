// app/components/useTodos.ts
'use client'

import { useState, useEffect } from 'react';
import type { Todo } from '@/types/todo';

export function useTodos() {
  // 1️⃣ State inti
  const [todos, setTodos] = useState<Todo[]>([]);

  // 2️⃣ Simpan & ambil dari localStorage (persisten ringan)
  useEffect(() => {
    const cached = localStorage.getItem('todos');
    if (cached) setTodos(JSON.parse(cached));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 3️⃣ API kecil
  const addTodo = (text: string) =>
    setTodos((t) => [...t, { id: crypto.randomUUID(), text, done: false }]);

  const toggleTodo = (id: string) =>
    setTodos((t) =>
      t.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );

  const removeTodo = (id: string) =>
    setTodos((t) => t.filter((todo) => todo.id !== id));

  return { todos, addTodo, toggleTodo, removeTodo };
}
