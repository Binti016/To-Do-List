import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from './navbar';
import './login.css';
import Footer from './Footer';

function Login() {
  const [formData, setFormData] = useState({
    mail: '',
    pass: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLogin = async (e) => {
    e.preventDefault();
    const { mail, pass } = formData;

    try {
      const response = await fetch('http://localhost:8000/user');
      if (!response.ok) {
        throw new Error('Failed to fetch user data.');
      }
      const existingUsers = await response.json();
      const userExists = existingUsers.some(
        (user) => (user.email === mail || user.phone === mail) && user.password === pass
      );

      if (userExists) {
        toast.success('Login successful.');
        sessionStorage.setItem('loggedIn', true);
        navigate('/profile'); // Navigate to the profile page
      } else {
        toast.error('Invalid email/phone or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('An error occurred while logging in.');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <div className='main-page'>
      <div>
        <Navbar />
      </div>
      <div id='header-section'>
        <div id='welcome'>Welcome Back!</div>
        <div id='to-continue'>Log in to your account to continue</div>
      </div>
      <div className='main-content'>
        <div id='login'>
          <div id='img'>
            <img id='aa' src='./signup.jpg' alt='Login' />
          </div>
          <div id='login-field'>
            <div id='frame-1'>
              <div id='create'>Log in to your account</div>
              <div id='enter'>Enter your credentials below</div>
            </div>
            <br />
            <div id='frame-2'>
              <form onSubmit={proceedLogin}>
                <input
                  type='text'
                  placeholder='Email or Phone Number'
                  id='mail'
                  value={formData.mail}
                  onChange={handleChange}
                />
                <br />
                <input
                  type='password'
                  placeholder='Password'
                  id='pass'
                  value={formData.pass}
                  onChange={handleChange}
                />
                <br />
                <button type='submit' id='login-btn'>
                  Log In
                </button>
              </form>
            </div>
            <div id='frame-3'>
              <Link to='/profile'>
                <button id='ggl-button'>
                  <div id='icon-button'>
                    <img src='./Icon-Google.png' alt='Google Icon' id='icon-img' />
                    Log in with Google
                  </div>
                </button>
              </Link>
              <div id='frame-5'>
                <div id='dont-have'>Don't have an account?</div>
                <Link to='/Signup'>Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
