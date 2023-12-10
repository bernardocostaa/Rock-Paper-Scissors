import React from 'react';
import './App.css'
import Score from './Score/Score';
import GameStart from './GameStart/GameStart';
import Rules from './RulesBtn/Rules';

function App() {
  const [score, setScore] = React.useState(0);

  return (
    <div className='background'>
      <Score score={score} />
      <GameStart  />
      <Rules />
    </div>
  );
}

export default App;
