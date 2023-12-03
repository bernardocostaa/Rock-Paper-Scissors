import React from 'react';
import './App.css'
import Score from './Score/Score';
import GameStart from './GameStart/GameStart';


function App() {

  return (
    <div className='background'>
     <Score/>
     <GameStart />
    </div>
  )
}

export default App
