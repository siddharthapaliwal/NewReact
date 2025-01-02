// src/CounterWithRef.js
import React, { useState, useRef } from 'react';

function CounterWithRef() {
  const [count, setCount] = useState(0);
  const renders = useRef(0);  // Mutable reference to track renders

  renders.current++;  // Increment on each render

  return (
    <div>
      <h2>Counter: {count}</h2>
      <p>Renders: {renders.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterWithRef;
