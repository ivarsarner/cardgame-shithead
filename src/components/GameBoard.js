import React, { useState, useEffect, useReducer } from 'react';
import { createDeck } from '../initGame';
import GameRound from './GameRound';
import styled from 'styled-components';


const CardHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const MidHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -160px;
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
  const players = [];
  const playedCards = [];

  const createPlayer = (name, index) => {
    return {
      isHuman: (name && index === 0),
      isTurn: (index === 0),
      name: index === 0 ? name : `CPU Player${index}`,
      id: index,
      cards: {
        faceDownCards: {},
        faceUpCards: {
          firstSlot: [],
          secondSlot: [],
          thirdSlot: [],
        },
        handCards: {},
      },
    };
  };

  const dealCards = (cards) => {
    cards.faceDownCards = deck.splice(-3, 3);
    cards.faceUpCards.firstSlot = [deck.pop()];
    cards.faceUpCards.secondSlot = [deck.pop()];
    cards.faceUpCards.thirdSlot = [deck.pop()];
    cards.handCards = deck.splice(-3, 3);
    return cards;
  };

  if (players.length == 0) {
    const initPlayers = Array(gameState.players).fill(null)
      .map(($, index) => createPlayer(gameState.name, index));
    players.push(...initPlayers);
  }

  players.map((player) => {
    player.cards = dealCards(player.cards);
    return player;
  });

  return (
    <div>
      {(deck.length > 52 - parseInt(gameState.players) * 9) ?
        <TitleText>Loading...</TitleText>
        :
        <GameRound players={players} deck={deck} playedCards={playedCards} />
      }

    </div>
  );
};

export default GameBoard;
