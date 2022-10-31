import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div style={{ color: 'Green', textAlign: 'center' }}>
      <h2>This is Abouts</h2>
      <Link to="/">homepage</Link>
    </div>
  );
};

export default About;
