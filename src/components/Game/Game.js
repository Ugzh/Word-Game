import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSumbitGuess(tentativeGuess) {
    const nextGuess = {
      value: tentativeGuess,
      id: Math.random(),
    };
    setGuesses([...guesses, nextGuess]);
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSumbitGuess={handleSumbitGuess} />
    </>
  );
}

export default Game;
