#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let welcomemessage = `\n\t ▼△▼△ 𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚃𝚘 𝙼𝚢 𝚃𝚘𝚍𝚘 𝙻𝚒𝚜𝚝 𝙿𝚛𝚘𝚓𝚎𝚌𝚝 ▼△▼△ \t\n`;
console.log(chalk.blue(welcomemessage));
let todos = [];
let docontinue = true;
async function createTodo(todos) {
    while (docontinue) {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an Operation",
            name: "select",
            choices: ["Add", "Update", "View", "Delete", "Exit"],
        });
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            console.log(addTodo.todo);
        }
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Update items in list",
                name: "todo",
                choices: todos.map((item) => item),
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });
            let newTodo = todos.filter((val) => val !== updateTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
        if (ans.select == "View") {
            console.log(chalk.red(`\n\t         ❚█══ 𝕋𝕕𝕠 𝕃𝕚𝕤𝕥 ══█❚\t\n`));
            console.log(todos);
            console.log(chalk.red(`\n\t❚█══ *************************** ══█❚\t\n`));
        }
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Update items in the list",
                name: "todo",
                choices: todos.map((item) => item),
            });
            let newTodo = todos.filter((val) => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
        if (ans.select == "Exit") {
            return;
        }
    }
}
createTodo(todos);
