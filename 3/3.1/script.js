// alert("Ту си ол зе таскс плиз лук эт зе консолечка");

// 1 – Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)

console.log("Task one:");

function TwentyToThirty() {
  for (let i = 40; i < 60; i++) {
    console.log(i / 2 + 0.5);
  }
}

TwentyToThirty();
console.log("=======================");

// 2 – Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

console.log("\n\nTask two:");

function UAHToUSD() {
  let usd = 27;
  let ammount = 0;
  for (let i = 0; i < 10; i++) {
    ammount += 10;
    console.log(
      `${ammount} dollars in uah at the rate of ${usd} equals ${ammount * usd}`
    );
  }
}

UAHToUSD();
console.log("=======================");

// 3 – Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

console.log("\n\nTask three:");

function Quadratic(n) {
  for (let i = 1; i <= 100; i++) {
    if (Math.pow(i, 2) < n) console.log(i);
  }
}

Quadratic(279);
console.log("=======================");

// 4 – Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

console.log("\n\nTask four:");

function CheckIfPrime(n) {
  let isPrime = true;

  if (n === 1) {
    console.log(`${n} is always a prime number`);
  } else if (n > 1) {
    for (let i = 2; i < n; i++) {
        // console.log(i, n % i);
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${n} is a prime number.`);
    } else {
      console.log(`${n} is not a prime number.`);
    }
  }
}

CheckIfPrime(199);
CheckIfPrime(297);

console.log("=======================");

// 5 – Дане деяке число. Визначити, чи можна одержати це число шляхом зведення
// числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

console.log("\n\nTask five:");

function Threeable(n) {
  let threeable = false;

  for (let i = 1; i < n; i++) {
    // console.log(n, Math.pow(3, i))
    if (n === Math.pow(3, i)) {
      threeable = true;
      break;
    }
  }
  if (threeable) {
    console.log(`${n} is threeable`);
  } else {
    console.log(`${n} is not threeable`);
  }
}


Threeable(81);
Threeable(80);