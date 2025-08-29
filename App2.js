import React, { useState } from 'react';

function App() {
  const menu = [
    { id: 1, name: 'Burger', price: 100 },
    { id: 2, name: 'Pizza', price: 250 },
    { id: 3, name: 'Pasta', price: 180 },
    { id: 4, name: 'Cold Drink', price: 50 },
    { id: 5, name: 'Ice Cream', price: 80 },
  ];

  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, quantity) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: parseInt(quantity) || 0,
    }));
  };

  const calculateTotal = () => {
    return menu.reduce((total, item) => {
      const qty = quantities[item.id] || 0;
      return total + item.price * qty;
    }, 0);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Restaurant Bill Calculator</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price (₹)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={quantities[item.id] || ''}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ marginTop: '20px' }}>Total Bill: ₹{calculateTotal()}</h3>
    </div>
  );
}

export default App;
