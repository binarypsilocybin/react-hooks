import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Input from './components/checkBox.js';
import App from './App.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Input />
  </React.StrictMode>,
  document.getElementById('root')
);
