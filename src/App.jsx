import { useState } from 'react';

function App() {
  async function fetchJoke() {
    const url = 'https://icanhazdadjoke.com/';
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <h1>Joke Generator</h1>
      <button onClick={fetchJoke}>Get Joke</button>
    </>
  );
}

export default App;
