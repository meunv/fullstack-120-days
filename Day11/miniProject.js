/*
Mini Project – Employee Analytics Dashboard

Scenario:

Use this dataset:

const employees = [
    { id: 1, name: "Arun", department: "IT", salary: 80000, active: true },
    { id: 2, name: "Rahul", department: "HR", salary: 50000, active: false },
    { id: 3, name: "Priya", department: "IT", salary: 70000, active: true },
    { id: 4, name: "Neha", department: "Finance", salary: 65000, active: true },
    { id: 5, name: "Karan", department: "HR", salary: 55000, active: false }
];

Requirements:

Print all employee names using map().
Display only active employees using filter().
Find the employee with id = 3 using find().
Calculate the total salary using reduce().
Calculate the average salary.
Check whether all employees are active using every().
Check whether at least one employee belongs to the Finance department using some().
Sort employees by salary (highest to lowest) without modifying the original array.
Sort employees alphabetically by name without modifying the original array.
Bonus: Write a reusable function that prints employee details in a neat format.

Security Challenge (Bonus)

Before processing the data, validate each employee record:

id must be a positive number.
name must be a non-empty string.
salary must be a finite number greater than or equal to 0.
active must be a boolean.

Ignore any invalid records before performing the analytics.

*/

//Mini Project 1: Employee Analytics Dashboard

const employees = [
  { id: 1, name: "Arun", department: "IT", salary: 80000, active: true },
  { id: 2, name: "Rahul", department: "HR", salary: 50000, active: false },
  { id: 3, name: "Priya", department: "IT", salary: 70000, active: true },
  { id: 4, name: "Neha", department: "Finance", salary: 65000, active: true },
  { id: 5, name: "Karan", department: "HR", salary: 55000, active: false }
];

// Validating employee records
const validEmployees = employees.filter(employee =>
  typeof employee.id === "number" &&
  employee.id > 0 &&
  typeof employee.name === "string" &&
  employee.name.trim().length > 0 &&
  typeof employee.salary === "number" &&
  Number.isFinite(employee.salary) &&
  employee.salary >= 0 &&
  typeof employee.active === "boolean"
);

// Reusable function to print employee details
function printEmployeeDetails(employee) {
  console.log(
    `ID: ${employee.id}, Name: ${employee.name}, Department: ${employee.department}, Salary: ${employee.salary}, Active: ${employee.active}`
  );
}

// 1. Print all employee names using map()
const employeeNames = validEmployees.map(employee => employee.name);
console.log("\nEmployee Names:");
console.log(employeeNames);

// 2. Display only active employees using filter()
const activeEmployees = validEmployees.filter(employee => employee.active === true);
console.log("\nActive Employees:");
activeEmployees.forEach(printEmployeeDetails);

// 3. Find the employee with id = 3 using find()
const employeeWithId3 = validEmployees.find(employee => employee.id === 3);
console.log("\nEmployee with ID 3:");
console.log(employeeWithId3);

// 4. Calculate the total salary using reduce()
const totalSalary = validEmployees.reduce(
  (total, employee) => total + employee.salary,
  0
);
console.log("\nTotal Salary:");
console.log(totalSalary);

// 5. Calculate the average salary
const averageSalary =
  validEmployees.length > 0 ? totalSalary / validEmployees.length : 0;

console.log("\nAverage Salary:");
console.log(averageSalary);

// 6. Check whether all employees are active using every()
const allEmployeesActive = validEmployees.every(employee => employee.active === true);
console.log("\nAre all employees active?");
console.log(allEmployeesActive);

// 7. Check whether at least one employee belongs to Finance using some()
const hasFinanceEmployee = validEmployees.some(
  employee => employee.department === "Finance"
);
console.log("\nIs there at least one Finance employee?");
console.log(hasFinanceEmployee);

// 8. Sort employees by salary highest to lowest without modifying original array
const employeesBySalaryDesc = [...validEmployees].sort(
  (a, b) => b.salary - a.salary
);
console.log("\nEmployees sorted by salary, highest to lowest:");
employeesBySalaryDesc.forEach(printEmployeeDetails);

// 9. Sort employees alphabetically by name without modifying original array
const employeesByName = [...validEmployees].sort((a, b) =>
  a.name.localeCompare(b.name)
);
console.log("\nEmployees sorted alphabetically by name:");
employeesByName.forEach(printEmployeeDetails);

// Prove original array is unchanged
console.log("\nOriginal Employees:");
console.table(employees);
