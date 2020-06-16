import React, { useState, useEffect, useReducer } from 'react';
import { createDeck } from '../initGame';
import SVGRenderer from './SVGRenderer';
import PreRound from './PreRound';
import styled from 'styled-components';
import playCardReducer from '../reducers/playCardReducer';


const CardHolder = styled.div`
  display: flex;
  justify-content: center;

`;

const PlayerName = styled.h2`
color: white;
text-shadow: 5px 5px 10px black, 0 0 50px red, 0 0 10px darkred;
`;
const TitleText = styled.h4`
color: white;
text-shadow: 5px 5px 10px black, 0 0 50px red, 0 0 10px darkred;
`;


const GameBoard = ({ gameState }) => {
  const deck = createDeck();
  const openCard = [];
  const [players, setPlayers] = useState([]);
  const [round, setRound] = useState('');
  // const [initState, setInitState] = useState({});
  const initState = {players, deck, openCard};
  const [dunno, dispatch] = useReducer(playCardReducer, initState);
  console.log(initState);


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
        // startingCards: deck.splice(-6, 6),
      },
    };
  };

  useEffect(() => {
    const initPlayers = Array(gameState.players).fill(null)
      .map(($, index) => createPlayer(gameState.name, index));
    setPlayers(initPlayers);
    // setInitState({initPlayers, deck, openCard});

  }, []);


  return (
    <div>
      <SVGRenderer key={'deck'} faceDown={true}/>
      {players.map((player) => (
        <div key={player.name}>
          <PlayerName>{player.name}</PlayerName>
          <div>
            <CardHolder>
              {player.cards.faceDownCards.map((card) => <SVGRenderer key={card.id} card={card} playerInfo={player} hand={'final'} faceDown={true} />)}
            </CardHolder>
            <CardHolder>
              {player.cards.faceUpCards.firstSlot.map((card) => <SVGRenderer key={card.id} card={card} playerInfo={player} hand={'mid'} />)}
              {player.cards.faceUpCards.secondSlot.map((card) => <SVGRenderer key={card.id} card={card} playerInfo={player} hand={'mid'} />)}
              {player.cards.faceUpCards.thirdSlot.map((card) => <SVGRenderer key={card.id} card={card} playerInfo={player} hand={'mid'} />)}
            </CardHolder>
            <CardHolder>
              {player.cards.handCards.map((card) => <SVGRenderer key={card.id} card={card} playerInfo={player} hand={'hand'} />)}
            </CardHolder>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
