import { useState } from 'react';

import Title from './components/Title';
import Button from './components/Button';

function App() {
  return (
    <div className="flex flex-col h-screen gap-6 justify-center items-center bg-slate-400">
      <Title />
      <Button />
      {/* <p>{joke}</p> */}
    </div>
  );
}

export default App;
