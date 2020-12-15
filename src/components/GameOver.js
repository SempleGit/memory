import React from 'react';

const GameOver = (props) => {
  return (
    <div className="game-over">
      <p>Final Score: {props.score}</p>
      <button onClick={props.resetGame}>New Game</button>
    </div>
  )
}

export default GameOver;