//Agenda: map(), filter(), find(), findIndex(), some(), every(), reduce(), sort(), reverse().

// //Ex1: Use map() to create a new array where every number is doubled.

const numbers = [5, 10, 15, 20];
const doubleTheNumbers = numbers.map(number => number*2);
console.log(doubleTheNumbers);

//Ex2: use filter() to return only prices greater than 100.

const prices = [50, 120, 80, 300, 40];
const filteredPrices = prices.filter(price => price > 100);
console.log(filteredPrices);

//Ex3: Use find() to retrieve the employee with:

const employees = [
    { id: 1, name: "Arun" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" }
];

const findEmployee = employees.find(emp => emp.id === 2);

if (findEmployee) {
    console.log(findEmployee.name);
}

//Ex4: Using the same employee array, find the index of "Priya".

const indexOfEmp = employees.findIndex(emp => emp.name === "Priya");

if (indexOfEmp !== -1){
    console.log(indexOfEmp);
}

//Ex5: Use filter() to return only passing marks (>= 50).

const marks = [35, 80, 75, 90, 45];

const filteredMarks = marks.filter(mark => mark >= 50);
if (filteredMarks.length > 0) {
  console.log(filteredMarks);
} else {
  console.log("No marks found greater than or equal to 50.");
}

//Ex6: Use filter() to create a new array that contains only valid non-negative numbers from the given array.
const inputs = [100, -20, null, 50, "abc", 0];

const validNumbers = inputs.filter(input => typeof input === "number" && input >= 0);

if (validNumbers.length > 0) {
  console.log(validNumbers);
} else {
  console.log("No valid +ve numbers in the given array.");
}
