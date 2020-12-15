import React, { useState } from 'react';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';

function App() {
  const [score, setScore] = useState(0);
  const [cards] = useState([
    {cardNumber: 1},
    {cardNumber: 2},
    {cardNumber: 3},
    {cardNumber: 4},
    {cardNumber: 5},
    {cardNumber: 6},
    {cardNumber: 7},
    {cardNumber: 8},
    {cardNumber: 9},
    {cardNumber: 10},
  ]);
  const [selectedCards, setSelected] = useState(new Set());

  const handleClick = id => {
    if (selectedCards.has(id)) {
      
    } else {
      console.log(id);
      setSelected((selected) => selected.add(id));
      setScore((score) => ++score);
    }
  }

  return (
    <div className="App">
      <h1>Memory Game!</h1>
      {/* 1. Create array of cards
          2. Display cards in random order
          3. Track selected card on click
          4. Track score based on correct clicks
          5. Identify when duplicate card is clicked
          6. reset game */}
      <Scoreboard score={score} />
      <Cards cards={cards} onClick={handleClick}/>
    </div>
  );
}

export default App;
