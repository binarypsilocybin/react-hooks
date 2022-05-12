import React, { useReducer } from 'react';

export default function GetDataUseEffect() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <div>
      <h3>useReducer on toggle</h3>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? 'checked' : 'not checked'}</p>
    </div>
  );
}
