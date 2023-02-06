import { useState } from 'react';

import Title from './components/Title';

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
    <div className="flex flex-col py-8 gap-6 justify-center items-center">
      <Title />
      <button onClick={fetchJoke}>Get Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default App;
