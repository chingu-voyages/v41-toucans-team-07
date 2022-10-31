import React from 'react';
import { Link } from 'react-router-dom';
const Charcter = () => {
  return (
    <div style={{ color: 'red', textAlign: 'center' }}>
      <h2>This is Charcters</h2>
      <Link to="/">homepage</Link>
    </div>
  );
};

export default Charcter;
