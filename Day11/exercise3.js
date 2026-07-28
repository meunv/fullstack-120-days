/*
Awesome! 🚀 Welcome to the final major topic of **Day 11**.

You've now mastered all the most commonly used array methods except sorting. This lesson is extremely important because you'll use it in:

* 📊 Dashboards (sort reports)
* 🛒 E-commerce (sort products by price)
* 👨‍💼 Employee Management Systems (sort employees by salary/name)
* 📈 Financial Applications (sort transactions)
* 🔍 Search Results
* 📱 React tables and grids

---

# 🚀 Day 11 – Lesson 7: `sort()` and `reverse()`

# 📚 What is `sort()`?

`sort()` arranges elements in an array.

By default, it sorts **lexicographically (dictionary order)**.

---

## Example 1 – Sorting Strings

```javascript
const fruits = [
    "Banana",
    "Apple",
    "Orange",
    "Mango"
];

fruits.sort();

console.log(fruits);
```

### Output

```text
[
    "Apple",
    "Banana",
    "Mango",
    "Orange"
]
```

Perfect.

---

# Example 2 – The Famous JavaScript Trap

```javascript
const numbers = [100, 20, 3];

numbers.sort();

console.log(numbers);
```

### Output

```text
[100, 20, 3]
```

Not

```text
[3,20,100]
```

because JavaScript converts numbers to strings before comparing.

You've already understood **why** this happens. 👍

---

# Example 3 – Numeric Ascending Sort

```javascript
const numbers = [100, 20, 3];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Output

```text
[3,20,100]
```

---

# Example 4 – Numeric Descending

```javascript
const numbers = [100, 20, 3];

numbers.sort((a, b) => b - a);

console.log(numbers);
```

Output

```text
[100,20,3]
```

---

# 📚 How Comparator Functions Work

This is one of the most important interview topics.

Suppose:

```javascript
a = 20
b = 100
```

Our comparator:

```javascript
a - b
```

becomes

```text
20 - 100 = -80
```

Negative value means

> Keep **a before b**

---

Now

```javascript
a = 100
b = 20
```

```text
100 - 20 = 80
```

Positive value means

> Move **a after b**

---

If

```text
a-b = 0
```

Both elements are considered equal.

---

# 📚 Sorting Objects

Real projects rarely sort numbers.

They sort objects.

Example:

```javascript
const employees = [
    {
        id:1,
        name:"Rahul",
        salary:50000
    },
    {
        id:2,
        name:"Arun",
        salary:80000
    },
    {
        id:3,
        name:"Priya",
        salary:60000
    }
];
```

---

## Sort by Salary

```javascript
employees.sort(
    (a,b)=>a.salary-b.salary
);

console.log(employees);
```

Output

```text
Rahul

Priya

Arun
```

---

## Sort by Name

```javascript
employees.sort(
    (a,b)=>a.name.localeCompare(b.name)
);
```

Output

```text
Arun

Priya

Rahul
```

### Why `localeCompare()`?

It correctly compares strings according to language rules.

It's preferred over manually comparing strings with `<` or `>` because it handles alphabetical ordering more reliably across different locales.

---

# 📚 reverse()

Simple.

```javascript
const numbers=[1,2,3,4];

numbers.reverse();

console.log(numbers);
```

Output

```text
[4,3,2,1]
```

---

# Combine `sort()` + `reverse()`

```javascript
const numbers=[50,10,30];

numbers
.sort((a,b)=>a-b)
.reverse();

console.log(numbers);
```

Output

```text
[50,30,10]
```

---

# 🔒 Secure Coding Corner

## ⚠ Problem 1 — `sort()` Mutates the Original Array

Consider:

```javascript
const scores=[90,60,75];

const sorted=scores.sort((a,b)=>a-b);

console.log(scores);
```

Output:

```text
[60,75,90]
```

Notice that **`scores` itself has changed**.

This can introduce subtle bugs if other parts of your application expect the original order.

### Safer Pattern

```javascript
const scores=[90,60,75];

const sorted=[...scores]
.sort((a,b)=>a-b);

console.log(scores);
console.log(sorted);
```

Output

```text
scores
[90,60,75]

sorted
[60,75,90]
```

---

## ⚠ Problem 2 — Don't Sort Unvalidated Data

Imagine this data comes from an external API:

```javascript
const prices=[
    200,
    null,
    "300",
    100,
    Infinity
];
```

A robust approach:

```javascript
const sortedPrices = prices
    .filter(price =>
        typeof price === "number" &&
        Number.isFinite(price)
    )
    .sort((a,b)=>a-b);

console.log(sortedPrices);
```

This avoids unexpected values affecting the sort.

---

## ⚠ Problem 3 — Avoid Mutating Shared Data

Imagine two parts of your application both use the same array:

```javascript
const users = [
    { name: "Arun" },
    { name: "Rahul" }
];

const adminUsers = users;

adminUsers.sort((a, b) => a.name.localeCompare(b.name));
```

Both `users` and `adminUsers` now refer to the same sorted array.

Instead:

```javascript
const adminUsers = [...users].sort(
    (a, b) => a.name.localeCompare(b.name)
);
```

This preserves the original data, reducing the chance of unintended side effects.

---

# 📝 Exercises 15–20

## Exercise 15

Create:

```javascript
const numbers = [80, 20, 50, 10, 90];
```

Sort in **ascending** order.

Expected:

```text
[10,20,50,80,90]
```

---

## Exercise 16

Using the same array,

Sort in **descending** order.

Expected:

```text
[90,80,50,20,10]
```

---

## Exercise 17

Create:

```javascript
const names = [
    "Rahul",
    "Arun",
    "Priya",
    "Neha"
];
```

Sort alphabetically.

Expected:

```text
Arun
Neha
Priya
Rahul
```

---

## Exercise 18

Create:

```javascript
const employees = [
    { name: "Rahul", salary: 50000 },
    { name: "Arun", salary: 80000 },
    { name: "Priya", salary: 60000 }
];
```

Sort by salary (ascending).

---

## Exercise 19

Using the same employee array,

Sort by employee name alphabetically.

Use:

```javascript
localeCompare()
```

---

## Exercise 20 (Secure Coding)

Create:

```javascript
const transactions = [
    300,
    "100",
    null,
    50,
    Infinity,
    200
];
```

Requirements:

1. Filter valid finite numbers.
2. Sort them ascending.
3. Do **not** modify the original array.
4. Print both arrays to prove the original is unchanged.

---

# 🎓 Interview Questions

1. Why doesn't `sort()` work correctly for numbers by default?
2. What does `a - b` mean inside `sort()`?
3. What does a negative return value tell `sort()`?
4. Why is `localeCompare()` preferred for sorting strings?
5. Why can mutating an array with `sort()` cause bugs in larger applications?
6. Why is copying an array before sorting considered a good practice?

---

## 🎯 After These Exercises

We'll finish Day 11 with a **Mini Project: Employee Analytics Dashboard**.

You'll combine:

* `filter()`
* `map()`
* `find()`
* `reduce()`
* `some()`
* `every()`
* `sort()`

into one realistic application—very similar to what you'd build in a React frontend or a Node.js backend API.

Take your time with these exercises. The object sorting and secure coding exercise are especially important because they mirror real production scenarios. 🚀
*/

