function isSameOrDifferent(array) {
  let different = true;
  let same = true;
  array.forEach((firstValue, firstIndex) => {
    array.forEach((secondValue, secondIndex) => {
      if (firstIndex === secondIndex) {
        return;
      }
      if (firstValue === secondValue) {
        different = false;
      }
      if (firstValue !== secondValue) {
        same = false;
      }
    });
  });
  return different || same;
}

export function isSet(set) {
  if (set.length !== 3) {
    return false;
  }
  const properties = [
    'shape',
    'shading',
    'color',
    'number',
  ];
  return properties.every((property) => isSameOrDifferent([
    set[0][property],
    set[1][property],
    set[2][property],
  ]));
}
