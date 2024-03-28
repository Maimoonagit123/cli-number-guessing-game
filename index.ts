#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number 
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random()*10+2);
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1 to 12",
  },
]);
if(answer.userGuessedNumber === randomNumber) {
    console.log("Congragulations! you are a winner")
}else {
    console.log("You guess wrong number");
}
