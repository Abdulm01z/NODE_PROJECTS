#! /usr/bin/env node

import inquirer from "inquirer";
let welcomeMessage: string = `\n\t  ▁ ▂ ▃ ▅ ▆ ▇ █ Welcome To My Todo List Project █ ▇ ▆ ▅ ▃ ▂ ▁ \t\n`;
console.log(welcomeMessage);

// inquirer  done
// array     done
// function  done
// opreators done
let todos : string[] = [];


async function createTodo(todos:string[]){
    do{let ans = await inquirer.prompt({

        type: "list",
        message: "Select and operation",
        name: "select",
        choices: ["Add","update","view","delete"],

})
    if (ans.select == "Add"){
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add items in the list",
            name: "todo",
        });
        todos.push(addTodo.todo);
        todos.forEach(todo => console.log(todo));
        // console.log(addTodo.todo);
    }

    if (ans.select == "update"){
        let updateTodo = await inquirer.prompt({
            type: "list",
            message: "Update items in the list",
            name: "todo",
            choices: todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add items in the list",
            name: "todo",
        });
        let newTodo = todos.filter(val =>val !== updateTodo.todo)
        todos = [...newTodo,addTodo.todo];
        todos.forEach(todo => console.log(todo));
        // console.log(todos);
    }


    if (ans.select == "view"){
        console.log(`\n\t   ▁ ▂ ▃ ▅ ▆ ▇ █  Todo List █ ▇ ▆ ▅ ▃ ▂ ▁\t\n`);
        todos.forEach(todos => console.log(todos));
        // console.log(todos);
        console.log(`\n\t⭑⭑⭑★ ✪ ***************************** ✪ ★ ⭑⭑⭑\t\n`)
    }

    if (ans.select == "delete"){
        let deleteTodo = await inquirer.prompt({
            type: "list",
            message: "Update items in the list",
            name: "todo",
            choices: todos.map(item => item)
        });
        let newTodo = todos.filter(val =>val !== deleteTodo.todo)
        todos = [...newTodo];
        todos.forEach(todo => console.log(todos));
        // console.log(todos);
    }

    } while(true)
let ans = await inquirer.prompt({

        type: "list",
        message: "Select and operation",
        name: "select",
        choices: ["Add","update","view","delete"],

})
    if (ans.select == "Add"){
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add items in the list",
            name: "todo",
        });
        todos.push(addTodo.todo);
        console.log(addTodo.todo);
    }

    if (ans.select == "update"){
        let updateTodo = await inquirer.prompt({
            type: "list",
            message: "Update items in the list",
            name: "todo",
            choices: todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "Add items in the list",
            name: "todo",
        });
        let newTodo = todos.filter(val =>val !== updateTodo.todo)
        todos = [...newTodo,addTodo.todo];
        console.log(todos);
    }


    if (ans.select == "view"){
        console.log(`\n\t   ▁ ▂ ▃ ▅ ▆ ▇ █  Todo List █ ▇ ▆ ▅ ▃ ▂ ▁\t\n`);
        console.log(todos);
        console.log(`\n\t⭑⭑⭑★ ✪ ***************************** ✪ ★ ⭑⭑⭑\t\n`)
    }

    if (ans.select == "delete"){
        let deleteTodo = await inquirer.prompt({
            type: "list",
            message: "Update items in the list",
            name: "todo",
            choices: todos.map(item => item)
        });
        let newTodo = todos.filter(val =>val !== deleteTodo.todo)
        todos = [...newTodo];
        console.log(todos);
    }

}

createTodo(todos);
