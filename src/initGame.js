const createSuit = (suit) => {
  const suitArray = [];
  for (let value = 2; value <= 14; value += 1) {
    suitArray.push({
      id: Math.floor(Math.random() * 1e9 + 1),
      value,
      suit,
    });
  }

  return suitArray;
};

const createDeck = () => {
  const clubs = createSuit('clubs');
  const diamonds = createSuit('diamonds');
  const hearts = createSuit('hearts');
  const spades = createSuit('spades');

  const deck = [...clubs, ...diamonds, ...hearts, ...spades];
  deck.sort((a, b) => a.id - b.id);

  return deck;
};

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

export { createDeck, createSuit };
