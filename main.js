import inquirer from "inquirer";
import chalk from "chalk";
//------------NUMBER GUESSING GAME------------
// Computer will generate a random number
let randomNumber = Math.floor(Math.random() * 10 + 1);
// User will guess the number
let userNumber = await inquirer.prompt([
    {
        name: chalk.blue("Guess the number"),
        message: "Enter a number from 1 - 10",
        type: "input",
    },
]);
// Then we will compare the numbers
if (userNumber === randomNumber) {
    console.log(chalk.green("🎉🎉--CONGRATULATIONS YOU GOT THE RIGHT ANSWER--🎉🎉"));
}
else {
    console.log(chalk.red("❌--Incorrect answer please try again--❌"));
}
