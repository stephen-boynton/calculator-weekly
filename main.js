const btns = document.querySelectorAll("button");
console.log(btns);
let inputString = "";
let totalMaths

function collectInput () {
  const calScreen = document.querySelector(".screen-content");
  if (this.value == "c") {
    inputString = "";
    calScreen.textContent = inputString;
  }else if (this.value == "=") {
    doMaths(inputString);
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

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", collectInput)
};

function doMaths (str) {
  let mathArray = [];
  mathArray = str.split("");
  parseInt(mathArray);
  console.log(mathArray);
}
