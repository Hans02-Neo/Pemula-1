import React, { useState } from 'react';
import './App.css';

function App() {
  const [angka1, setAngka1] = useState('');
  const [angka2, setAngka2] = useState('');
  const [hasil, setHasil] = useState(null);

  const hitung = (operator) => {
    const a = parseFloat(angka1);
    const b = parseFloat(angka2);
    if (isNaN(a) || isNaN(b)) {
      setHasil("Masukkan angka yang valid");
      return;
    }

    let result;
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = b !== 0 ? a / b : "Tidak bisa bagi 0";
        break;
      default:
        result = "Operator tidak dikenal";
    }

    setHasil(result);
  };

  return (
    <div className="container">
      <h1>Kalkulator Sederhana</h1>

      <input
        type="number"
        value={angka1}
        onChange={(e) => setAngka1(e.target.value)}
        placeholder="Masukkan angka pertama"
      />

      <input
        type="number"
        value={angka2}
        onChange={(e) => setAngka2(e.target.value)}
        placeholder="Masukkan angka kedua"
      />

      <div className="tombol-opsi">
        <button onClick={() => hitung('+')}>+</button>
        <button onClick={() => hitung('-')}>−</button>
        <button onClick={() => hitung('*')}>×</button>
        <button onClick={() => hitung('/')}>÷</button>
      </div>

      <h2>Hasil: {hasil !== null ? hasil : '-'}</h2>
    </div>
  );
}

export default App;
