import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setSum('Please enter valid numbers');
      return;
    }

    setSum(a + b);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Sum of Two Numbers</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={calculateSum}>Calculate Sum</button>

      {sum !== null && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          {typeof sum === 'number' ? `Sum: ${sum}` : sum}
        </div>
      )}
    </div>
  );
}

export default App;
