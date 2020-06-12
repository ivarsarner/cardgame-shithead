import React, { useState, useEffect } from 'react';
import { createDeck } from '../initGame';
import SVGRenderer from './SVGRenderer';
import styled from 'styled-components';

const CardHolder = styled.div`
  display: flex;
  justify-content: center;
`;


const GameBoard = ({ gameState }) => {
  const [players, setPlayers] = useState([]);
  const [round, setRound] = useState('pre');
  const deck = createDeck();
  const apa = true;

  console.log(gameState.players);

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

  useEffect(() => {
    const setUpPlayers = Array(gameState.players).fill(null)
      .map(($, index) => createPlayer(gameState.name, index));
    setPlayers(setUpPlayers);
  }, []);


  return (
    <div>
      {' '}
      GAME IS ON
      {(round === 'pre') ? (
        players.map((player) => (
          <div key={player.name}>
            <h2>{player.name}</h2>
            <div>
              <CardHolder>
                Face down cards: {player.cards.faceDownCards.map((card) => <SVGRenderer key={card.id} card={card} faceDown={apa} />)}
              </CardHolder>
              <CardHolder>
                Face up cards: {player.cards.faceUpCards.firstSlot.map((card) => <SVGRenderer key={card.id} card={card} />)}
                {player.cards.faceUpCards.secondSlot.map((card) => <SVGRenderer key={card.id} card={card} />)}
                {player.cards.faceUpCards.thirdSlot.map((card) => <SVGRenderer key={card.id} card={card} />)}
              </CardHolder>
              <CardHolder>
                Cards on hand: {player.cards.handCards.map((card) => <SVGRenderer key={card.id} card={card} />)}
              </CardHolder>
            </div>
          </div>
        ))
      ) : (
          players.map((player) => (
            <div key={player.name}>
              <h2>{player.name}</h2>
              <div>
                <CardHolder>
                  Face down cards: {player.cards.faceDownCards.map((card) => <SVGRenderer key={card.id} card={card} faceDown={apa} />)}
                </CardHolder>
                <CardHolder>
                  Face up cards: {player.cards.faceUpCards.firstSlot.map((card) => <SVGRenderer key={card.id} card={card} />)}
                  {player.cards.faceUpCards.secondSlot.map((card) => <SVGRenderer key={card.id} card={card} />)}
                  {player.cards.faceUpCards.thirdSlot.map((card) => <SVGRenderer key={card.id} card={card} />)}
                </CardHolder>
                <CardHolder>
                  Cards on hand: {player.cards.handCards.map((card) => <SVGRenderer key={card.id} card={card} />)}
                </CardHolder>
              </div>
            </div>
          ))
        )}
    </div>
  );
};

export default GameBoard;
