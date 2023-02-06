import { useState } from 'react';

function App() {
  const [joke, setJoke] = useState('');
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
      setJoke(data.joke);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <h1>Joke Generator</h1>
      <button onClick={fetchJoke}>Get Joke</button>
      <p>{joke}</p>
    </>
  );
}

export default App;
