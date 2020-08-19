function shuffleArray(array) {
  const arr = [...array];

  arr.forEach((value, index) => {
    const indexToSwap = Math.floor(Math.random() * (index + 1));
    arr[index] = arr[indexToSwap];
    arr[indexToSwap] = value;
  });
  return arr;
}

export function generateCards() {
  const cards = [];
  let id = 0;

  ['oval', 'diamond', 'squiggle'].forEach((shape) => {
    ['open', 'striped', 'solid'].forEach((shading) => {
      ['red', 'green', 'purple'].forEach((color) => {
        [1, 2, 3].forEach((number) => {
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
  // return cards;
  return shuffleArray(cards);
}
