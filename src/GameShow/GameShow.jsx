import React from 'react'
import style from './GameShow.module.css'
import Paper from '../GameStart/Paper'
import Rock from '../GameStart/Rock'
import Scissor from '../GameStart/Scissor'

const GameShow = ({playerChoice}) => {
    let PlayerNow;
    if(playerChoice === 'Paper'){
       PlayerNow = Paper
    }else if(playerChoice === 'Rock'){
       PlayerNow = Rock
    }else{
        PlayerNow = Scissor
    }

  return (
    <div className={style.areaGame}>
        <div>
            <p className={style.textChoice}>You Picked</p>
            <PlayerNow newClass={true} />
        </div>
        <div>
            <p className={style.textChoice}>The House Picked</p>
       
        </div>
    </div>
  )
}

export default GameShow