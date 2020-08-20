import { Card } from '@/logic/model';
import { areCardsASet } from '@/logic/areCardsASet';
import { generateCards } from '@/logic/cards';
import { State } from '@/store/model';
import { ActionTree } from 'vuex';

export const actions = <ActionTree<State, State>> {
  drawCards({ commit, state }) {
    const board: Card[] = [...state.board];
    const cards: Card[] = [...state.cards];

    while (board.length < state.cardsPerBoard && cards.length) {
      board.push(cards.pop() as Card);
    }
    commit('setCards', cards);
    commit('setBoard', board);
  },

  selectSet({ state, dispatch, commit }, cardIds) {
    if (areCardsASet([
      state.board[cardIds[0]],
      state.board[cardIds[1]],
      state.board[cardIds[2]],
    ])) {
      dispatch('removeCards', cardIds);
      dispatch('drawCards');
      commit('setPoints', state.points + 3);
    }
  },

  removeCards({ commit, state }, cardIds) {
    const board = [...state.board].filter((_, index) => !cardIds.includes(index));
    commit('setBoard', board);
  },

  restart({ commit, dispatch }) {
    commit('setCards', generateCards());
    commit('setBoard', []);
    commit('setPoints', 0);
    dispatch('drawCards');
  }
};
