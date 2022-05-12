import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Input from './components/checkBox.js';
import StarRatings from './components/starRating.js';
import GetDataUseEffect from './components/getDataUseEffect.js';
import GetDataUseReducer from './components/getDataReducer.js';
import DispatchingReducer from './components/dispatchingReducer.js';

import App from './App.js';

ReactDOM.render(
  <React.StrictMode>
    <Input />
    <App />
    <StarRatings totalStars={4} />
    <GetDataUseEffect />
    <GetDataUseReducer />
    <DispatchingReducer />
  </React.StrictMode>,
  document.getElementById('root')
);
