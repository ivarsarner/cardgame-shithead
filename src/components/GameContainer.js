import React, { useReducer } from 'react';
import styled from 'styled-components';
import GameForm from './GameForm';
import GameBoard from './GameBoard';
import gameReducer from '../reducers/gameReducer';


const BoardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: green;
height: 100%;
`;

const Headline = styled.h1`
color: white;
text-shadow: 5px 5px 10px black, 0 0 50px red, 0 0 10px darkred;
`;

const initialState = { isActive: false, players: 0, name: '' };

const GameContainer = () => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);
  console.log('test');

  return (
    <>
      <BoardContainer>
        <Headline>Shithead Cardgame</Headline>
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
