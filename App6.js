import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const checkNumberType = () => {
    const num = parseFloat(number);

    if (isNaN(num)) {
      setResult('Please enter a valid number.');
      return;
    }

    // Check if number is integer or decimal
    const isInteger = Number.isInteger(num);

    setResult(
      isInteger
        ? `${num} is an Integer (Double).`
        : `${num} is a Decimal number.`
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Check Integer or Decimal</h2>
      <input
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={checkNumberType}>Check</button>

      {result && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>{result}</div>
      )}
    </div>
  );
}

export default App;
