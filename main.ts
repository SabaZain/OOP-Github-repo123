#! /usr/bin/env node
// Project OOP-Github Repo
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold(">".repeat(44)));
console.log(chalk.blue.bold("Welcome to Code With Saba - OOP-Github Repo"));
console.log(chalk.yellow.bold(">".repeat(44)));

class Student {
    name: string
    constructor(n:string){
        this.name = n
    }
}
class Person {
    students:Student[] = []
    addStudent(obj:Student){
        this.students.push(obj)
    }
}
const persons = new Person()
const programInitialize = async(persons:Person) => {
    do{
    console.log("Welcome!");
    const response = await inquirer.prompt({
        name: "select",
        type: "list",
        message: chalk.magenta("With whom are you interested to interact with:"),
        choices: ["admin","student","exit"]
    })
    if(response.select === "admin"){
        console.log(chalk.green.bold("Welcome to the admin department. Please feel free to ask any question."));
    }
    else if(response.select == "student"){
        const response = await inquirer.prompt({
            name: "student",
            type: "input",
            message: chalk.blue.italic("Enter the student's name you wish to engage with:")
        })
        const student = persons.students.find(val => val.name == response.student)
    if(!student){
        const name = new Student(response.student)
    persons.addStudent(name)
    console.log(chalk.blue(`Hello I am ${name.name}.Nice to meet you!`));
    console.log(chalk.green("New student added"));
    console.log(chalk.cyan("Current student list"));
    console.log(persons.students);
    } else {
        console.log(chalk.blue(`Hello I am ${student.name}. Nice to see you again!`));
        console.log(chalk.cyan("Existing student list:"));
        console.log(persons.students);
    }
} else if (response.select == "exit"){
    console.log(chalk.red("Exiting the program..."));
    process.exit()
    }
    } while(true)
}
programInitialize(persons)