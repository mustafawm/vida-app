import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>Vid App</h1>
    <input placeholder="search" />
    <Link to="/search"> Or Browse All </Link>
  </div>
);

export default Landing;
