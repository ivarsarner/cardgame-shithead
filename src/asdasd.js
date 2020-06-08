const createPlayer = () => ({
  isHuman: true,
  isTurn: true,
  name: '',
  id: 0,
  cards: {
    faceDownCards: [],
    faceUpCards: {
      firstSlot: [],
      secondSlot: [],
      thirdSlot: [],
    },
    handCards: [],
  },
});

const initializeGame = (name, nrOfPlayers, difficulty, extraOptions) => {
  const game = {
    isActive: false,
    players: [],
  };
};
