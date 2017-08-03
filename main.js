//Globals =======================================================//
const btns = document.querySelectorAll("button");
const calScreen = document.querySelector(".screen-content");
let inputString = "";
let totalMaths = 0;
let mathsArray = [];

// Add Event Listeners to Buttons ===============================//
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", collectInput)
};

// Main Program ================================================//

function collectInput () {
  if (this.value == "c") {
    clearScreen();
  }else if (this.value == "=") {
    toMathsArray(inputString);
    doTotalMaths(mathsArray);
    returnTotals(mathsArray);
  }else if (this.value == "+" || this.value == "-" || this.value == "/" || this.value == "*") {
    console.log(this.value);
    inputString += " " + this.value.toString() + " ";
    calScreen.textContent = inputString;
  } else {
    console.log(this.value);
    inputString += this.value.toString();
    calScreen.textContent = inputString;
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

function toMathsArray (str) {
  mathsArray = str.split(" ");
  console.log(mathsArray);
  return mathsArray;
}

//============================================ Math Functions ===========//
function multiply (arr) {
  let temp = 0;
  const mult = arr.indexOf('*');
  temp = parseInt(arr[mult - 1]) * parseInt(arr[mult + 1]);
  console.log("this is temp " + temp)
  arr.splice((mult -1), (mult+2));
  arr.unshift(temp);
  console.log(arr);
  return arr;
}

function divide (arr) {
  let temp = 0;
  const mult = arr.indexOf('/');
  temp = parseInt(arr[mult - 1]) / parseInt(arr[mult + 1]);
  console.log("this is temp " + temp)
  arr.splice((mult -1), (mult+2));
  arr.unshift(temp);
  console.log(arr);
  return arr;
}

function mAdd (arr) {
  let temp = 0;
  const mult = arr.indexOf('+');
  temp = parseInt(arr[mult - 1]) + parseInt(arr[mult + 1]);
  console.log("this is temp " + temp)
  arr.splice((mult -1), (mult+2));
  arr.unshift(temp);
  console.log(arr);
  return arr;
}

function mSubtract (arr) {
  let temp = 0;
  const mult = arr.indexOf('-');
  temp = parseInt(arr[mult - 1]) - parseInt(arr[mult + 1]);
  console.log("this is temp " + temp)
  arr.splice((mult -1), (mult+2));
  arr.unshift(temp);
  console.log(arr);
  return arr;
}

function returnTotals (arr) {
  inputString = arr[0];
  calScreen.textContent = inputString;
}

function doTotalMaths (arr) {
  for (let i = 0; i < arr.length; i++) {
    if(arr.indexOf("*") > -1) multiply(mathsArray);
    if(arr.indexOf("/") > -1) divide(mathsArray);
    if(arr.indexOf("+") > -1) mAdd(mathsArray);
    if(arr.indexOf("-") > -1) mSubtract(mathsArray);
    returnTotals(totalMaths)
  }
}
