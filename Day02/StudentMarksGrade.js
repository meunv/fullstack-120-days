// 1. Ask for User Input
const studentName = prompt("Enter Student Name:");
const rollNumber = prompt("Enter Roll Number:");

// prompt() takes input as text, so we use Number() to convert marks into numbers
const english = Number(prompt("Enter English Marks:"));
const maths = Number(prompt("Enter Maths Marks:"));
const science = Number(prompt("Enter Science Marks:"));
const computer = Number(prompt("Enter Computer Marks:"));

// 2. Calculate Total, Average, and Percentage
const totalMarks = english + maths + science + computer;
const totalSubjects = 4;
const averageMarks = totalMarks / totalSubjects;

// Assuming each subject is out of 100 (Max total = 400)
const percentage = (totalMarks / 400) * 100;

// 3. Determine the Grade based on the percentage
let grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "D";
}

// 4. Display the neat report in the console
console.log("==============================");
console.log("        STUDENT REPORT        ");
console.log("==============================");
console.log(`Name       : ${studentName}`);
console.log(`Roll No.   : ${rollNumber}`);
console.log();
console.log(`English    : ${english}`);
console.log(`Maths      : ${maths}`);
console.log(`Science    : ${science}`);
console.log(`Computer   : ${computer}`);
console.log("------------------------------");
console.log();
console.log(`Total      : ${totalMarks}`);
console.log();
console.log(`Average    : ${averageMarks.toFixed(2)}`);
console.log();
console.log(`Percentage : ${percentage.toFixed(2)}%`);
console.log();
console.log(`Grade      : ${grade}`);
console.log("==============================");