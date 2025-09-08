//Question 1

function introducePerson(name, age) {
  return `Hi, I am  ${name} and I am ${age} years old!`;
}

console.log(introducePerson("Alice", 25)); //Hi, I am  Alice and I am 25 years old!'

console.log(introducePerson("Bob", 30)); //'Hi, I am  Bob and I am 30 years old!'

//Question 2

function createProfile(username, role = "user", isActive = true) {
  return {
    username,
    role,
    isActive,
  };
}
const profile1 = createProfile("john123");
console.log(profile1);

const profile2 = createProfile("admin456", "administrator");
console.log(profile2);

const profile3 = createProfile("guest789", "guest", false);
console.log(profile3);

// Defaults replace undefined values when nothing has been entered for example here role is set to user and isActive to true
// When middle parameters are skipped the default value is displayed
// Default values enhance function flexibility by allowing parameters to have pre-defined values that are used if no argument is explicitly provided when the function is called.

//Question 3

// 1. Store a function in a variable
// Create a function that calculates the square of a number
// Store it in a variable called square
const square = (x) => x * x;

console.log("Square of 5:", square(5));
// 2. Store a function in an array
// Create an array called 'mathOperations' containing different math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot do division by zero");

const mathOperations = [add, subtract, multiply, divide];
// 3. Pass a function as an argument
// Create a function called 'calculator' that takes:
//   - two numbers
//   - an operation function
// It should apply the operation to the numbers
function calculator(a, b, operationFn) {
  return operationFn(a, b);
}

// TODO: Test your calculator with different operations from your array
console.log("Add:", calculator(20, 10, mathOperations[0]));
console.log("Subtract:", calculator(12, 4, mathOperations[1]));
console.log("Multiply:", calculator(6, 5, mathOperations[2]));
console.log("Divide:", calculator(12, 5, mathOperations[3]));

// Question 4

// Write a function called 'createMultiplier' that:
//   - Takes a number as parameter (the multiplier)
//   - Returns a NEW function that multiplies its input by the multiplier

function createMultiplier(multiplier) {
  // Return a new function that "remembers" the multiplier
  return function (value) {
    return value * multiplier;
  };
}

// Example usage:
const triple = createMultiplier(3);
console.log(triple(4)); // Should output 12
// TODO: Create different multipliers and test them
const doubler = createMultiplier(2);
const times3 = createMultiplier(3);
const half = createMultiplier(0.5);

console.log("Double of 10:", doubler(10)); // 20
console.log("Triple of 5:", times3(5)); // 15
console.log("Half of 8:", half(8)); // 4
