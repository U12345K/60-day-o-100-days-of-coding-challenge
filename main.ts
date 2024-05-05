import inquirer from "inquirer";

// task 1
function checkAge(age:any) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
//   Will the function work differently if else is removed?
  
  function checkAge2(age1:any) {
    if (age1 > 18) {
      return true;
    }
    // ...
    return console.log('Did parents allow you?');
  }
  const age = checkAge(20);
console.log(age);

const age1 = checkAge2(15);
console.log(age1);


// task2
function checkAge3(age3:any) {
  return (age3 > 18) ? true : console.log('Did parents allow you?');
}
const age3 = checkAge3(19);
console.log(age3);


// task 3

const answer1 = await inquirer.prompt([
  {
    message:"enter the value of a",
    type:"number",
    name:"a"
  },
  {
    message:"enter the alue b",
    type:"number",
    name:"b"
  }
]);
let min = answer1.a*answer1.b;
console.log(min);



















// task 4

const answer = await inquirer.prompt([
  {
    message:"enter the value of x",
    type:"number",
    name:"x"
  },
  {
    message:"enter the alue n",
    type:"number",
    name:"n"
  }
]);
let pow = answer.x*answer.n;
console.log(pow);
















