import React, { useState } from "react";
import "../styles/Keyboard.scss";

export default function Key({
  isAbsent,
  isPresent,
  isCorrect,
  letter,
  typeLetter,
}) {
  const [chosenLetter, setChosenLetter] = useState(null);

  const handleClick = () => {
    typeLetter(letter);
    setChosenLetter(letter);
  };

  return (
    <div
      className={`key ${isAbsent && "key--absent"} ${
        isPresent && "key--present"
      } ${isCorrect && "key--correct"} ${chosenLetter ? "key--chosen" : ""}`}
      onClick={handleClick}
    >
      {letter}
    </div>
  );
}
