import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Input from './components/checkBox.js';
import StarRatings from './components/starRating.js';
import GetData from './components/getData.js';
import App from './App.js';

ReactDOM.render(
  <React.StrictMode>
    <Input />
    <App />
    <StarRatings totalStars={4} />
    <GetData />
  </React.StrictMode>,
  document.getElementById('root')
);
