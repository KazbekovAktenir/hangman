import React from "react";
import { KEYBOARD_LETTERS } from "../helpers/const";

const Keyboard = ({ setLetter }) => {
  return (
    <>
      {KEYBOARD_LETTERS.map((letter, index) => (
        <button
          onClick={(e) => setLetter(e.target.id)}
          key={index}
          id={letter}
          className="button-primary keyboard-button"
        >
          {letter}
        </button>
      ))}
    </>
  );
};

export default Keyboard;
