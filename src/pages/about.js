import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>About</p>
      <Link to="/">to home</Link>
    </div>
  );
};

export default About;