import React, { useState } from "react";
import { WORDS } from "../helpers/const";
import Keyboard from "../components/Keyboard";

const StartGame = () => {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  const wordToGuess = WORDS[randomIndex];
  const [letter, setLetter] = useState("");
  console.log(letter);
  let letters = [];
  for (let i = 0; i < wordToGuess.length; i++) {
    letters.push("_");
  }
  return (
    <div>
      <ul className="placeholders-wrapper">
        {letters.map((letter, index) => (
          <li key={index} className="letter">
            {letter}
          </li>
        ))}
      </ul>
      <p className="nekiy-text">
        TRIES LEFT: <span className="font-medium text-red-600 ml-1">10</span>
      </p>
      <div className="keyboard">
        <Keyboard setLetter={setLetter} />
      </div>
    </div>
  );
};

export default StartGame;
