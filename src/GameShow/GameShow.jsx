import React from "react";
import style from "./GameShow.module.css";
import Paper from "../GameStart/Paper";
import Rock from "../GameStart/Rock";
import Scissor from "../GameStart/Scissor";
import OptionComputer from "./OptionComputer";

const GameShow = ({ playerChoice, setScore, onPlayAgain }) => {
  const [randomChoice, setRandomChoice] = React.useState(["Paper", "Rock", "Scissor"]);
  const [choicePlay, setChoicePlay] = React.useState(null);
  const [status, setStatus] = React.useState("");
  const [win, setWin] = React.useState(null)

  let PlayerNow;

  if (playerChoice === "Paper") {
    PlayerNow = Paper;
  } else if (playerChoice === "Rock") {
    PlayerNow = Rock;
  } else {
    PlayerNow = Scissor;
  }

  React.useEffect(() => {
    setRandomChoice((randomChoice) => randomChoice.filter((player) => player !== playerChoice));
  }, [playerChoice]);

  React.useEffect(() => {
    const playerComputer = Math.floor(Math.random() * 2);
    const computerChoice = randomChoice[playerComputer];

    const timeoutId = setTimeout(() => {
      setChoicePlay(computerChoice);

      switch (playerChoice) {
        case "Paper":
          setStatus(computerChoice === "Rock" ? "You Win" : "You Lose");
          setWin(computerChoice === "Rock" ? true : false)
          setScore((prevScore) => (computerChoice === "Rock" ? prevScore + 1 : prevScore));
          break;
        case "Rock":
          setStatus(computerChoice === "Scissor" ? "You Win" : "You Lose");
          setWin(computerChoice === "Scissor" ? true : false)
          setScore((prevScore) => (computerChoice === "Scissor" ? prevScore + 1 : prevScore));
          break;
        case "Scissor":
          setStatus(computerChoice === "Paper" ? "You Win" : "You Lose");
          setWin(computerChoice === "Paper" ? true : false)
          setScore((prevScore) => (computerChoice === "Paper" ? prevScore + 1 : prevScore));
          break;
        default:
          console.log("Erro");
          break;
      }
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [randomChoice, playerChoice, setScore]);

  console.log(win);
  return (
    <div className={style.areaGame}>
      <div>
        <p className={style.textChoice}>You Picked</p>
        <div className={win ? style.win : ''}>
          <PlayerNow newClass={true} />
        </div>
      </div>
      {status && (
        <div className={style.areaWin}>
          <h1>{status}</h1>
          <button onClick={onPlayAgain}>PLAY AGAIN</button>
        </div>
      )}
      <div>
        <p className={style.textChoice}>The House Picked</p>
        {choicePlay === null ? (
          <div className={style.choiceComputer}></div>
        ) : (
          <div className={win ? '' : style.win}>
            <OptionComputer choicePlay={choicePlay} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GameShow;
