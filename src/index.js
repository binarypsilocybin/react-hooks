import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Input from './components/checkBox.js';
import App from './App.js';
import StarRating from './components/StarRating.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Input />
    <StarRating />
  </React.StrictMode>,
  document.getElementById('root')
);
