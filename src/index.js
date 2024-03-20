import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage';

import reportWebVitals from './reportWebVitals';
import Signup from './Signup';
import Login from './Login';
import Navbar from './navbar';
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route exact path ="/" element={<Homepage/>}/>
        <Route exact path ="/Signup" element={<Signup/>}/>
        <Route exact path ="/login" element={<Login/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
