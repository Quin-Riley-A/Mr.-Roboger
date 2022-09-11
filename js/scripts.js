//Utility Logic
//function will accept the integer i and a 3, 2, or 1
//function will check if i contains the digit 3/2/1 and return true or false

//Business Logic
function arrayBuild(userInput){
  let sequenceArr = [];
  //user selects negative number
  if (userInput < 0){
    //start at user's number and work up by 1. Brek when the int is 1
    for (let seqPosition = userInput; seqPosition <= 0; seqPosition++) {
      //move to Utility functions[1]
      let seqStrArr = (seqPosition.toString()).split("");
      if (seqStrArr.includes("3")){
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
    }
  }
  else if (userInput >=0) {
    for (let seqPosition = 0; seqPosition <= userInput; seqPosition++) {
      //move to Utility functions[1]
      let seqStrArr = (seqPosition.toString()).split("");
      if (seqStrArr.includes("3")){
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
    }
  }
  return sequenceArr;
}


//UI Logic
//a function that will pull user input from a forn and insert it into a variable

//initial event listener containing onload that waits for the form and page to load
  //within this, a listener attached to the form (defined as the form variable) exists within a loop
  //passes the users input to a utility function that checks if the input is infact an integer. if its not parseable the user will be reprompted.
  //as a bonus, if there is time, when the number is a floating point the form will prompt with an additional question asking if the user wants to round up or down to the nearest int
  //important to note that based on the way I have described this, the end product should function for negative inputs, allowing the user to give a negative number as a starting point and the sequence should work from their input up to zero.