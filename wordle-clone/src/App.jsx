import React, {useState} from "react";
import Row from "./Row";
import "./assets/App.css"

const App = () => {
  const targetWord = "MESSI";
  const [guesses, setGuesses] = useState(["METRO", "SMILE", "TIGER"]);

  return (
    <div>
      <h1>Wordle Clone</h1>
      {guesses.map((guess) => (
        <Row guess={guess} targetWord={targetWord}/>
      ))}
    </div>
  );
};

export default App;
