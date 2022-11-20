const currentYear = Number(new Date().getFullYear());

let age = currentYear - Number(prompt("What is the year of your birth?")),
  city = prompt("Where are you from?", 'Kyiv, Washington, London'),
  favSport = prompt("What is your favourite sport?", 'baseball, basketball, football');

const cities = {
  Kyiv: "Ukraine",
  Washington: "the United States",
  London: "the United Kingdom",
};

const sports = {
  basketball: "Michael Jordan",
  baseball: "Mike Trout",
  football: "Lionel Messi",
};

console.log(
  `${age} y.o | ${city}, ${cities[city]} | ${favSport}, ${sports[favSport]}`
);

if (age === currentYear) {
  alert("Шкода, що Ви не захотіли ввести свій вік");
} else if (city === null || city.trim() === "") {
  alert("Шкода, що Ви не захотіли ввести своє місто");
} else if (favSport === null || favSport.trim() === "") {
  alert("Шкода, що Ви не захотіли ввести свій улюблений спорт");
} else {
  if (city === "Kyiv" || city === "Washington" || city === "London") {
    if (
      favSport === "basketball" ||
      favSport === "baseball" ||
      favSport === "football"
    ) {
      alert(
        `So you are ${age} y.o person from ${city} — the capital of ${cities[city]}, and you want to be as good as ${sports[favSport]}. Nice!`
      );
    } else {
      alert(
        `So you are ${age} y.o person from ${city} — the capital of ${cities[city]}, and you want to be super cool ${favSport}ist.. Nice!`
      );
    }
  } else {
    alert(
      `So you are ${age} y.o person from ${city}, and you want to be super cool ${favSport}ist.. Nice!`
    );
  }
}
