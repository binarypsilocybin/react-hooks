import React, { useContext } from 'react';
import { TreesContext } from './';

export default function App() {
  const { trees } = useContext(TreesContext);

  return (
    <div className="App">
      <h1>Trees I've Herd Of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
}
