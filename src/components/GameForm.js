import React, { useState } from 'react';

const GameForm = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [gamePlayers, setGamePlayers] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'START_GAME', payload: { name, players: gamePlayers } });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePlayerChange = (e) => {
    setGamePlayers(parseInt(e.target.value));
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={handleNameChange}
        />
        <input type="number" defaultValue="2" min="2" max="4" onChange={handlePlayerChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default GameForm;
