// src/UserCard.js
import React from 'react';
import './UserCard.css';  // You can add some styling here

function UserCard(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

export default UserCard;
