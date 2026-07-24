//Mini Project 1: Multiplication Table from 1 to 10
console.log("Multiplication Table from 1 to 10:\n");
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {     
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(""); // Add a new line after each multiplication table
}

//Mini Project 2: Print the sum of numbers from 1 to 100
console.log("Sum of numbers from 1 to 100:");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);


//Mini Project 3: Guess the Number Game, where the user has to guess a number between 1 and 10, and print Correct, Too High, Tooo Low.  
let targetNumber = Math.floor(Math.random() * 10) + 1;  
if (typeof prompt !== 'undefined') {
    let userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (userGuess === targetNumber) {
        console.log("Correct!");
    } else if (userGuess > targetNumber) {
        console.log("Too High!");
    }
    else {
        console.log("Too Low!");
    }
}

//Mini Project 4: Print the Factorial of the number 5 using a for loop
console.log("Factorial of 5:");
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}
console.log(factorial);


/*

challenge 1 : 5 times   
challenge 2 : 1,2,3
challenge 3 : yes, when the while condition is false, the loop will stop executing. it will print from 1 to 5 and then stop.

*/