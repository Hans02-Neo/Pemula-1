// app/components/TodoItem.tsx
'use client'

import type { Todo } from '@/types/todo';

export default function TodoItem({
  todo,
  onToggle,
  onRemove,
}: {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <li>
      <label style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        {todo.text}
      </label>
      <button onClick={() => onRemove(todo.id)} style={{ marginLeft: '0.5rem' }}>
        🗑
      </button>
    </li>
  );
}
