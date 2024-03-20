import logo from './logo.svg';
import React from 'react';
import Navbar from './navbar';
import './signup.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Signup() {

  return (
    

    <div className='main-page'>
      <div>
      <Navbar/>
    </div>
    <div className='main-content'>
      <div id='login'>
        <div id='img'>
          <img id='aa' src='./signup.jpg'></img>
        </div>
        <div id='login-field'>
          
          <div id='frame-1'>
            <div id='create'>Create an account</div>
            <div id='enter'>Enter your details below</div>
          </div><br/>
         
          <div id='frame-2'>
          <form>
            <input type="text" placeholder='Name' id='name' ></input>
            <br />
            <input type="email" placeholder='Email or Phone Number' id='mail'></input>
            <br />
            <input type="password" placeholder='Password' id='pass'></input>
            <br />
            </form>
          </div>
          
          <div id='frame-3'>
            <button id='create-btn'>Create Account</button>
            <div id='frame-4'>
                {/* <img src='./Icon-Google.png' alt="Google Icon"></img> */}
                
                <button id='ggl-button'>
                <div id='icon-button'>
                <img src='./Icon-Google.png' alt="Google Icon" id='icon-img'></img>
                  Sign up with Google
                  </div>
                  </button>
                  
          
              <div id='frame-5'>
                <div id='already-has'>Already have account?</div>
                <Link to="/login">Log in</Link>

              </div>
            </div>
          </div>
          

        </div>

      </div>


</div>
    </div>
  );
}

export default Signup;
