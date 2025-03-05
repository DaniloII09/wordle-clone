import React from "react";
import "./assets/Row.css";

const Row = ({ guess, targetWord }) => {
  const target = targetWord.split("");
  const guessing = guess.split("");
  const targetLetterCounts = {};

  target.forEach((letter) => {
    targetLetterCounts[letter] = (targetLetterCounts[letter] || 0) + 1;
  });

  const status = Array(guessing.length).fill("absent");

  guessing.forEach((letter, i) => {
    if (letter === target[i]) {
      status[i] = "correct";

      targetLetterCounts[letter]--;
    }
  });

  guessing.forEach((letter, i) => {
    if (status[i] === "absent" && targetLetterCounts[letter] > 0) {
      status[i] = "present";

      targetLetterCounts[letter]--;
    }
  });

  return (
    <div className="word-row">
      {guessing.map((letter, index) => (
        <span
          key={index}
          className={`letter ${status[index]}`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Row;
