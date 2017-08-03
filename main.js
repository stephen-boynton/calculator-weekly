//Globals =======================================================//
const btns = document.querySelectorAll("button");
const calScreen = document.querySelector(".screen-content");
console.log(btns);
let inputString = "";
let totalMaths = 0;
let mathsArray = [];

// Add Event Listeners to Buttons ===============================//
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", collectInput(e))
};

// Main Program ================================================//

function collectInput () {
  if (this.value == "c") {
    clearScreen();
  }else if (this.value == "=") {
    inputString = eval(inputString);
    displayInput(inputString);
  } else {
    console.log(this.value);
    inputString += this.value.toString();
    displayInput(inputString);
  }
  return inputString;
}

function displayInput (string) {
  const calScreen = document.querySelector(".screen");
  calScreen.textContent = string;
}

function clearScreen () {
  inputString = "";
  calScreen.textContent = inputString;
}
