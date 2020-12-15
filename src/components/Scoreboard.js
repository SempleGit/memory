import React, { useState } from 'react';

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <p>Your Score: {props.score}</p>
    </div>
  )
}

export default Scoreboard;