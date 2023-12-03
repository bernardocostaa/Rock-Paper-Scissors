import React from 'react'
import style from "./Options.module.css";
import ScissorSvg from '../Assets/icon-scissors.svg'

const Scissor = () => {
  return (
    <button>
      <div className={style.lastOvalScissor}>
        <div className={style.secondOvalScissor}>
          <div className={style.thirdOvalScissor}>
            <div className={style.scissorWhiteOne}>
                <div className={style.scissorWhiteTwo}>
                 <img className={style.imgScissor} src={ScissorSvg} alt="Foto de tesoura feita com o mão" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}

export default Scissor