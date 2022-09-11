//Utility Logic
function digitChecker(sequenceArr, seqPosition, seqStrArr) {
  if (seqStrArr.includes("3")) {
    sequenceArr.push("Won't you be my neighbor?");
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
function arrayBuild(userInput) {
  let sequenceArr = [];
  if (userInput < 0) {
    for (let seqPosition = userInput; seqPosition <= 0; seqPosition++) {
      let seqStrArr = seqPosition.toString().split("");
      sequenceArr = digitChecker(sequenceArr, seqPosition, seqStrArr);
    }
  }
  else if (userInput >=0) {
    for (let seqPosition = 0; seqPosition <= userInput; seqPosition++) {
      let seqStrArr = seqPosition.toString().split("");
      sequenceArr = digitChecker(sequenceArr, seqPosition, seqStrArr);
    }
  }
  return sequenceArr;
}

//UI Logic
//should take the input from user and find the if it is parseable to an integer.
function inputCheck(event) {
  event.preventDefault();
  let input = document.getElementById("user-number").value;
  let div = document.getElementById("results");
  let pElement = document.getElementById("results-text");
  if (pElement !== null) {
    div.removeChild(pElement);
    }
  if (typeof parseInt(input) === "number" && !isNaN(input)) {
    let resultArr  = arrayBuild(input);
    let pElement = document.createElement("p");
    pElement.id = "results-text";
    let span = document.createElement("span.zany");
    span.append("The sequence generated from your input is as follows: ");
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
      console.log("This is the result in the input check function: " + resultArr);
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

//initial event listener containing onload that waits for the form and page to load
  //within this, a listener attached to the form (defined as the form variable) exists within a loop
  //passes the users input to a utility function that checks if the input is infact an integer. if its not parseable the user will be reprompted.
  //as a bonus, if there is time, when the number is a floating point the form will prompt with an additional question asking if the user wants to round up or down to the nearest int
  //important to note that based on the way I have described this, the end product should function for negative inputs, allowing the user to give a negative number as a starting point and the sequence should work from their input up to zero.