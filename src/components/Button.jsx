import React from 'react';

function Button(props) {
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
      props.retrieveJoke(data.joke);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      type="button"
      onClick={fetchJoke}
      className="inline-block px-6 py-2.5 bg-yellow-300 text-slate-800 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
    >
      Tell Me A Joke
    </button>
  );
}

export default Button;
