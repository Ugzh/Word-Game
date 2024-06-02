import React from "react";

function GuessInput({ handleSumbitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSumbit(event) {
    event.preventDefault();
    handleSumbitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSumbit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          type="text"
          id="guess-input"
          value={tentativeGuess}
          pattern="[A-Za-z]{5}"
          title="You must write 5 letters words"
          onChange={(e) => {
            setTentativeGuess(e.target.value.toUpperCase());
          }}
        ></input>
      </form>
    </div>
  );
}

export default GuessInput;
