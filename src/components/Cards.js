import React, { useState } from 'react';

const Cards = (props) => {
  const randomSort = () => {
    let r = [-1, 0, 1]
    return r[Math.floor(Math.random() * r.length)];
  }
  
  const cardDisplay = props.cards.sort(randomSort).map( ({cardNumber}) => <div key={cardNumber} onClick={() => props.onClick(cardNumber)} className="card">Card {cardNumber}</div>)
  
  return (
    <div className="card-display">
      {cardDisplay}
    </div>
  )
}

export default Cards;