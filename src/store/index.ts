import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from '@/store/mutations';
import { actions } from '@/store/actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardsPerBoard: 15,
    cards: [],
    board: [],
    points: 0,
  },

  mutations,
  actions,
});
