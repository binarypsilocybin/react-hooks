import React, { useState, useEffect } from 'react';

export default function GetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) {
    return (
      <div>
        <ul>
          {data.map((user) => {
            <li key={user.id}>{user.login}</li>;
          })}
        </ul>
      </div>
    );
  }
}
