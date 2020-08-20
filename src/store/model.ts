import { Card } from '@/logic/model';

export interface State {
  cardsPerBoard: number;
  cards: Card[];
  board: Card[];
  points: number;
}

export type StateValue = Card[] | number;
