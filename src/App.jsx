import React from "react";
import Score from "./Score/Score";
import GameStart from "./GameStart/GameStart";
import Rules from "./RulesBtn/Rules";
import GameShow from "./GameShow/GameShow";
import "./app.css";
import imgRules from './Assets/image-rules.svg'

function App() {
  const [score, setScore] = React.useState(0);
  const [gameStarted, setGameStarted] = React.useState(false);
  const [playerChoice, setPlayerChoice] = React.useState(null);
  const [modal, setModal] = React.useState(false);

  const handleGameStart = (choice) => {
    setPlayerChoice(choice);
    setGameStarted(true);
  };

  const handlePlayAgain = () => {
    setGameStarted(false);
    setPlayerChoice(null);
  };

  console.log(modal);

  return (
    <div className="background">
     
      <Score score={score} />
      {!gameStarted ? (
        <GameStart setScore={setScore} onGameStart={handleGameStart} />
      ) : (
        <GameShow
          playerChoice={playerChoice}
          setScore={setScore}
          onPlayAgain={handlePlayAgain}
        />
      )}
       {modal && (
        <div className="modal">
          <div className="ararModal">
           <div className="rules">
              <h2>Rules</h2>
              <button onClick={() => setModal(false)}>X</button>
           </div>
           <img className="imgRules" src={imgRules} alt="" />
          </div>
        </div>
      )}
      <Rules setModal={setModal} />

      
    </div>
  );
}

export default App;
