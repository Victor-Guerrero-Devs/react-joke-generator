import { useState } from 'react';

import Title from './components/Title';
import Button from './components/Button';
import Joke from './components/Joke';

function App() {
  const [joke, setJoke] = useState('');

  function addJoke(joke) {
    console.log(joke);
    setJoke(joke);
  }

  return (
    <div className="flex flex-col h-screen gap-6 justify-center items-center bg-slate-400">
      <Title />
      <Button retrieveJoke={addJoke} />
      <Joke displayJoke={joke} />
    </div>
  );
}

export default App;
