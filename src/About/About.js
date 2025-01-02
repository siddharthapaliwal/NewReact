import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <ul>
        <li><Link to="/about/about1">About1</Link></li>
        <li><Link to="/about/about2">About2</Link></li>
        <li><Link to="/about/about3">About3</Link></li>
      </ul>
    </div>
  );
}

export default About;
