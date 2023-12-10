import React, { useEffect } from "react";
import style from "./GameShow.module.css";
import Paper from "../GameStart/Paper";
import Rock from "../GameStart/Rock";
import Scissor from "../GameStart/Scissor";
import OptionComputer from "./OptionComputer";

const GameShow = ({ playerChoice }) => {
  const [randomChoice, setRandomChoice] = React.useState(["Paper", "Rock", "Scissor"]);
  const [choicePlay, setChoicePlay] = React.useState(null);
  const [status, setStatus] = React.useState('');

  let PlayerNow;

  if (playerChoice === "Paper") {
    PlayerNow = Paper;
  } else if (playerChoice === "Rock") {
    PlayerNow = Rock;
  } else {
    PlayerNow = Scissor;
  }

  useEffect(() => {
    setRandomChoice((randomChoice) => randomChoice.filter((player) => player !== playerChoice));
  }, [playerChoice]);

  useEffect(() => {
    const playerComputer = Math.floor(Math.random() * 2);
    const computerChoice = randomChoice[playerComputer];

    const timeoutId = setTimeout(() => {
      setChoicePlay(computerChoice);

      switch (playerChoice) {
        case 'Paper':
          setStatus(computerChoice === 'Rock' ? 'You Win' : 'You Lose');
          break;
        case 'Rock':
          setStatus(computerChoice === 'Scissor' ? 'You Win' : 'You Lose');
          break;
        case 'Scissor':
          setStatus(computerChoice === 'Paper' ? 'You Win' : 'You Lose');
          break;
        default:
          console.log('Erro');
          break;
      }
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [randomChoice, playerChoice]);

  console.log(choicePlay);

  return (
    <div className={style.areaGame}>
      <div>
        <p className={style.textChoice}>You Picked</p>
        <PlayerNow newClass={true} />
      </div>
      {status && <div className={style.areaWin}>
        <h1>{status}</h1>
        <a href="/">PLAY AGAIN</a>
      </div>}
      <div>
        <p className={style.textChoice}>The House Picked</p>
        {choicePlay === null ? (
          <div className={style.choiceComputer}></div>
        ) : (
          <OptionComputer choicePlay={choicePlay} />
        )}
      </div>
    </div>
  );
};

export default GameShow;
