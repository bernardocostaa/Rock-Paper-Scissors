import React from 'react'
import style from "./Options.module.css";
import RockSvg from '../Assets/icon-rock.svg'

const Rock = ({newClass}) => {
  return (
    <div className={newClass ? `${style.lastOvalRock} ${style.newWidthheightLast}` : style.lastOvalRock}>
    <div className={newClass ? `${style.secondOvalRock} ${style.newWidthheightSecond}` : style.secondOvalRock}>
      <div className={newClass ? `${style.thirdOvalRock} ${style.newWidthheightThird}` : style.thirdOvalRock}>
      <div className={newClass ? `${style.rockWhiteOne} ${style.newWidthheightWhiteOne}` : style.rockWhiteOne}>
                <div className={newClass ? `${style.rockWhiteTwo} ${style.newWidthheightWhiteSecond}` : style.rockWhiteTwo}>
               <img className={newClass ? `${style.imgRock} ${style.newWidthheightImg}` :style.imgRock} src={RockSvg} alt="Foto de pedra feita com o mão" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rock