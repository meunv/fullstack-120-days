/**
 * Mini Project 2 – Employee Management (Arrays)

Let's build something closer to a real business application.

Requirements

Create an empty array:

const employees = [];

Perform these operations:

Add "Arun"
Add "Rahul"
Add "Priya"
Display all employees with serial numbers.
Remove the first employee.
Display the list again.
Add "Neha" to the beginning.
Display the list again.
Check whether "Priya" exists.
Print the total number of employees.
 */

const employees = [];
employees.push("Arun", "Rahul", "Priya");

const printEmployees = (employees)=> {
    let serialNumber =1;
    for (const emp of employees){
        console.log(`${serialNumber}. ${emp}`);
        serialNumber++;
    }
}
console.log(`===== Employee Manangement ======`);
printEmployees(employees);

console.log(`\nAfter removing the First Employee:`);
employees.shift();
printEmployees(employees);

console.log(`\nAfter adding 'Neha' to  First Place:`);
employees.unshift("Neha");
printEmployees(employees);

console.log("\nChecking is 'Priya' exist:" +employees.includes("Priya"));

console.log(`\nTotal Employee ${employees.length}`);
