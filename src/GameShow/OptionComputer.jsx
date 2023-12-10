import React from 'react'
import Paper from '../GameStart/Paper';
import Rock from '../GameStart/Rock';
import Scissor from '../GameStart/Scissor';

const OptionComputer = ({choicePlay}) => {
    let Computer;

    if (choicePlay === "Paper") {
        Computer = Paper;
      } else if (choicePlay === "Rock") {
        Computer = Rock;
      } else {
        Computer = Scissor;
      }
  return (
    <div><Computer newClass={true} /></div>
  )
}

export default OptionComputer