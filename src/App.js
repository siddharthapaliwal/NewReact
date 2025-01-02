// src/App.js
import React from 'react';
import Counter from './Counter';  // Import Counter component
import UserCard from './UserCard';

function App() {
  return (
    <div>
      <Counter />
      <UserCard name="Alice" age={25} location="New York" />
      <UserCard name="Bob" age={30} location="San Francisco" />
    </div>
  );
}

export default App;
