#! /usr/bin/env node
console.log("Guess a number 1 to 9");
// now varible create 
let a = Math.floor(Math.random() * 9);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number",
        message: "Enter your guess number you want:" });
    //provide code 
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulation your guess number is absolutely correct ");
        break;
    }
    else {
        console.log("sorry you guess wrong number try again");
    }
}
