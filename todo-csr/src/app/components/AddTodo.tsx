// app/components/AddTodo.tsx
'use client'

import { FormEvent, useState } from 'react';

export default function AddTodo({ onAdd }: { onAdd: (t: string) => void }) {
  const [text, setText] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Apa yang ingin Anda lakukan?"
      />
      <button style={{ marginLeft: '0.5rem' }}>Tambah</button>
    </form>
  );
}
