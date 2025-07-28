let arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['f', 'g', 'h', 'i', 'j'];

// // // // // // SLICE
// 1st argument = INclusive, 2nd argument = EXclusive
// creates shallow copy into a new array (no mutation of the original array)
console.log('1. slice', arr.slice(2));
console.log('1. slice', arr.slice(2, 4));
console.log('1. slice', arr.slice(-2));
console.log('1. slice', arr.slice(-1, 5));
console.log('1. slice', [...arr]);

// // // // // // SPLICE
// 1st argument = INclusive, 2nd argument = 'delete count' (not index reference)
// mutates original array
// console.log('2. splice', arr.splice(2));
// console.log('2. splice', arr.splice(1, 4));
console.log('2. splice', arr.splice(-1));
console.log('2. splice', arr);

// // // // // // CONCAT
// does not mutate original array
// synonymous to using the spread operator (`console.log([...arr, ...arr2])`)
const letters = arr.concat(arr2);
console.log('3. concat', letters);

// // // // // // FOREACH
const moneyMovements = [200, -200, 340, -300, -20, 50, 400, -460];
for (const [i, movement] of moneyMovements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited $${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You WITHDREW $${Math.abs(movement)}`);
  }
}

// // // // // // MAP
// Map() call signature = [value, key, map]. You can call these variables whatever, but 'under the hood' it always refers to: [ array[0], array[1], array[2] ].
const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['AUD', 'Australian Dollar'],
  ['Pound Stirling', 'GBP'],
]);

currencies.forEach((value, key, map) => console.log(`${key}: ${value}`));
currencies.forEach((b, a, c) => console.log(`${b}: ${a}`));
