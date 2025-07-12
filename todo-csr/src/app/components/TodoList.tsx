// app/components/TodoList.tsx
'use client'

import TodoItem from './TodoItem';
import type { Todo } from '@/types/todo';

export default function TodoList({
  todos,
  toggle,
  remove,
}: {
  todos: Todo[];
  toggle: (id: string) => void;
  remove: (id: string) => void;
}) {
  if (!todos.length) return <p>Belum ada tugas 🎉</p>;

  return (
    <ul>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={toggle} onRemove={remove} />
      ))}
    </ul>
  );
}
