import store from '../../../src/store/index';

describe('store', () => {
  let initialStore;

  beforeEach(() => {
    initialStore = store.state;
  });

  afterEach(() => {
    store.replaceState(initialStore);
  });

  it('generates 81 cards and sets up the board', () => {
    store.dispatch('restart');
    expect(store.state.cards.length + store.state.board.length).toBe(81);
    expect(store.state.board.length).toBe(store.state.cardsPerBoard);
  });
});
