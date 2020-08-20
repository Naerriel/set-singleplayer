import {
  Card,
  CardColor,
  CardNumber,
  CardShading,
  CardShape
} from '@/logic/model';

function shuffleArray(array: Card[]) {
  const arr = [...array];

  arr.forEach((value, index) => {
    const indexToSwap = Math.floor(Math.random() * (index + 1));
    arr[index] = arr[indexToSwap];
    arr[indexToSwap] = value;
  });
  return arr;
}

export function generateCards() {
  const cards: Card[] = [];
  let id = 0;

  [CardShape.oval, CardShape.diamond, CardShape.squiggle].forEach((shape) => {
    [CardShading.open, CardShading.striped, CardShading.solid].forEach((shading) => {
      [CardColor.red, CardColor.green, CardColor.purple].forEach((color) => {
        [CardNumber.one, CardNumber.two, CardNumber.three].forEach((number) => {
          id += 1;
          cards.push({
            shape,
            shading,
            color,
            number,
            id,
          });
        });
      });
    });
  });
  return shuffleArray(cards);
}
