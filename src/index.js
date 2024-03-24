import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage';

import reportWebVitals from './reportWebVitals';
import Signup from './Signup';
import Login from './Login';
// import Navbar from './navbar';
import Profile from './Profile';
import Viewtask from './Viewtask';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ToastContainer></ToastContainer>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route exact path ="/" element={<Homepage/>}/>
        <Route exact path ="/Signup" element={<Signup/>}/>
        <Route exact path ="/login" element={<Login/>}/>
        <Route exact path ="/profile" element={<Profile/>}/>
        <Route exact path ="/viewtask" element={<Viewtask/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);