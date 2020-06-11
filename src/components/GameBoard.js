import React, { useState, useEffect } from 'react';
import { createDeck } from '../initGame';
import { ReactSVG } from 'react-svg';
import card from '../cards/AS.svg';

const GameBoard = ({ gameState }) => {
  const [players, setPlayers] = useState([]);
  const deck = createDeck();
  
  const createPlayer = (name, index) => {
    return {
      isHuman: (name && index === 0),
      isTurn: false,
      name: index === 0 ? name : `CPU Player${index}`,
      id: index,
      cards: {
        faceDownCards: deck.splice(-3, 3),
        faceUpCards: {
          firstSlot: [deck.pop()],
          secondSlot: [deck.pop()],
          thirdSlot: [deck.pop()],
        },
        handCards: deck.splice(-3, 3),
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

  console.log(players);


  return (
    <div>
      {' '}
      GAME IS ON
      <ReactSVG
            src={card}
            onClick={() => console.log('test')}
          />
      {players.map((player) => (
        <div key={player.name}>
          <h2>{player.name}</h2>
          <div>
            <div>
              Face down cards: {player.cards.faceDownCards.map((card) => <span>{card.value} {card.suit}  {''}</span>)}
            </div>
            <div>
              Face up cards: {player.cards.faceUpCards.firstSlot.map((card) => <span>{card.value} {card.suit}  {''}</span>)}
              {player.cards.faceUpCards.secondSlot.map((card) => <span>{card.value} {card.suit}  {''}</span>)}
              {player.cards.faceUpCards.thirdSlot.map((card) => <span>{card.value} {card.suit}  {''}</span>)}
            </div>
            <div>
              Cards on hand: {player.cards.handCards.map((card) => <span>{card.value} {card.suit}{''} </span>)}
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default GameBoard;
