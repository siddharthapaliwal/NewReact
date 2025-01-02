// src/CounterRedux.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CounterRedux() {
  const count = useSelector(state => state.count);  // Access the Redux state
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <div>
      <h2>Redux Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterRedux;
