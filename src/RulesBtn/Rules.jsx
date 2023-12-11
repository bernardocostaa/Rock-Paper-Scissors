import React from 'react'
import style from './Rules.module.css'

const Rules = ({ setModal }) => {

  return (
    <>
      <button onClick={() => setModal((prevModal) => !prevModal)} className={style.btnRules}>Rules</button>
    </>
  )
}

export default Rules
