import Vue from 'vue';
import Vuex from 'vuex';
import { generateCards } from './cards';
import { isSet } from './helpers/isSet';

Vue.use(Vuex);

const vueSet = (key) => (state, val) => {
  Vue.set(state, key, val);
};

export default new Vuex.Store({
  state: {
    cardsPerBoard: 15,
    cards: generateCards(),
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
      const board = [...state.board];
      const cards = [...state.cards];

      while (board.length < state.cardsPerBoard && cards.length) {
        board.push(cards.pop());
      }
      commit('setCards', cards);
      commit('setBoard', board);
    },

    selectSet({ state, dispatch, commit }, cardIds) {
      if (isSet([
        state.board[cardIds[0]],
        state.board[cardIds[1]],
        state.board[cardIds[2]],
      ])) {
        // dispatch('replaceCards', cardIds);
        dispatch('removeCards', cardIds);
        dispatch('drawCards');
        commit('setPoints', state.points + 3);
      }
    },

    removeCards({ commit, state }, cardIds) {
      const board = [...state.board].filter((_, index) => !cardIds.includes(index));
      commit('setBoard', board);
    },

    replaceCards({ commit, state }, cardIds) {
      const cards = [...state.cards];
      const board = [...state.board].map((value, index) => {
        if (!cardIds.includes(index)) {
          return value;
        }
        return cards.pop();
      });
      commit('setCards', cards);
      commit('setBoard', board);
    },

    restart({ commit, dispatch }) {
      commit('setCards', generateCards());
      commit('setBoard', []);
      commit('setPoints', 0);
      dispatch('drawCards');
    }
  },

  modules: {
  },
});
