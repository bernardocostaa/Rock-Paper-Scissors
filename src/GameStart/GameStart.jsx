import React from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissor from "./Scissor";
import style from "./GameStart.module.css";

const GameStart = ({ onGameStart }) => {
  const handleClick = (nameOpt) => {
    onGameStart(nameOpt);
  };

  return (
    <div className={style.areaGame}>
      <button onClick={() => handleClick("Paper")}>
        <Paper />
      </button>
      <button onClick={() => handleClick("Rock")}>
        <Rock />
      </button>
      <button onClick={() => handleClick("Scissor")}>
        <Scissor />
      </button>
    </div>
  );
};

export default GameStart;
