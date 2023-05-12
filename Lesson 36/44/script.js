const form = document.querySelector(".burger-form");

const BURGER_PROPS = {
  small: {
    price: 50,
    calories: 20,
  },
  big: {
    price: 100,
    calories: 40,
  },
  cheese: {
    price: 10,
    calories: 20,
  },
  salad: {
    price: 20,
    calories: 5,
  },
  potatoe: {
    price: 15,
    calories: 10,
  },
  mayonnaise: {
    price: 20,
    calories: 5,
  },
  seasoning: {
    price: 15,
    calories: 0,
  },
};

class Burger {
  constructor(size, cheese, salad, potatoe, mayonnaise, seasoning) {
    this.size = size;
    this.cheese = cheese;
    this.salad = salad;
    this.potatoe = potatoe;
    this.mayonnaise = mayonnaise;
    this.seasoning = seasoning;
  }
}

const burgerSizeSmall = document.querySelector("#small"),
  burgerSizeBig = document.querySelector("#big"),
  cheese = document.querySelector("#cheese"),
  salad = document.querySelector("#salad"),
  potatoe = document.querySelector("#potatoe"),
  mayonnaise = document.querySelector("#mayonnaise"),
  seasoning = document.querySelector("#seasoning");

const orderForm = document.querySelector(".order-form"),
  orderTotal = document.querySelector(".order-total"),
  orderTotalBox = document.querySelector(".total-box");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const burger = new Burger(
    burgerSizeSmall.checked ? "small" : "big",
    cheese.checked,
    salad.checked,
    potatoe.checked,
    mayonnaise.checked,
    seasoning.checked
  );

  const { price, calories } = calculateBurgerProperties(burger);

  orderTotalBox.innerHTML = `<p class="total-item">Price: ${price}₴</p><p class="total-item">Calories: ${calories} cal</p>`;

  console.log(burger);
  console.log("Price:", price);
  console.log("Calories:", calories);
});

function calculateBurgerProperties(burger) {
  let price = 0;
  let calories = 0;

  if (BURGER_PROPS[burger.size]) {
    price += BURGER_PROPS[burger.size].price;
    calories += BURGER_PROPS[burger.size].calories;
  }

  if (burger.cheese) {
    price += BURGER_PROPS.cheese.price;
    calories += BURGER_PROPS.cheese.calories;
  }

  if (burger.salad) {
    price += BURGER_PROPS.salad.price;
    calories += BURGER_PROPS.salad.calories;
  }

  if (burger.potatoe) {
    price += BURGER_PROPS.potatoe.price;
    calories += BURGER_PROPS.potatoe.calories;
  }

  if (burger.mayonnaise) {
    price += BURGER_PROPS.mayonnaise.price;
    calories += BURGER_PROPS.mayonnaise.calories;
  }

  if (burger.seasoning) {
    price += BURGER_PROPS.seasoning.price;
    calories += BURGER_PROPS.seasoning.calories;
  }

  return { price, calories };
}
