function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

// ================ Вариант 1 =================

// let img = document.querySelector(".img");
// img.setAttribute("src", `${getRandom(1, 9)}.png`);

// ================ Вариант 2 ================

const images = [];

for (let i = 1; i <= 9; i++) {
  images.push(`${i}.png`);
}

let img = document.querySelector(".img");
img.setAttribute("src", `${images[getRandom(0, images.length - 1)]}`);
img.setAttribute("alt", `${images[getRandom(0, images.length - 1)]}`);
