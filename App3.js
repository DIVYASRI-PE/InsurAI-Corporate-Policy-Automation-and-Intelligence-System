import React, { useState } from 'react';

function App() {
  const [year, setYear] = useState('');
  const [result, setResult] = useState('');

  const checkLeapYear = () => {
    const y = parseInt(year);

    if (isNaN(y)) {
      setResult('Please enter a valid year.');
      return;
    }

    const isLeap =
      (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);

    setResult(isLeap ? `${y} is a Leap Year.` : `${y} is NOT a Leap Year.`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Leap Year Checker</h2>
      <input
        type="number"
        placeholder="Enter year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={checkLeapYear} style={{ marginLeft: '10px' }}>
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
