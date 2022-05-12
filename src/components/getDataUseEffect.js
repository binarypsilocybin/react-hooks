import React, { useState, useEffect } from 'react';

export default function GetDataUseEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) {
    return (
      <div>
        <h1>Fetch with useEffect()</h1>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Remove</button>
      </div>
    );
  }
}
