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
  let input = parseInt(document.getElementById("user-number").value);
  if (typeof input === "number" && !isNaN(input)) {
    let resultArr  = arrayBuild(input);
    console.log("This is the result in the input check function: " + resultArr.split(" "));
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