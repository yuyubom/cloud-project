import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>📚 Welcome to Book Collection</h1>
      <p>Organize and manage your personal library effortlessly.</p>
      <div className="button-group">
        <Link to="/login" className="btn primary">Sign In</Link>
        <Link to="/books" className="btn secondary">Go to Book Section</Link>
      </div>
    </div>
  );
};

export default Home;