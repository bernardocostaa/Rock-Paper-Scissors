import React from 'react'
import style from "./Options.module.css";
import RockSvg from '../Assets/icon-rock.svg'

const Rock = () => {
  return (
    <button>
    <div className={style.lastOvalRock}>
      <div className={style.secondOvalRock}>
        <div className={style.thirdOvalRock}>
          <div className={style.rockWhiteOne}>
              <div className={style.rockWhiteTwo}>
               <img className={style.imgRock} src={RockSvg} alt="Foto de pedra feita com o mão" />
              </div>
          </div>
        </div>
      </div>
    </div>
  </button>
  )
}

export default Rock