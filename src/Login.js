// Login.js
import React from 'react';
import Navbar from './navbar';
import './login.css';

import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='main-page'>
      <div>
        <Navbar />
      </div>
      <div className='main-content'>
        <div id='login'>
          <div id='img'>
            <img id='aa' src='./signup.jpg' alt='Login'></img>
          </div>
          <div id='login-field'>
            <div id='frame-1'>
              <div id='create'>Log in to your account</div>
              <div id='enter'>Enter your credentials below</div>
            </div><br />
            <div id='frame-2'>
              <form>
              <input type="text" placeholder='Email or Phone Number' id='mail'></input>
              <br />
              <input type="password" placeholder='Password' id='pass'></input>
              <br />
              </form>
            </div>
            <div id='frame-3'>
              <button id='login-btn'>Log In</button>
              <div id='frame-4'>
                <button id='ggl-button'>
                  <div id='icon-button'>
                    <img src='./Icon-Google.png' alt="Google Icon" id='icon-img'></img>
                    Log in with Google
                  </div>
                </button>
                <div id='frame-5'>
                  <div id='dont-have'>Don't have an account?</div>
                  <Link to='/Signup'>Sign up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
