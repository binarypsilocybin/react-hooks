import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Input from './components/checkBox.js';
import StarRatings from './components/starRating.js';
import GetDataUseEffect from './components/getDataUseEffect.js';
import GetDataUseReducer from './components/getDataReducer.js';
import DispatchingReducer from './components/dispatchingReducer.js';
import UseRef from './components/useRef.js';
import App from './App.js';

export const TreesContext = createContext();

const trees = [
  { id: '1', type: 'Maple' },
  { id: '2', type: 'Oak' },
  { id: '3', type: 'Family' },
  { id: '4', type: 'Component' },
];

ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <Input />
    <App />
    <StarRatings totalStars={4} />
    <GetDataUseEffect />
    <GetDataUseReducer />
    <DispatchingReducer />
    <UseRef />
  </TreesContext.Provider>,
  document.getElementById('root')
);
