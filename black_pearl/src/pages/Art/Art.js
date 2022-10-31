import React from 'react';
import { Link } from 'react-router-dom';
const Art = () => {
  return (
    <div style={{ color: 'Yellow', textAlign: 'center' }}>
      <h2>This is Arts</h2>
      <Link to="/">homepage</Link>
    </div>
  );
};

export default Art;
