import React, { useReducer } from 'react';

export default function DispatchingReducer() {
  const initialState = {
    message: 'hi',
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case 'yell':
        return {
          message: 'HEY!',
        };
      case 'whisper':
        return {
          message: 'excuse me',
        };
    }
  }
  return (
    <>
      <p>Messages: {state.message}</p>
      <button onClick={() => dispatch({ type: 'yell' })}>YELL</button>
    </>
  );
}
