// 0-constants.js
// Modifica taskFirst para usar const
export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  // Modifica taskNext para usar let
  export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
  
  export function getLast() {
    return ' is okay';
  }
  