#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let welcomeMessage1: string = `\t ============================================================= \t`;
let welcomeMessage2: string = `\n\t     ▂▃▅▇█▓▒░ Welcome To My Word Counter Project  ░▒▓█▇▅▃▂ \t\n`;
let welcomeMessage3: string = `\t ============================================================= \t`;
console.log(chalk.green(welcomeMessage1));
console.log(chalk.green(welcomeMessage2));
console.log(chalk.green(welcomeMessage3));

let doContinue = true;

while (doContinue) {
  const Counter: {
    sentenceOrParagraph: string;
  } = await inquirer.prompt({
    type: "input",
    name: "sentenceOrParagraph",
    message: chalk.green("Write a sentences or paragraph--->"),
  });

  const WordCount = Counter.sentenceOrParagraph.trim().split(" ");
  console.log(WordCount.length);

  if (WordCount.length > 15) {
    console.log(chalk.green(`Your paragraph words is: ${WordCount.length}`));
  } else {
    console.log(chalk.green(`Your sentence words is: ${WordCount.length}`));
  }

  const characterCount = Counter.sentenceOrParagraph
    .trim()
    .replace(/\s/g, "").length;
  console.log(
    chalk.red(`Your character count of total words is: ${characterCount}`)
  );

  const restart = await inquirer.prompt({
    type: "confirm",
    name: "continue",
    message: "Do you want to continue?",
    default: false,
  });

  doContinue = restart.continue;
}
