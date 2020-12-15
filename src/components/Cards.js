import React, { useState } from 'react';
import one from './images/cats/one.jpg';
import two from './images/cats/two.jpg';
import three from './images/cats/three.jpg';
import four from './images/cats/four.jpg';
import five from './images/cats/five.jpg';
import six from './images/cats/six.jpg';
import seven from './images/cats/seven.jpg';
import eight from './images/cats/eight.jpg';
import nine from './images/cats/nine.jpg';
import ten from './images/cats/ten.jpg';


const Cards = (props) => {
  const [cards] = useState([
    {img: one, alt: 'cat image', cardNumber: 1},
    {img: two, alt: 'cat image', cardNumber: 2},
    {img: three, alt: 'cat image', cardNumber: 3},
    {img: four, alt: 'cat image', cardNumber: 4},
    {img: five, alt: 'cat image', cardNumber: 5},
    {img: six, alt: 'cat image', cardNumber: 6},
    {img: seven, alt: 'cat image', cardNumber: 7},
    {img: eight, alt: 'cat image', cardNumber: 8},
    {img: nine, alt: 'cat image', cardNumber: 9},
    {img: ten, alt: 'cat image', cardNumber: 10},
  ]);

  // const randomSort = () => {
  //   let r = [-1, 0, 1]
  //   return r[Math.floor(Math.random() * r.length)];
  // }

  // Durstenfeld Shuffle Array
  function randomSort() {
    const array = cards.slice();
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const cardDisplay = (randomSort()).map( ({cardNumber, img, alt}) => <div key={cardNumber} onClick={() => props.onClick(cardNumber)} className="card"><img src={img} alt={alt}></img></div>)
  
  return (
    <div className="card-display">
      {cardDisplay}
    </div>
  )
}

export default Cards;