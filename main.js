//Globals =======================================================//
const btns = document.querySelectorAll("button");
const calScreen = document.querySelector(".screen-content");
console.log(btns);
let inputString = "";

// Add Event Listeners to Buttons ===============================//
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", collectInput)
};

// Main Program ================================================//

function collectInput () {
  if (this.value == "c") {
    clearScreen();
  }else if (this.value == "=") {
    if (inputString > -1) {
      inputString = eval(inputString).toFixed(2);
      displayInput(inputString);
    } else {
    inputString = eval(inputString);
    displayInput(inputString);
    }
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
  displayInput(inputString);
}