//Ex: 15 sort in ascending order 
const numbers = [80, 20, 50, 10, 90];
const SortedNumbers =[...numbers].sort(
    (a,b) => a-b
);

console.log(`Numbers : ${numbers}`);
console.log(`Sorted Numbers: ${SortedNumbers}`);

//Ex: 16 Sort in descending order.
const decendingSort = [...numbers]
    .sort((a,b) => b-a
);
console.log(`Sort Decending: ${decendingSort}`);

//Ex 17: Sort alphabetically.
const names = [
    "Rahul",
    "Arun",
    "Priya",
    "Neha"
];
const alphabeticalSort = [...names].sort(
    (a, b) => a.localeCompare(b)
);
console.log(`Actual Array: ${names}`);
console.log(`Alphabetically sorted Array: ${alphabeticalSort}`);

//Ex: 18: Sort by Salary (ascending)
const employees = [
  { name: "Rahul", salary: 50000 },
  { name: "Arun", salary: 80000 },
  { name: "Priya", salary: 60000 }
];

const sortBySalary = [...employees].sort(
    (a, b) => a.salary - b.salary
);

console.log("Employees sorted by salary:");

sortBySalary.forEach(employee => {
  console.log(`Employee: ${employee.name}, Salary: ${employee.salary}`);
});

console.log("\nOriginal employees [object]:");
console.log(employees);

console.log("\nSorted employees [object]:");
console.log(sortBySalary);

console.table(sortBySalary); // Print objects in a nice table format.

//Ex 19. Using the same employee array. Sort by employee name alphabetically.
const sortByName = [...employees].sort(
    (a, b) => a.name.localeCompare(b.name)
);

console.log("\nEmployees sorted by Name:");

sortByName.forEach(employee => {
  console.log(`\nEmployee: ${employee.name}, Salary: ${employee.salary}`);
});

console.log("\nOriginal employees [object]:");
console.log(employees);

console.log("\nSorted employees by Name [object]:");
console.log(sortByName);

//Ex 20: Requirements:
/*
Filter valid finite numbers.
Sort them ascending.
Do not modify the original array.
Print both arrays to prove the original is unchanged.
*/

const transactions = [
    300,
    "100",
    null,
    50,
    Infinity,
    200
];
const sortedTransactions = transactions
    .filter(transaction =>
        typeof transaction === "number" &&
        Number.isFinite(transaction)
    )
    .sort((a,b)=>a-b);

console.log("\nOriginal transactions:\n");
console.log(transactions);

console.log("\nSorted valid finite numbers:\n");
console.log(sortedTransactions);