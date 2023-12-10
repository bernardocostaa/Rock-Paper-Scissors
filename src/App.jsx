import React from 'react';
import './App.css'
import Score from './Score/Score';
import GameStart from './GameStart/GameStart';
import Rules from './RulesBtn/Rules';


function App() {

  return (
    <div className='background'>
     <Score/>
     <GameStart />
     <Rules />
    </div>
  )
}

export default App
