const startGameReducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return { isActive: true, players: action.payload.players, name: action.payload.name };
    default:
      return state;
  }
};

export default startGameReducer;
