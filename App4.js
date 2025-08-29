import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const checkEvenOdd = () => {
    const num = parseInt(number);

    if (isNaN(num)) {
      setResult('Please enter a valid number.');
      return;
    }

    setResult(num % 2 === 0 ? `${num} is an Even Number.` : `${num} is an Odd Number.`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Even or Odd Checker</h2>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={checkEvenOdd} style={{ marginLeft: '10px' }}>
        Check
      </button>

      {result && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          {result}
        </div>
      )}
    </div>
  );
}

export default App;
