//Utility Logic
function digitChecker(sequenceArr, seqPosition, seqStrArr, userName) {
  if (seqStrArr.includes("3")) {
    sequenceArr.push("Won't you be my neighbor " + userName + "?");
  } 
  else if (seqStrArr.includes("2")) {
    sequenceArr.push("Boop!");
  }
  else if (seqStrArr.includes("1")) {
    sequenceArr.push("Beep!");
  }
  else {
    sequenceArr.push(seqPosition);
  }
  return sequenceArr;
}

//Business Logic
function arrayBuild(userInput, userName) {
  let sequenceArr = [];
  if (userInput < 0) {
    for (let seqPosition = userInput; seqPosition <= 0; seqPosition++) {
      let seqStrArr = seqPosition.toString().split("");
      sequenceArr = digitChecker(sequenceArr, seqPosition, seqStrArr, userName);
    }
  }
  else if (userInput >=0) {
    for (let seqPosition = 0; seqPosition <= userInput; seqPosition++) {
      let seqStrArr = seqPosition.toString().split("");
      sequenceArr = digitChecker(sequenceArr, seqPosition, seqStrArr, userName);
    }
  }
  return sequenceArr;
}

//UI Logic
function inputCheck(event) {
  event.preventDefault();
  let inputNum = document.getElementById("user-number").value;
  let inputName = document.getElementById("user-name").value;
  let div = document.getElementById("results");
  let pElement = document.getElementById("results-text");
  if (pElement !== null) {
    div.removeChild(pElement);
    }
  if (typeof parseInt(inputNum) === "number" && !isNaN(inputNum)) {
    let pElement = document.createElement("p");
    pElement.id = "results-text";
    let span = document.createElement("span");
    span.append("The sequence generated from your input is as follows: ");
    let resultArr  = arrayBuild(inputNum, inputName);
    for (let index = 0; index < resultArr.length; index++) {
      if (index < resultArr.length-1) {
        span.append(resultArr[index] + ", ");
      }
      else {
        span.append(resultArr[index]);
      }
      pElement.append(span);
      div.append(pElement);
    }
  }
  else {
    let pElement = document.createElement("p");
    pElement.id = "results-text";
    let span = document.createElement("span");
    span.className = "error";
    span.append("Your input appears to not be an acceptable integer input. Please try putting in a non-decimal number for a result displaying a sequence.");
    pElement.append(span);
    div.append(pElement);
  }
}

function formFinder(){
  let form = document.querySelector("form");
  form.addEventListener("submit", inputCheck)
}

window.addEventListener("load", formFinder);