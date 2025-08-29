import React, { useState } from 'react';

function App() {
  const [units, setUnits] = useState('');
  const [bill, setBill] = useState(null);

  const calculateBill = () => {
    let u = parseFloat(units);
    let cost = 0;

    if (isNaN(u) || u < 0) {
      setBill('Please enter a valid number of units.');
      return;
    }

    if (u <= 100) {
      cost = u * 5;
    } else if (u <= 200) {
      cost = 100 * 5 + (u - 100) * 7;
    } else {
      cost = 100 * 5 + 100 * 7 + (u - 200) * 10;
    }

    setBill(`Total Bill: ₹${cost.toFixed(2)}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Electricity Bill Calculator</h2>
      <input
        type="number"
        placeholder="Enter units consumed"
        value={units}
        onChange={(e) => setUnits(e.target.value)}
      />
      <button onClick={calculateBill} style={{ marginLeft: '10px' }}>
        Calculate
      </button>

      {bill && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          {bill}
        </div>
      )}
    </div>
  );
}

export default App;
