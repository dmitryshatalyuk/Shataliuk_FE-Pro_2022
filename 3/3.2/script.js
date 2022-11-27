function rand(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

const arr = [];

const arrLength = prompt("Enter arr length");

for (let i = 0; i < arrLength; i++) {
  // arr.push(prompt('Enter element:'))
  arr.push(rand(1, 9));
}

console.log("Array:", arr);
console.log("Sorted array:", arr.sort());
console.log("Removed items:", arr.splice(2, 3));
console.log("Array with removed items:", arr);
