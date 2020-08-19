import store from '../../../src/store/index';
import { generateCards } from '../../../src/store/cards';

const card = [{
  number: 1,
  shape: 'oval',
  color: 'green',
  shading: 'solid',
}];

describe('store', () => {
  let initialStore;

  beforeEach(() => {
    initialStore = store.state;
  });

  afterEach(() => {
    store.replaceState(initialStore);
  });

  it('generates 81 cards and sets up the board', async () => {
    await store.dispatch('restart');
    expect(store.state.cards.length + store.state.board.length).toBe(81);
    expect(store.state.board.length).toBe(store.state.cardsPerBoard);
  });

  it('removes cards from board with given IDs', async () => {
    await store.dispatch('restart');
    const ids = [0, 5, 7];
    const cards = ids.map((id) => store.state.board[id]);

    await store.dispatch('removeCards', ids);
    let allCardsRemoved = true;
    store.state.board.forEach((boardCard) => {
      if (!cards.every((cardToRemove) => cardToRemove !== boardCard)) {
        allCardsRemoved = false;
      }
    });
    expect(allCardsRemoved).toBeTruthy();
  });

  it('draw cards up to a full board', async () => {
    store.replaceState({
      ...initialStore,
      board: [card],
    });
    expect(store.state.board.length).toBe(1);
    await store.dispatch('drawCards');
    expect(store.state.board.length).toBe(store.state.cardsPerBoard);
  });

  describe('select set', () => {
    it('if set is correct, remove set and draw cards', async () => {
      store.replaceState({
        ...initialStore,
        cards: generateCards(),
        board: [card, card, card],
      });
      expect(store.state.board.length).toBe(3);

      await store.dispatch('selectSet', [0, 1, 2]);
      expect(store.state.board[0]).not.toBe(card);
      expect(store.state.board.length).toBe(store.state.cardsPerBoard);
    });

    it('if set is incorrect, don\'t remove or draw cards', async () => {
      store.replaceState({
        ...initialStore,
        cards: generateCards(),
        board: [card, card, {
          ...card,
          number: card.number + 1,
        }],
      });

      expect(store.state.board.length).toBe(3);
      await store.dispatch('selectSet', [0, 1, 2]);
      expect(store.state.board[0]).toBe(card);
      expect(store.state.board.length).toBe(3);
    });
  });
});
