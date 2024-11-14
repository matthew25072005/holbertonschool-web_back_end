// 0-constants.js

export function taskFirst() {
  part1 = 'I prefer const';
  part2 = ' when I can.';
  const task = `${part1}${part2}`;
  return task
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
