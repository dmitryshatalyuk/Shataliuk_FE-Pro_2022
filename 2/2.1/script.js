let numOne = prompt("Enter first number:"),
  numTwo = prompt("Enter second number:"),
  operation = prompt("Enter the operation:");

if (Number(numOne) && Number(numTwo)) {
  switch (operation) {
    case "+":
    case "add":
      alert(`The result of addition of ${numOne} and ${numTwo} is ${numOne + numTwo}`);
      break;

    case "-":
    case "sub":
      alert(`The result of subtraction of ${numOne} and ${numTwo} is ${numOne - numTwo}`);
      break;

    case "*":
    case "mult":
      alert(`The result of multiplication of ${numOne} and ${numTwo} is ${numOne * numTwo}`);
      break;

    case "/":
    case "mult":
      alert(`The result of multiplication of ${numOne} and ${numTwo} is ${numOne / numTwo}`);
      break;

    default:
      alert(`We don't know what is ${operation}`);
  }
} else {
  alert("First and second NUMBERS must be numbers");
}
