import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Input from './components/checkBox.js';
import StarRatings from './components/starRating.js';
import App from './App.js';

ReactDOM.render(
  <React.StrictMode>
    <Input />
    <App />
    <StarRatings />
  </React.StrictMode>,
  document.getElementById('root')
);
