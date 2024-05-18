import inquirer from "inquirer";
// Computer Random no.
const randomNumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please Guess a Number:",
    },
]);
console.log(answers);
if (answers.userGuessNumber === randomNumber) {
    console.log("You guesse Right Number");
}
else {
    console.log("You guessed Wrong Number");
}
