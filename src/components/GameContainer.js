import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import GameForm from './GameForm';
import GameBoard from './GameBoard';
import gameReducer from '../reducers/gameReducer';

const BoardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const initialState = { isActive: false, players: 0, name: '' }

const GameContainer = () => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  return (
    <>
      <BoardContainer>
        <header>
          <h2>This is the GameBoard</h2>
        </header>
        {!gameState.isActive ? (
          <GameForm dispatch={dispatch} />
        ) : (
            <GameBoard gameState={gameState} />
          )}
      </BoardContainer>
    </>
  );
};

export default GameContainer;
