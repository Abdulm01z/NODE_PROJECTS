#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

let welcomeMessage = `\n\t ▁ ▂ ▃ ▅ ▆ ▇ █ Welcome To My Currency Conversion Project █ ▇ ▆ ▅ ▃ ▂ ▁ \t\n`;
console.log(chalk.yellow(welcomeMessage));
let doContinue = true;
while (doContinue) {
  let currencyConversion = {
    USD: {
      USD: 1,
      GBP: 0.79,
      PKR: 277.54,
      CAD: 1.37,
      AUD: 1.54,
      AED: 3.67,
      QAR: 3.64,
      OMR: 0.38,
      KWD: 0.31,
      INR: 83.3,
    },
    GBP: {
      USD: 1.26,
      GBP: 1,
      PKR: 350.76,
      CAD: 1.69,
      AUD: 1.92,
      AED: 4.54,
      QAR: 4.5,
      OMR: 0.48,
      KWD: 0.39,
      INR: 104.23,
    },
    PKR: {
      USD: 0.0036,
      GBP: 0.0028,
      PKR: 1,
      CAD: 0.0049,
      AUD: 0.0056,
      AED: 0.013,
      QAR: 0.013,
      OMR: 0.0014,
      KWD: 0.0011,
      INR: 0.3,
    },
    CAD: {
      USD: 0.73,
      GBP: 0.58,
      PKR: 203.75,
      CAD: 1,
      AUD: 1.12,
      AED: 2.69,
      QAR: 2.66,
      OMR: 0.28,
      KWD: 0.23,
      INR: 60.93,
    },
    AUD: {
      USD: 0.65,
      GBP: 0.52,
      PKR: 181.51,
      CAD: 0.89,
      AUD: 1,
      AED: 2.39,
      QAR: 2.37,
      OMR: 0.25,
      KWD: 0.2,
      INR: 54.29,
    },
    AED: {
      USD: 0.27,
      GBP: 0.22,
      PKR: 75.83,
      CAD: 0.37,
      AUD: 0.42,
      AED: 1,
      QAR: 0.99,
      OMR: 0.1,
      KWD: 0.084,
      INR: 22.67,
    },
    QAR: {
      USD: 0.27,
      GBP: 0.22,
      PKR: 76.5,
      CAD: 0.37,
      AUD: 0.42,
      AED: 1.01,
      QAR: 1,
      OMR: 0.11,
      KWD: 0.085,
      INR: 22.88,
    },
    OMR: {
      USD: 2.6,
      GBP: 2.08,
      PKR: 723.46,
      CAD: 3.55,
      AUD: 3.99,
      AED: 9.54,
      QAR: 9.46,
      OMR: 1,
      KWD: 0.8,
      INR: 216.38,
    },
    KWD: {
      USD: 3.25,
      GBP: 2.6,
      PKR: 904.75,
      CAD: 4.44,
      AUD: 4.98,
      AED: 11.93,
      QAR: 9.46,
      OMR: 1.25,
      KWD: 1,
      INR: 270.6,
    },
    INR: {
      USD: 0.012,
      GBP: 0.0096,
      PKR: 3.34,
      CAD: 0.016,
      AUD: 0.018,
      AED: 0.044,
      QAR: 0.044,
      OMR: 0.0046,
      KWD: 0.0037,
      INR: 1,
    },
  };

  // PROMT USER FOR INPUT-

  const answer: {
    from:
      | "PKR"
      | "GBP"
      | "USD"
      | "CAD"
      | "AUD"
      | "AED"
      | "QAR"
      | "OMR"
      | "KWD"
      | "INR";
    to:
      | "PKR"
      | "GBP"
      | "USD"
      | "CAD"
      | "AUD"
      | "AED"
      | "QAR"
      | "OMR"
      | "KWD"
      | "INR";
    amount: number;
  } = await inquirer.prompt([
    {
      type: "list",
      name: "from",
      message: "Please select your currency",
      choices: [
        "PKR",
        "GBP",
        "USD",
        "CAD",
        "AUD",
        "AED",
        "QAR",
        "OMR",
        "KWD",
        "INR",
      ],
    },
    {
      type: "list",
      name: "to",
      message: "Please select your conversion rate",
      choices: [
        "PKR",
        "GBP",
        "USD",
        "CAD",
        "AUD",
        "AED",
        "QAR",
        "OMR",
        "KWD",
        "INR",
      ],
    },
    {
      type: "number",
      name: "amount",
      message: chalk.blueBright("Please enter the amount you wish to convert"),
    },
  ]);

  // Destructuring user input-

  const { from, to, amount } = answer;

  // perform currency conversion -
  if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(
      chalk.green(`Your conversion from ${from} to ${to} is ${result}`)
    );
  } else {
    console.log(chalk.red("invalid conversion"));
  }

  const reStart = await inquirer.prompt({
    type: "confirm",
    name: "continue",
    message: chalk.redBright("Do you want to Continue"),
  });
  doContinue = reStart.continue;
};
