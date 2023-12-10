import React from "react";
import style from "./Options.module.css";
import PaperSvg from '../Assets/icon-paper.svg'

const Paper = ({newClass}) => {

  console.log(newClass);

  return (
      <div className={newClass ? `${style.lastOvalPaper} ${style.newWidthheightLast}` : style.lastOvalPaper}>
        <div className={newClass ? `${style.secondOvalPaper} ${style.newWidthheightSecond}` : style.secondOvalPaper}>
          <div className={newClass ? `${style.thirdOvalPaper} ${style.newWidthheightThird}` : style.thirdOvalPaper}>
            <div className={newClass ? `${style.paperWhiteOne} ${style.newWidthheightWhiteOne}` : style.paperWhiteOne}>
                <div className={newClass ? `${style.paperWhiteTwo} ${style.newWidthheightWhiteSecond}` : style.paperWhiteTwo}>
                 <img className={newClass ? `${style.imgPaper} ${style.newWidthheightImg}` :style.imgPaper} src={PaperSvg} alt="Foto de papal feita com o mão" />
                </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Paper;
