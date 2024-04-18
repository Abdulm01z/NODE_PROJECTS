#! /usr/bin/env node
import inquirer from "inquirer";

let welcomeMessage: string = `\n\t▁ ▂ ▃ ▅ ▆ ▇ █ ATM MACHINE █ ▇ ▆ ▅ ▃ ▂ ▁\t\n`;

console.log(welcomeMessage);

let myBalance = 10000;

let myPin = 1234;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your 4-digit pin ",
  type: "number",
});
if (pinAnswer.pin === myPin) {
  console.log("your pin is correct");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "fast cash", "check balance"],
    },
  ]);

  // if user select withdraw
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= myBalance) {
      let balance = myBalance - amountAns.amount;
      console.log(`The remainig balance is $ ${balance}`);
    } else {
      console.log(`You have insufficint balance`);
    }
  }
  // if user select fast cash
  else if (operationAns.operation === "fast cash") {
    let fastcashAns = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        choices: ["1000", "3000", "5000", "15000", "20000"],
      },
    ]);

    if (fastcashAns.amount <= myBalance) {
      let balance2 = myBalance - fastcashAns.amount;
      console.log(`the remaining balance is $${balance2}`);
    } else {
      console.log(`You have insufficient amount`);
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`$${myBalance}`);
  }
} else {
  console.log("Your pin is incorrect ");
}
