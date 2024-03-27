import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/1/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Character</h1>
      {data && (
        <div>
          <h2>Name: {data.name}</h2>
          <p>Height: {data.height}</p>
          <p>Mass: {data.mass}</p>
          <p>Hair color: {data.hair_color}</p>
          <p>Skin color: {data.skin_color}</p>
          <p>Eye color: {data.eye_color}</p>
          <p>Birth year: {data.birth_year}</p>
          <p>Gender: {data.gender}</p>
        </div>
      )}
    </div>
  );
}

export default App;