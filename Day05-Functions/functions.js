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
