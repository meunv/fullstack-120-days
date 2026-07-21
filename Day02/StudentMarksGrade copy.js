const readline = require('readline');

// Set up the interface to read from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// A helper function to ask questions in order
const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function main() {
    // 1. Collect inputs using await
    const studentName = await askQuestion("Enter Student Name: ");
    const rollNumber = await askQuestion("Enter Roll Number: ");
    
    // Convert inputs to numbers immediately
    const english = Number(await askQuestion("Enter English Marks: "));
    const maths = Number(await askQuestion("Enter Maths Marks: "));
    const science = Number(await askQuestion("Enter Science Marks: "));
    const computer = Number(await askQuestion("Enter Computer Marks: "));

    // Close the input stream
    rl.close();

    // 2. Calculate Total, Average, and Percentage
    const totalMarks = english + maths + science + computer;
    const totalSubjects = 4;
    const averageMarks = totalMarks / totalSubjects;
    const percentage = (totalMarks / 400) * 100;

    // 3. Determine the Grade
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

    // 4. Display the neat report
    console.log("\n==============================");
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
}

// Run the program
main();