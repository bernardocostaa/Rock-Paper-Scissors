import React from "react";
import Score from "./Score/Score";
import GameStart from "./GameStart/GameStart";
import Rules from "./RulesBtn/Rules";
import GameShow from "./GameShow/GameShow";
import './app.css'

function App() {
  const [score, setScore] = React.useState(0);
  const [gameStarted, setGameStarted] = React.useState(false);
  const [playerChoice, setPlayerChoice] = React.useState(null);

  const handleGameStart = (choice) => {
    setPlayerChoice(choice);
    setGameStarted(true);
  };

  const handlePlayAgain = () => {
    setGameStarted(false);
    setPlayerChoice(null);
  };

  return (
    <div className="background">
      <Score score={score} />
      {!gameStarted ? (
        <GameStart setScore={setScore} onGameStart={handleGameStart} />
      ) : (
        <GameShow playerChoice={playerChoice} setScore={setScore} onPlayAgain={handlePlayAgain} />
      )}
      <Rules />
    </div>
  );
}

export default App;
