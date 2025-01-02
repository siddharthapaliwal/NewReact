// src/Counter.js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;
