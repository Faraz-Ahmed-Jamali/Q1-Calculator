#! usr/bin/env node
import { add } from "./operation-functions/add.js";
import { divide } from "./operation-functions/divide.js";
import { multiply } from "./operation-functions/multiply.js";
import { subtract } from "./operation-functions/subtract.js";
import inquirer from "inquirer";
import chalk from "chalk";
let { num1, operation, num2 } = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: chalk.cyanBright("Enter the first number:")
    },
    {
        type: "list",
        name: "operation",
        message: chalk.cyanBright("Select the operation:"),
        choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division"]
    },
    {
        type: "number",
        name: "num2",
        message: chalk.cyanBright("Enter the second number:")
    }
]);
let result;
if (operation === "+ Addition") {
    result = add(num1, num2);
}
else if (operation === "- Subtraction") {
    result = subtract(num1, num2);
}
else if (operation === "* Multiplication") {
    result = multiply(num1, num2);
}
else if (operation === "/ Division") {
    result = divide(num1, num2);
}
else {
}
;
console.log(chalk.bold.greenBright.bgWhiteBright(`\n\t The result is: ${chalk.bold.redBright.bgWhiteBright(result)} `));
