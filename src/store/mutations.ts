import { MutationTree } from 'vuex';
import { State } from '@/store/model';
import { Card } from '@/logic/model';

export const mutations = <MutationTree<State>> {
  setCards(state, payload: Card[]) {
    state.cards = payload;
  },

  setBoard(state, payload: Card[]) {
    state.board = payload;
  },

  setPoints(state, payload: number) {
    state.points = payload;
  }
};
