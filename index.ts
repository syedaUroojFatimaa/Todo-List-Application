#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [];
let conditions = true;

console.log(chalk.magentaBright.bold("\n \t Welcome To CodeWithUrooj - Todo-List Application\n"));

let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option  you want to do:",
                choices: ["Add Task","Delect Task","Update Task","View Todo-list","Exit"],
            }
        ]);

        if(option.choice === "Add Task"){
            await addTask()
        }
        else if(option.choice === "Delect Task"){
            await delectTask()
        }
        else if(option.choice === "Update Task"){
            await updateTask()
        }
        else if(option.choice === "View Todo-list"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false;
        }
    } 
}
let addTask = async () => {
    let newTask = await inquirer.prompt([

        {
            name: "task",
            type: "input",
            message: "Enter your new task:"
        }
    ]);

    todoList.push(newTask.task);
    console.log(` \n ${newTask.task} task added successfully in Todo-list`);
}
let viewTask = () => {
    console.log("\n Your Todo-list: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`)
    })
}

let delectTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delect:",
        }
    ]);

    let delectTask = todoList.splice(taskIndex.index - 1 ,1);
    console.log(`\n "${delectTask}" this task has been delected successfully from your Todo-list \n`);
}

let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);

    todoList[update_task_index.index - 1] = update_task_index.new_task
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [for updated list check option: "view Todo-list] `)

}

main();
