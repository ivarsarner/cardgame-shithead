import { createDeck, createSuit } from '../initGame';

test('create deck, returns an array with 52 length (52 playing cards)', () => {
  expect(createDeck().length).toBe(52);
});

test('create suit, returns an array with 13 length (13 cards in on suit)', () => {
  expect(createSuit('clubs').length).toBe(13);
});

test('initialize a new game, should return an object', () => {
  expect(createSuit('clubs').length).toBe(13);
});
