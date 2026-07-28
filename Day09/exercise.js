// Ex1: function expression - to multiply two numbers.
const multiply3 = function(a,b) {
    return a*b;
}
console.log(multiply3(6, 5));

// Ex2: Arrow function - to multiply two numbers.
const multiply2 = (a,b) => a*b;
console.log(multiply2(10, 4));

// Ex3: Create a Arrow function to get the cube of a number
const cube = number => number*number*number;
console.log(cube(3));

// Ex4: Create an Arrow function named isPositive
const isPositive = number => number>0 ? "Positive" : "Negative";
console.log(isPositive(10));
console.log(isPositive(-5));

// EX5: Create a greet function (Arrow function)
const greet = (name = "Guest") => "Hello " +name;
console.log(greet("Arun"));
console.log(greet());

//Ex6: Create a arrow function to calculate area.
const calculateArea = (length = 1, width =1) => length*width;
console.log(calculateArea(10, 5)); // 50
console.log(calculateArea(8));     // 8
console.log(calculateArea());      // 1

//Ex7: Create a Arrow function to calculate tax. default rate of interest 18%. 
const calculateTax = (amount, taxRate =18) => amount * taxRate / 100;
console.log(calculateTax(1000));     // 180
console.log(calculateTax(1000, 10)); // 100

//Ex8: Create a Arrow function to give a welcome message, default welcome message is "Welcome to JavaScript"
const welcome = (message = "Welcome to JavaScript") => message;
console.log(welcome());
console.log(welcome("Good Morning"));

//Ex9: Rest parameter Excersice. if parameter size is undefined. Create a function to get the sum of all numbers.
const sum = (...numbers) => {
    let total = 0;
    for (const number of numbers){
        total += number;
    }
    return total;
}

console.log(sum(1, 2, 3));          // 6
console.log(sum(5, 10, 15, 20));    // 50

// Ex 10: Create an Arrow function which give the largest number among the given numbers.
const findLargest = (...numbers) =>{
    let largest = 0;
    for (const number of numbers) {
        if (largest > number){
            largest = largest;
        }else {
            largest = number;
        } 
    }
    return largest;
}
console.log(findLargest(5, 8, 2, 15, 9));   // 15
console.log(findLargest(100, 40, 250));     // 250

// Ex 11: Create an Arrow function which count and gives the number of ites passed.
const countArguments = (...items) => {
    let counter = 0;
    for (const item in items){
        counter = item;
    }
    return ++counter;
}

console.log(countArguments(1, 2, 3));              // 3
console.log(countArguments("A", "B", "C", "D"));   // 4

// Ex 12: Create an Arrow function to print items/names given as parameters.
const printNames = (...names) => {for(const name of names){console.log(name)}}
printNames("Arun", "Rahul", "Priya");

// Exercise to use variable length
const sum2 = (...numbers) => {
    console.log(numbers);
    console.log(numbers.length)
};

sum2();

// Exercise to use spread operator : spread is just opposite of Rest 
/** A simple way to remember it:

Rest (...) → many values become one array.
Spread (...) → one array becomes many values.
 */
const values = [10, 20, 30];

console.log(...values);

// Callback : A callback is simply a function passed as an argument to another function.

const greet2 = (name) => {
    console.log(`Hello ${name}`);
};

const processUser = (name, callback) => {
    console.log("Processing user...");
    callback(name);
};

processUser("Arun", greet2);
//processUser("Kundan", greet);
//processUser("Arun", greet()); // Here greet() will execute immediately and return value (not the function itself) would be passed. TypeError: Callback is not a function.

// Ex 13: Create a function sayHello, create another function and callback sayHello
const sayHello = (name) => {console.log(`Hello  ${name}`);}
sayHello("Kapil");
const execute = (name, callback) => {
    console.log("Starting ......");
    callback(name);
}
execute("Arun", sayHello);

// Ex 14: 
const square = number => number * number;
const calculate = (number, operation) => {
    return operation(number);
};

console.log(calculate(5, square));

// Mini Project 1 - Callback - Based Calculator

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calculator = (a, b, operation) => {
    return operation(a,b);
};

console.log(calculator(10, 5, add));       // 15
console.log(calculator(10, 5, subtract));  // 5
console.log(calculator(10, 5, multiply));  // 50
console.log(calculator(10, 5, divide));    // 2

// Bonus Challange : formated output
const printCalculation = (a, b, operation, operationName) => {
    const result = operation(a, b);

    console.log("====== Calculator ======");
    console.log(`Operation : ${operationName}`);
    console.log(`Input      : ${a}, ${b}`);
    console.log(`Result     : ${result}`);
    console.log("========================");
};

printCalculation(10, 5, multiply, "Multiply");

//Mini Project 2 - Student Result Processor (Callbacks)
const passOrFail = marks => marks >= 50 ? "Pass" : "Fail";

const grade = marks => {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    return "Fail";
};

const processStudent = (name, marks, callback) => {
    // Call the callback with marks
    const result = callback(marks);
    // Print the student's name and the callback result
    console.log("\n");
    console.log(`===== Student Result =====`);
    console.log(`Name   : ${name}`);
    console.log(`Marks  : ${marks}`);
    console.log(`Result : ${result}`);
    console.log(`===========================`);
};
processStudent("Arun", 82, grade);
processStudent("Rahul", 45, passOrFail);

// Bonus Challenge :Modify processStudent() so it returns an object

const processStudentModified = (name, marks, callback) =>{
    const result = callback(marks);
    return {name, marks, result};
}

console.log(processStudentModified("Arun", 82, grade));
console.log(processStudentModified("Rahul", 45, passOrFail));