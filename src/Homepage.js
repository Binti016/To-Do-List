import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import './Homepage.css';
import { Link } from 'react-router-dom';


function Homepage() {
  return (
    <div className='main-page'>
      <Navbar />
      <div className='hero-feature'>
      <div className="hero-header">
        <div id='header-to-do'>Welcome to our To-Do List Website</div>
        <div id='header-lekha-1'>Stay organized and boost your productivity</div>
        <Link to="/viewtask">
        <button>Get Started</button>
        </Link>
      </div>
      <div className="feature-section">
        <div id='feature'>Features</div>
        <div className='unordered'>
        <ul>
          <li>Easy task management</li>
          <li>Efficient workflow</li>
          <li>Customizable categories</li>
        </ul>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
