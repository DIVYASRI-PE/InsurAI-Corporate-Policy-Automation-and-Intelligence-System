import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [upperText, setUpperText] = useState('');

  const convertToUppercase = () => {
    setUpperText(inputText.toUpperCase());
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Lowercase to Uppercase Converter</h2>
      <input
        type="text"
        placeholder="Enter lowercase text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={convertToUppercase}>Convert</button>

      {upperText && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Uppercase: {upperText}
        </div>
      )}
    </div>
  );
}

export default App;
