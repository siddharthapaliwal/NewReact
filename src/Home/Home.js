import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li><Link to="/home/home1">Home1</Link></li>
        <li><Link to="/home/home2">Home2</Link></li>
        <li><Link to="/home/home3">Home3</Link></li>
      </ul>
    </div>
  );
}

export default Home;
