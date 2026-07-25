// Ex1: Greetuser function 
function greetUser() {
    console.log("Welcome to JavaScript");
}

greetUser();


// Ex2: Greet with Parameter

function greet(name){
    console.log("Hello "+name);
}

greet("Arun");

// Ex3: create a funtion to return a sum of two numbers.

function add(a,b){
    const c = a+b;
    return c;
}

console.log(add(15, 20));

// Ex 4: function to check even number.

function isEven(number){
    if (number %2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}

console.log(isEven(12));
console.log(isEven(7));

// Mini Project 1 : Salary Calculator

function calculateSalary(basicSalary, bonus, tax){
    const grossSalary = basicSalary + bonus;
    const netSalary = grossSalary - tax; 
    return netSalary;
}
console.log(calculateSalary(50000, 5000, 8000));

// Bonus Challenge 1

function printSalarySlip(basicSalary, bonus, tax) {
  let netSalary = basicSalary + bonus - tax;

  console.log(`========== Salary Slip ==========
Basic Salary : ${basicSalary}
Bonus        : ${bonus}
Tax          : ${tax}
Net Salary   : ${netSalary}
=================================`);
}

printSalarySlip(50000, 5000, 8000);

// Mini Project 2 : create a function to calculate grade of marks.

function calculateGrade(marks){
    if (marks >= 90){
        return "A+";
    }else if (marks >= 80){
        return "A";
    }else if (marks >= 70){
        return "B";
    }else if (marks >= 60){
        return "C";
    }else {
        return "Fail";
    }

}

console.log(calculateGrade(95)); // A+
console.log(calculateGrade(82)); // A
console.log(calculateGrade(74)); // B
console.log(calculateGrade(65)); // C
console.log(calculateGrade(45)); // Fail

// Bonous Challenge 2

function printReportCard(name, marks){
    console.log(`======== Report Card ==========
    Student Name : ${name}
    Marks        : ${marks}
    Grade        : ${calculateGrade(marks)}
===============================
        `);
}

printReportCard("Arun Kumar", 82);


// Mini Project 3: Electricity bill calculator

function calculateElectricityBill(units) {
  let billAmount = 0;

  if (units <= 100) {
    billAmount = units * 5;
  } else if (units <= 200) {
    billAmount = 100 * 5 + (units - 100) * 7;
  } else {
    billAmount = 100 * 5 + 100 * 7 + (units - 200) * 10;
  }

  return billAmount;
}

console.log(calculateElectricityBill(80));   // 400
console.log(calculateElectricityBill(150));  // 850
console.log(calculateElectricityBill(250));  // 1700

// Bonus challange 3
function printElectricityBill(customerName, consumedUnits) {
  const totalBill = calculateElectricityBill(consumedUnits);

  console.log(`====== Electricity Bill ======
Customer Name : ${customerName}
Units Consumed: ${consumedUnits}
Total Bill    : Rs. ${totalBill}
==============================`);
}

printElectricityBill("Arun Kumar", 250);