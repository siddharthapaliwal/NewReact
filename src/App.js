// src/App.js
import React from 'react';
import Counter from './Counter';
import FetchData from './FetchData';
import CounterRedux from './CounterRedux';
import CounterWithRef from './CounterWithRef';

function App() {
  return (
    <div>
      <h1>React Hooks Demo</h1>
      <Counter />
      <FetchData />
      <CounterRedux />
      <CounterWithRef />
    </div>
  );
}

export default App;
