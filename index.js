#! /USR/BIN/ENV NODE
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the following operater to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "substraction", "multiplcation", "division"],
    },
]);
//conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multiplcation") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid operator");
}
