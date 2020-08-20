import Vue from 'vue';
import Vuex from 'vuex';
import { generateCards } from '@/logic/cards';
import { areCardsASet } from '@/logic/areCardsASet';
import { State, StateValue } from '@/store/model';
import { Card } from '@/logic/model';

Vue.use(Vuex);

const vueSet = (key: string) => (state: State, val: StateValue) => {
  Vue.set(state, key, val);
};

export default new Vuex.Store({
  state: {
    cardsPerBoard: 15,
    cards: [],
    board: [],
    points: 0,
  },

  mutations: {
    setCards: vueSet('cards'),
    setBoard: vueSet('board'),
    setPoints: vueSet('points'),
  },

  actions: {
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
  },
});
