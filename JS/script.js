const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");
// const numbers = document.querySelector(".btn-number");
const number = document.querySelector("[data-input]");
const clearButton = document.querySelector("#clear");
const backButton = document.querySelector("#backspace");
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const equalButton = document.querySelector("#equal");
const squareButton = document.querySelector("#square");
const rootButton = document.querySelector("#root");

let lastOperation = "";
let memory = 0;

// console.log(number.textContent);

buttons.addEventListener("click", inputNumber);

function inputNumber(event) {
  if (display.textContent.length > 15) {
    return;
  }

  let data = event.target.dataset.input;
  // console.log(data);
  if (data) {
    if (data === ".") {
      if (!display.textContent.includes(".")) {
        display.textContent += data;
      }
    } else {
      display.textContent += data;
      if (!display.textContent.includes(".")) {
        display.textContent = Number(display.textContent);
      }
    }
  }
}

//------------------- Clear Button
clearButton.addEventListener("click", () => {
  display.textContent = 0;
  let lastOperation = "";
  let memory = 0;
});

//------------------- Minus Button
minusButton.addEventListener("click", () => {
  lastOperation = "minus";
  memory = Number(display.textContent);
  display.textContent = 0;
  // display.textContent = `${memory} - `;
});

//------------------- Plus Button
plusButton.addEventListener("click", () => {
  lastOperation = "plus";
  memory = Number(display.textContent);
  display.textContent = 0;
  // display.textContent = minusButton.textContent;
});

//------------------- Devide Button
divideButton.addEventListener("click", () => {
  lastOperation = "divide";
  memory = Number(display.textContent);
  display.textContent = 0;
  // display.textContent = minusButton.textContent;
});

//------------------- Multiply Button
multiplyButton.addEventListener("click", () => {
  lastOperation = "multiply";
  memory = Number(display.textContent);
  display.textContent = 0;
  // display.textContent = minusButton.textContent;
});

//------------------- Equal Button
equalButton.addEventListener("click", () => {
  if (lastOperation !== "") {
    let number = Number(display.textContent);
    if (lastOperation == "minus") {
      display.textContent = memory - number;
    } else if (lastOperation == "plus") {
      display.textContent = memory + number;
    } else if (lastOperation == "divide") {
      display.textContent = memory / number;
    } else if (lastOperation == "multiply") {
      display.textContent = memory * number;
    }
    lastOperation = "";
  }
});

backButton.addEventListener("click", () => {
  if (display.textContent.length == 1) {
    display.textContent = 0;
  } else {
    display.textContent = display.textContent.substring(
      0,
      display.textContent.length - 1
    );
  }
});

squareButton.addEventListener("click", () => {
  display.textContent **= 2;
  lastOperation = "";
});

rootButton.addEventListener("click", () => {
  display.textContent = Math.sqrt(display.textContent);
  lastOperation = "";
});
