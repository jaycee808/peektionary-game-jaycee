import React, { useState, useRef, useContext } from "react";
import GameContext from "./GameContext";

const GuessForm = ({ correctWords, setCorrectWords, handleGameWon }) => {
  const { slug } = useContext(GameContext);
  const [guess, setGuess] = useState("");
  const guessInput = useRef(null);

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const lowerCaseSlug = slug.toLowerCase();
    const lowerCaseGuess = guess.trim().toLowerCase();
    if (lowerCaseGuess === lowerCaseSlug) {
      setCorrectWords([...correctWords, lowerCaseGuess]);
      setGuess("");
      guessInput.current.focus();
      if (correctWords.length + 1 === lowerCaseSlug.split("-").length) {
        handleGameWon();
      }
    } else {
      alert("Incorrect guess. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="text-2xl border-2 border-solid border-zinc-900 flex justify-around p-px bg-gray-300"
    >
      <label>
        Guess:
        <input
          type="text"
          value={guess}
          onChange={handleInputChange}
          ref={guessInput}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GuessForm;
