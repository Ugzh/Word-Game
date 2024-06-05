import React from "react";

function GameOverBanner({ value, answer }) {
  for (let i = 0; i <= value.length; i++) {
    if (value[i] === answer && value.length < 6) {
      return (
        <div className="happy banner">
          {" "}
          <p>
            <strong>Congratulations!</strong> Got it in {""}
            <strong>{i + 1} guesses</strong>.
          </p>
        </div>
      );
    } else if (value.length >= 6) {
      return (
        <div className="sad banner">
          {" "}
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      );
    }
  }
}

export default GameOverBanner;
