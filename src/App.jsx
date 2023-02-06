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
      {/* send the function addJoke to the button component via the name retrieveJoke */}
      <Button retrieveJoke={addJoke} />
      {/* send the joke state variable as displayJoke to Joke component */}
      <Joke displayJoke={joke} />
    </div>
  );
}

export default App;
