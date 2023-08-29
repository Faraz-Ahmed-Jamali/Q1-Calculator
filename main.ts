import {add} from "./operation-functions/add.js"
import {divide} from "./operation-functions/divide.js"
import {multiply} from "./operation-functions/multiply.js"
import {subtract} from "./operation-functions/subtract.js"
import inquirer from "inquirer"
import chalk from "chalk"

// let calculator = await inquirer.prompt([                     //We can also use this syntax
let {num1,operation,num2} = await inquirer.prompt([
{
    type:"number",
    name:"num1",
    message:chalk.cyanBright("Enter the first number:")
},
{
    type:"list",
    name:"operation",
    message:chalk.cyanBright("Select the operation:"),
    choices:["+ Addition","- Subtraction","* Multiplication","/ Division"]
},
{
    type:"number",
    name:"num2",
    message:chalk.cyanBright("Enter the second number:")
}
]);

let result;
if(operation === "+ Addition"){
    result = add(num1, num2);
}else if (operation === "- Subtraction"){
    result = subtract(num1, num2);
}else if (operation === "* Multiplication"){
    result = multiply(num1, num2);
}else if (operation === "/ Division"){
    result = divide(num1, num2);
}else {
};

console.log(chalk.bold.greenBright.bgWhiteBright(`\t Your result is ${chalk.bold.redBright.bgWhiteBright(result)} `));

// if(operation === "+ Addition"){                   //We can also use this syntax
//     result = add(num1, num2);
//     console.log(chalk.bold.underline.green(result));
// }else if (operation === "- Subtraction"){
//     result = subtract(num1, num2);
//     console.log(chalk.bold.underline.green(result));
// }else if (operation === "* Multiplication"){
//     result = multiply(num1, num2);
//     console.log(chalk.bold.underline.green(result));
// }else if (operation === "/ Division"){
//     result = divide(num1, num2);
//     console.log(chalk.bold.underline.green(result));
// }else {
// };

// if(operation === "+"){                            //We can also use this syntax
//     result = add(num1, num2);
//     console.log(result);
// }else if (operation === "-"){
//     result = subtract(num1, num2);
//     console.log(result);
// }else if (operation === "*"){
//     result = multiply(num1, num2);
//     console.log(result);
// }else if (operation === "/"){
//     result = divide(num1, num2);
//     console.log(result);
// }else {
// };

// if (operators === "+"){                           //We can also use this syntax
//     console.log(num1+num2);
// }else if (operators === "-"){
//     console.log(num1-num2);
// }else if (operators === "*"){
//     console.log(num1*num2);
// }else if (operators === "/"){
//     console.log(num1/num2);
// }else {
// };
// export {num1, operation, num2}