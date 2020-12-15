import React, { useState } from 'react';
import Cards from './components/Cards';
import GameOver from './components/GameOver';
import Scoreboard from './components/Scoreboard';

function App() {
  const [score, setScore] = useState(0);
  const [selectedCards, setSelected] = useState(new Set());
  const [gameOver, setGameOver] = useState(false);

  const handleClick = id => {
    if (selectedCards.has(id)) {
      setGameOver(true);
    } else {
      setSelected((selected) => selected.add(id));
      setScore((score) => ++score);
    }
  }
  
  const resetGame = () => {    
    setScore(0);
    setSelected(new Set());
    setGameOver(false);
  }

  return (
    <div className="App">
      <h1>The goal is to select as many images in a row, without selecting the same image twice.</h1>
      <Scoreboard score={score} />
      {gameOver && <GameOver score={score} resetGame={resetGame} />}
      <Cards onClick={handleClick}/>
    </div>
  );
}

export default App;
