import React from 'react'
import style from "./Options.module.css";
import ScissorSvg from '../Assets/icon-scissors.svg'

const Scissor = ({newClass}) => {
  return (
    <div className={newClass ? `${style.lastOvalScissor} ${style.newWidthheightLast}` : style.lastOvalScissor}>
    <div className={newClass ? `${style.secondOvalScissor} ${style.newWidthheightSecond}` : style.secondOvalScissor}>
      <div className={newClass ? `${style.thirdOvalScissor} ${style.newWidthheightThird}` : style.thirdOvalScissor}>
      <div className={newClass ? `${style.scissorWhiteOne} ${style.newWidthheightWhiteOne}` : style.scissorWhiteOne}>
                <div className={newClass ? `${style.scissorWhiteTwo} ${style.newWidthheightWhiteSecond}` : style.scissorWhiteTwo}>
                 <img className={newClass ? `${style.imgScissor} ${style.newWidthheightImg}`:style.imgScissor} src={ScissorSvg} alt="Foto de tesoura feita com o mão" />
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Scissor