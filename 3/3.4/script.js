function rand(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(kLength, characters) {
  const key = [];

  for (let j = 0; j < kLength; j++) {
    key.push(characters[rand(0, characters.length)]);
  }
  return key.join("");
}

const key = generateKey(16, characters);

console.log(key)