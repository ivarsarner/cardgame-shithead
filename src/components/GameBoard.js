import React, { useState } from 'react';
import { createDeck, createSuit } from '../initGame';

const createPlayer = () => ({
    isHuman: true,
    isTurn: true,
    name: '',
    id: 0,
    cards: {
      faceDownCards: [],
      faceUpCards: {
        firstSlot: [],
        secondSlot: [],
        thirdSlot: [],
      },
      handCards: [],
    },
  });


const GameBoard = ({ gameState }) => {

    let filledArray = new Array(gameState.players).fill('');
    console.log(filledArray);

    const deck = createDeck();

    return (
        <div> GAME IS ON
            {gameState.players}
            {gameState.name}
            {deck.map((card) => (<div key={card.id}> {card.suit} : {card.value} </div>))}
        </div>
    )
}

export default GameBoard;