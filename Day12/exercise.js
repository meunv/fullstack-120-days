//Array of Objects

//Ex: 1. validate the data before inserting to given array
const employees = [
    {
        id: 1,
        name: "Arun",
        department: "IT",
        salary: 80000
    },
    {
        id: 2,
        name: "Rahul",
        department: "HR",
        salary: 50000
    },
    {
        id: 3,
        name: "Priya",
        department: "Finance",
        salary: 70000
    }
];
const newEmployee = {
    id: 4,
    name: "Neha",
    department: "Sales",
    salary: 65000
};

function isValidEmployee(employee) {
    return (
        typeof employee.id === "number" &&
        employee.id > 0 &&
        typeof employee.name === "string" &&
        employee.name.trim().length > 0 &&
        typeof employee.department === "string" &&
        employee.department.trim().length > 0 &&
        typeof employee.salary === "number" &&
        Number.isFinite(employee.salary) &&
        employee.salary >= 0
    );
}
if (isValidEmployee(newEmployee)) {
    employees.push(newEmployee);
}
console.table(employees);

//Ex 2: Read all employees using resuable function.
//method 1:
console.log("\nMethod 1 to read all employees with resuable function");
employees.forEach(employee => {
    console.log(
        `${employee.id} - ${employee.name}`
    );
});

// method 2:
console.log("\nMethod 2 to read all employees with resuable function");
function readEmployees(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

readEmployees(employees, (emp, index) => {
  console.log(`Employee ${index + 1}: ${emp.id} - ${emp.name}`);
});

//Ex 3: Read by ID; find an employee with id=3, if not found it should retrun "Employee not found."

function readEmpById(number){
    if ( typeof isFinite(number) && number > 0){
        const employee = employees.find(
        employee => employee.id === number
        );
    if (employee) {
        console.log(employee);
    }else{
        console.log("Employee not found.");
    };
    }else{
        console.log("Not a valid ID.")
    }
    
}
console.log("\n Testing with valid number");
readEmpById(3);
console.log("\n Testing with invalid Id");
readEmpById(5);
console.log("\n Testing with invalid number");
readEmpById(-2);
console.log("\n Testing with invalid character");
readEmpById("2");
console.log("\n Testing with Special character");
readEmpById("@2");

//Ex 4: Update - Increase Rahul's salary from: 50k to 55k.
function increaseSalaryByName(empName, employees){
    const newSalary = 55000;
    function isValidName(empName) {
    return /^[A-Za-z ]+$/.test(empName);
    }

    if (!empName || !isValidName(empName)) {
    console.log("Not a valid employee.");
    return;
    }

    const employee = employees.find(emp => emp.name === empName);
    
    if (employee) {
        employee.salary = newSalary;
        console.log(`Salary updated for ${employee.name}: ${employee.salary}`);
    } else {
        console.log("\nError: Salary not updated. User not found");
    };
}

increaseSalaryByName("TEST", employees);
increaseSalaryByName("Rahul", employees);
console.table(employees);

//Ex 5: Delete (Immutable) Delete Rahul using filter.

const updatedEmployees = employees.filter(
    employee => employee.name !== "Rahul"
);
console.log(`\n---- Updated Table after removing 'Rahul' using filter() ----\n`)
console.table(updatedEmployees);

console.log(`\n---- Original Table after removing 'Rahul' Imutable ----\n`)
console.table(employees);
console.log("\n");

//Ex 6: Delete (Mutable) Delete Priya using splice().

const index = employees.findIndex(
    employee => employee.name === "Priya"
);

if (index !== -1) {
    employees.splice(index, 1);
}

console.log(`\n------- Final Array (after removing Priya: by findIndex & splice method) -----\n`);
console.table(employees);
console.log(`\n--------------------------------------------------------------------------------\n`);
