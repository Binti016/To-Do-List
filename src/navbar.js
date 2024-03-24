import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    // <div className='main-page'>
      <div className="navbar">
        <div className="logo">
          <img src="edu_logo.jpg" alt="Logo" />
        </div>
        <div className="navigation-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
        <div className="sign_button">
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    // </div>
  );
}

export default navbar;
