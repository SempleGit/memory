import React from 'react';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <h1>Memory Game!</h1>
      {/* 1. Create array of cards
          2. Display cards in random order
          3. Track selected card on click
          4. Track score based on correct clicks
          5. Identify when duplicate card is clicked
          6. reset game */}
      <Cards />
    </div>
  );
}

export default App;
