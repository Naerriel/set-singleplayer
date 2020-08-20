import { Card, CardProperties } from '@/logic/model';

function isSameOrDifferent([first, second, third]: Array<string | number>) {
  if (first === second && first === third) {
    return true;
  }
  if (first !== second && first !== third && second !== third) {
    return true;
  }
  return false;
}

export function areCardsASet(cards: Card[]) {
  if (cards.length !== 3) {
    return false;
  }
  const properties = [
    CardProperties.shape,
    CardProperties.shading,
    CardProperties.color,
    CardProperties.number,
  ];
  return properties.every((property) => isSameOrDifferent([
    cards[0][property],
    cards[1][property],
    cards[2][property],
  ]));
}
