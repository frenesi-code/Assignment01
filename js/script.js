// STEP 1
// Convert the following highlighted identifiers to Camel Case notation

let someMonth
function theMonth()
let currentMonth
let summerMonth
let MyLibraryFunction

// STEP 2
// Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

let numberValue = 42;
let stringValue = "Hello, world!";
let boolValue = true;
let nullValue = null;

// STEP 3
// Give me two examples of complex / variable expressions.
const result = ((a, b) => {
  const sum = a + b;
  const diff = a - b;
  return sum * diff;
})(2, 4);

// STEP 4
// Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.

let strFirstName;
let strLastName;
let strAddress;
let strCity;
let strState; 
let nZipCode;
let iYourAge;
let strReferralSource;
let bMayWeContactYou;

// STEP 5
// Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.

let sFirstName = 'Paulo';
let numYourAge = 30;
let boolMayWeContactYou = false;

// STEP 6
// Create a variable.
// Add a number and a string and display the coerced result in the browser’s console window.

let myVariable = 10;
console.log(myVariable + " is the answer");

// STEP 7
// Create two variables.
// For the first variable, add a Boolean and a string and display the coerced result.
// For the second variable, add a number and a Boolean and display the coerced result.

let variableA = true;
console.log(variable1 + " is a " + typeof variable1 + " value");

let variableB = 10;
console.log(variableB + variableA + " is a " + typeof (variableB + variableA) + " value");

// STEP 8
// Is the following string literal valid? If not, how would you fix it?
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
// console.log(someString)

let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);