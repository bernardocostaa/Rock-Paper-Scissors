import React from "react";
import style from "./Options.module.css";
import PaperSvg from '../Assets/icon-paper.svg'

const Paper = () => {
  return (
    <button>
      <div className={style.lastOvalPaper}>
        <div className={style.secondOvalPaper}>
          <div className={style.thirdOvalPaper}>
            <div className={style.paperWhiteOne}>
                <div className={style.paperWhiteTwo}>
                 <img className={style.imgPaper} src={PaperSvg} alt="Foto de papal feita com o mão" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Paper;
