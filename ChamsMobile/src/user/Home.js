import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1 className="header">Welcome to our CRUD page</h1>
      <div className="button-container">
        <Link to="/signin">
          <button className="button sign-in">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="button sign-up">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
