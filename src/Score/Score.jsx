import React from "react";
import style from "./Score.module.css";

const Score = () => {
  return (
    <div className={style.scoreCont}>
      <div className={style.title}>
        <h1>
          ROCK <br /> PAPER <br /> SCISSORS
        </h1>
      </div>
      <div>
        <div className={style.scorePlacar}>
          <p>Score</p>
          <span>12</span>
        </div>
      </div>
    </div>
  );
};

export default Score;
