/* Arrow function differences
1. Syntax is shorter and cleaner
2. 

Arrow functions are often used in JavaScript's iterator methods. An iterator is a method that allows you to deal with a set of data one at a time.
*/

// TODO: Transform these regular functions into arrow functions
// Document what changes and what stays the same

// Original function 1:
function greet(name) {
  return "Hello, " + name + "!";
}

const greetArrow = (name) => "Hello," + name + "!";
// No need for function key word and return
// Arrow replaces function and because of the concise arrow function(without curly brackets)  the function implicitly returns whatever expression you write

console.log(greetArrow("Andrew"));

// Original function 2:
function calculateTotal(price, tax, tip) {
  const subtotal = price + price * tax;
  const total = subtotal + subtotal * tip;
  return total;
}
const calculateTotalArrow = (price, tax, tip) => {
  const subtotal = price + price * tax;
  const total = subtotal + subtotal * tip;
  return total;
};

console.log(calculateTotalArrow(10, 0.1, 2));
// function keyword is not needed with arrow function here
// everything after the arrow becomes the function body whilst price tax and tip are the parameters (remain the same)
// here we must return the total as the function is not as concise as before and contains curly brackets which means it is a block of code

// TODO: Convert to arrow function stored in 'calculateTotalArrow'

// Original function 3:
function isEven(number) {
  return number % 2 === 0;
}

const isEvenArrow = (number) => number % 2 === 0;
console.log(isEven(4));

// function becomes arrow and then the logic (everything on the right) is the body of the function) number remains our parameter
// once again no need for return as this is one line of code

// Parenthesis can be omitted in there is only one parameter
// In summary when code is on one line return can be omitted
// One line is more readable however multiple lines of code is easier to understand what is going on





// Question 6


//original function
function isEven(number) {
    return number %2===0;
}
//arrow function
const isEvenArrow2=number=>number=>number%2===0;
//arrow functionwith arrays
const numbers=[1,2,3,4,5,6,7,8,9,10]
//even numbers
const evens=numbers.filter(number=>number %2===0);
//doubled numbers
const doubled=numbers.map(number=>number*2)
//sum of numbers
const sum=numbers.reduce((total,number)=>total + number,o);
