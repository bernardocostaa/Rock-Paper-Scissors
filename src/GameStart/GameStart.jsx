import React from "react";
import Paper from "./Paper.jsx";
import Rock from "./Rock.jsx";
import Scissor from "./Scissor.jsx";
import style from "./GameStart.module.css";
import GameShow from "../GameShow/GameShow.jsx";

const GameStart = ({updateScore}) => {
  const [optPlayer, setOptPlayer] = React.useState(null);

  function handleClick(nameOpt) {
    setOptPlayer(nameOpt);
  }
  
  if(optPlayer === null){
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
  }else{
    return(
      <GameShow playerChoice={optPlayer} updateScore={updateScore} />
    )
  }
};

export default GameStart;
