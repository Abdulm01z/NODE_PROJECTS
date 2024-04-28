#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let doContinue = true;
let welcomMessage = `\n\t ▁ ▂ ▃ ▅ ▆ ▇ █  Student  Management  System  █ ▇ ▆ ▅ ▃ ▂ ▁ \t\n`;
console.log(chalk.green(welcomMessage));
while (doContinue) {
    const studentId = Math.floor(10000 + Math.random() * 90000);
    let myBalance = 0;
    let answer = await inquirer.prompt([
        {
            type: "input",
            message: chalk.blue("Enter student name:"),
            name: "student",
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return chalk.red("Please enter a non-empty value.");
            },
        },
        {
            name: "courses",
            type: "list",
            message: chalk.yellow("Select the course to enrolled"),
            choices: ["MS.office", "HTML", "Javascript", "Typescript", "Python"],
        },
    ]);
    const tutionFee = {
        "MS.office": 2000,
        HTML: 2500,
        Javascript: 5000,
        Typescript: 6000,
        Python: 10000,
    };
    console.log(chalk.green(`\nTution Fees: ${tutionFee[answer.courses]}/-\n`));
    console.log(chalk.gray(`Balance: ${myBalance}\n`));
    let paymentType = await inquirer.prompt([
        {
            name: "payment",
            type: "list",
            message: chalk.black("Select payment method"),
            choices: ["Bank Transfer", "Eastpaisa", "Jazzcash"],
        },
        {
            name: "amount",
            message: chalk.green("Transfer Money:"),
            type: "input",
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return chalk.red("Please enter a non-empty value,");
            },
        },
    ]);
    console.log(chalk.green(`\nYour select payment method ${paymentType.payment}\n`));
    const tutionFees = tutionFee[answer.courses];
    const paymentAmount = parseFloat(paymentType.amount);
    if (tutionFees === paymentAmount) {
        console.log(chalk.blue(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`));
        let ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "What would you like to do next?",
                choices: ["View Status", "Exit"],
            },
        ]);
        if (ans.select === "View Status") {
            console.log(chalk.blue("\n▁ ▂ ▃ ▅ ▆ ▇ █ Status  █ ▇ ▆ ▅ ▃ ▂ ▁\n"));
            console.log(chalk.gray(`Student Name: ${answer.student}`));
            console.log(chalk.green(`Student ID: ${studentId}`));
            console.log(chalk.yellow(`Coures ${answer.courses}`));
            console.log(chalk.magenta(`Tution Fees Paid: ${paymentAmount}`));
            console.log(chalk.red(`Balance: ${(myBalance += paymentAmount)}`));
        }
        else {
            console.log(chalk.gray("\nExiting Student Management System\n"));
        }
    }
    else {
        console.log(chalk.red("Invalid amount due to  course\n"));
    }
    const reStart = await inquirer.prompt({
        type: "confirm",
        name: "continue",
        message: chalk.red("\nDo you want to Continue?\n"),
        default: false,
    });
    doContinue = reStart.continue;
}
;
