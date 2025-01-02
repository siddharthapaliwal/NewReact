// src/DisplayData.js
import React from 'react';

class DisplayData extends React.Component {
  render() {
    const { name, items, user } = this.props;  // Destructure props

    return (
      <div>
        {/* Render String */}
        <h1>Hello, {name}!</h1>

        {/* Render Array */}
        <h2>Here are your items:</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Render Object */}
        <h2>User Information:</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
      </div>
    );
  }
}

export default DisplayData;
