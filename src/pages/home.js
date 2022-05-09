import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>Home</p>
      <Link to="/about">to about</Link><br/>
      <Link to="/join">to join</Link>
    </div>
  );
};

export default Home;