class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;

    if (this.isValidOperation(znak)) {
      const result = this.calculate(X, Y, znak);
      console.log(`Result: ${result}`);
    } else {
      console.log("Error.");
      this.input();
    }
  }

  isValidOperation(znak) {
    const allowedOperators = ["+", "-", "/", "*", "%"];
    return allowedOperators.includes(znak);
  }

  calculate(X, Y, znak) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "/":
        return X / Y;
      case "*":
        return X * Y;
      case "%":
        return X % Y;
    }
  }

  input() {
    const obj = {};

    obj.X = parseInt(prompt("Enter X:"));
    obj.Y = parseInt(prompt("Enter Y:"));
    obj.znak = prompt("Enter sign (+, -, /, *, %):");

    this.check(obj);
  }
}

const math = new SuperMath();
math.input();
