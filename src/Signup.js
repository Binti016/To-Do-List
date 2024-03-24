import React, { useState } from 'react';
import Navbar from './navbar';
import './signup.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

function Signup() {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, password, email, phone} = formData;
    const userData = { id, password, email, phone};

    try {
      const response = await fetch('http://localhost:8000/user');
      if (!response.ok) {
        throw new Error('Failed to fetch user data.');
      }
      const existingUsers = await response.json();
      const userExists = existingUsers.some(user => 
        user.email === email || user.phone === phone
      );

      if (userExists) {
        toast.error('Account already exists with the same email or phone number.');
        return;
      }

      const createUserResponse = await fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (createUserResponse.ok) {
        toast.success('User registered successfully.');
        window.location.reload(); // Refresh the page
      } else {
        toast.error('Failed to register user.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('An error occurred while registering user.');
    }
  };

  return (
    <div className='main-page'>
      <div>
        <Navbar />
      </div>
      <div className='main-content'>
        <div id='login'>
          <div id='img'>
            <img id='aa' src='./signup.jpg' alt='Signup' />
          </div>
          <div id='login-field'>
            <div id='frame-1'>
              <div id='create'>Create an account</div>
              <div id='enter'>Enter your details below</div>
            </div>
            <br />
            <div id='frame-2'>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' id='id' name='id' value={formData.id} onChange={handleChange} />
                <br />
                <input type="email" placeholder='Email' id='email' name='email' value={formData.email} onChange={handleChange} />
                <br />
                <input type="text" placeholder='Phone' id='phone' name='phone' value={formData.phone} onChange={handleChange} />
                <br />
                <input type="password" placeholder='Password' id='password' name='password' value={formData.password} onChange={handleChange} />
                <br />
                <button type="submit" id='create-btn'>Create Account</button>
              </form>
            </div>
            <div id='frame-3'>
              <div id='frame-4'>
             
                <button id='ggl-button'>
                  <div id='icon-button'>
                    <img src='./Icon-Google.png' alt="Google Icon" id='icon-img' />
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
      <Footer />
    </div>
  );
}

export default Signup;
