import React, { useState, useEffect } from 'react';
import { createDeck } from '../initGame';

const GameBoard = ({ gameState }) => {
  const [deck, setDeck] = useState(createDeck());
  const [players, setPlayers] = useState([]);

  const createPlayer = (name, index) => {
    return {
      isHuman: !!(name && index === 0),
      isTurn: false,
      name: index === 0 ? name : `CPU Player${index}`,
      id: index,
      cards: {
        faceDownCards: [deck.splice(-3, 3)],
        faceUpCards: {
          firstSlot: [deck.pop()],
          secondSlot: [deck.pop()],
          thirdSlot: [deck.pop()],
        },
        handCards: [deck.splice(-3, 3)],
      },
    };
  };

  // to create a listener that re-renders on change of individual players card should we create a
  // state with referencing objects to each players hand and set a useEffect on that object?

  useEffect(() => {
    const setUpPlayers = Array(gameState.players).fill(null)
      .map(($, index) => createPlayer(gameState.name, index));
    setPlayers(setUpPlayers);
  }, []);


  return (
    <div>
      {' '}
      GAME IS ON
      {players.map((player) => (
        <div key={player.name}>
          {player.name}
          {' '}
          +
          {' '}
          {player.id}
          {' '}
          +
          {' '}
          {player.isHuman.toString()}
        </div>
      ))}
      {gameState.name}
      {deck.map((card) => (
        <div key={card.id}>
          {' '}
          {card.suit}
          {' '}
          :
          {' '}
          {card.value}
          {' '}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
