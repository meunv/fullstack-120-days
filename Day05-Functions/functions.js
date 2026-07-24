/*
Mini Project 1: Create calculateGrade(marks) function that takes marks as input and returns the grade based on the following criteria:
- 90 and above: A
- 80 to 89: B
- 70 to 79: C
- Else F
*/

function calculateGrade(marks) {
    if (marks >= 90) {
        return 'A';
    } else if (marks >= 80) {
        return 'B';
    } else if (marks >= 70) {
        return 'C';
    } else {
        return 'F';
    }
}

// Example usage:
console.log("You scored 95 marks and received Grade " + calculateGrade(95) + " in the exam."); // Output: You scored 95 marks and received Grade A in the exam.
console.log("You scored 82 marks and received Grade " + calculateGrade(82) + " in the exam."); // Output: You scored 82 marks and received Grade B in the exam.
console.log("You scored 71 marks and received Grade " + calculateGrade(71) + " in the exam."); // Output: You scored 71 marks and received Grade C in the exam.
console.log("You scored 65 marks and received Grade " + calculateGrade(65) + " in the exam."); // Output: You scored 65 marks and received Grade F in the exam.


// Mini Project 2: Create a function to calculate final amount after discount is applied; above 5000 10% discount, above 10000 20% discount, calculate for 4000, 7000 & 12000.  

function calculateDiscount(amount) {
    let discount = 0;
    if (amount > 10000) {
        discount = 0.20; // 20% discount
    } else if (amount > 5000) {
        discount = 0.10; // 10% discount
    }

    return amount - (amount * discount);
}

// Example usage:
console.log("Final amount after discount: $" + calculateDiscount(4000));  // Output: Final amount after discount: $4000
console.log("Final amount after discount: $" + calculateDiscount(7000));  // Output: Final amount after discount: $6300
console.log("Final amount after discount: $" + calculateDiscount(12000)); // Output: Final amount after discount: $9600


// Mini Project 3: Create a function to findLargest(a,b,c) that takes three numbers as input and returns the largest number among them. Test the function with different sets of numbers.
function findLargest(a, b, c) {
    let largest = a;
    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }
    return largest;
}

// Example usage:
console.log("The largest number among 5, 10, and 15 is: " + findLargest(5, 10, 15)); // Output: The largest number among 5, 10, and 15 is: 15
console.log("The largest number among 20, 8, and 12 is: " + findLargest(20, 8, 12)); // Output: The largest number among 20, 8, and 12 is: 20

function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Example usage:
console.log("The largest number among 5, 10, and 15 is: " + findLargest(5, 10, 15)); // Output: The largest number among 5, 10, and 15 is: 15
console.log("The largest number among 20, 8, and 12 is: " + findLargest(20, 8, 12)); // Output: The largest number among 20, 8, and 12 is: 20

// Mini Project 4: Create a function to get the factorial of a number using recursion. Test the function with different numbers.
function factorial1(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);

    }
}

// Example usage:
console.log("The factorial of 5 is: " + factorial(5)); // Output: The factorial of 5 is: 120
console.log("The factorial of 0 is: " + factorial(0)); // Output: The factorial of 0 is: 1


// Create a function factorial(n) to get the factorial of a number using loop. Test the function with different numbers.

function factorial(n) {
    let result = 1;     
    for (let i = 2; i <= n; i++) {
        result *= i;
    }


    return result;
}

let a = 3;
let b = 5;
let c = 7;

console.log("The factorial of "+ a + " is: " + factorial(a)); 
console.log("The factorial of "+ b + " is: " + factorial(b));
console.log("The factorial of "+ c + " is: " + factorial(c));
