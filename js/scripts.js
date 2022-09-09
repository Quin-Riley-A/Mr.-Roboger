//Utility Logic
//function will accept the integer i and a 3, 2, or 1
//function will check if i contains the digit 3/2/1 and return true or false

//Business Logic
function arrayBuild(userInput){
  let sequenceArr = [];
  if (userInput < 0){
    for(let seqPosition = userInput; seqPosition <= 0; seqPosition++) {
      let index = 1;
      //this nested loop is supposed to check if each number contains one of the digits 3 2 or 1 and if so add string and then increment to the next number
      for(let seqStr = seqPosition.toString(); index < seqStr.length; index++) {
        if (["1", "2", "3"].includes(seqStr[index])){
          sequenceArr.push("str");
          break;
        }
      }
      //meant to check if in the nested while loop you've found a target number and added a string "str"
      if (typeof (sequenceArr[sequenceArr.length-1]) === "string") {
        continue;
      }
      sequenceArr.push(seqPosition);
    }
  } else {
    for(let seqPosition = 0; seqPosition <= userInput; seqPosition++) {
      sequenceArr.push(seqPosition);
    }
  }
  return sequenceArr;
}
//a function containing a for loop that will generate numbers from [0,n] (inclusive) where n is the user's input
//each number will be passed to a utility function that checks if i (the most recent int in the current loop iteration) contains the desired digit
//this function will be written once and passed to up to three times in an if-ie-else branching sequence starting it will check if 3 is in i, then 2, then 1
//at each stage if the target digit is found the integer will be replaced with a specific phrase and returned. branching will then break
//the integer (or phrase) will be pushed to an array
//array will be passed to subsequent function

//UI Logic
//a function that will pull user input from a forn and insert it into a variable

//initial event listener containing onload that waits for the form and page to load
  //within this, a listener attached to the form (defined as the form variable) exists within a loop
  //passes the users input to a utility function that checks if the input is infact an integer. if its not parseable the user will be reprompted.
  //as a bonus, if there is time, when the number is a floating point the form will prompt with an additional question asking if the user wants to round up or down to the nearest int
  //important to note that based on the way I have described this, the end product should function for negative inputs, allowing the user to give a negative number as a starting point and the sequence should work from their input up to zero.