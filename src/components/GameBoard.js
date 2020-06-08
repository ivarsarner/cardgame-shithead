import React, { useState } from 'react';
import NewGameDialog from './NewGameDialog';

const GameBoard = () => {
  const [name, setName] = useState('');
  const [game, setGame] = useState({ isActive: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setGame({ isActive: true });
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <header>
        <h2>This is the GameBoard</h2>
      </header>
      {!game.isActive ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={handleChange}
          />
          <input type="number" value="2" />
          <input type="submit" />
        </form>
      ) : (
        <div> GAME IS ON</div>
      )}
    </>
  );
};

export default GameBoard;
