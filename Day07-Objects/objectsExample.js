/* Exercise 1: Create an object for a book.   
Properties:
- title
- author
- price
- pages
Print all four properties.  */

const { act } = require("react");

const book = {
    title: "JavaScript is Easy",
    author: "Arun Kumar",
    price: 2250,
    pages: 575,
}

console.log("Title of the Book: " +book.title);
console.log("Author of the Book: " +book.author);
console.log("Price: " +book.price);
console.log("No. of Pages: " +book.pages);

/* Exercise 2 : Create a student object.
Properties:
name
age
course

Update the course.
Print the updated object. */

const student = {
    name: "Arun Kumar",
    age: 22,
    course: "JavaScript"
};

console.log("Selected Course (initial): "+student.course);
student.course = "Full Stack 120 Days Roadmap"
console.log("The Updated Course: "+student.course);

/* Exercise 3: Cerate a mobile phone object. Add a new property called color, print the object. */

const mobilePhone = {
    brand: "Apple",
    model: "Pro 18"
}

mobilePhone.color = "Olive Green";

console.log(mobilePhone);

/* Exercise 4: Create an employee object.
Delete the salary property. 
Print the object. */

const employee = {
    name: "Arun",
    position: "Developer",
    salary: 50000
};

delete employee.salary;

console.log(employee);

/* Mini Project 1

Create a Bank Account object.

Properties:

accountNumber
holderName
balance

Print a formatted account summary.
*/
const bankAccount = {
    accountNumber: "SBIN0001234",
    holderName: "Arun Kumar",
    balance: 15000.50
};

console.log("--- Account Summary ---");
console.log("Account Number: " + bankAccount.accountNumber);
console.log("Holder Name: " + bankAccount.holderName);
console.log("Balance: Rs. " + bankAccount.balance.toFixed(2));

/* Mini Project 2

Create a Product object.

Increase its price by 10%.

Display the updated object. */

const product = {
    name : "Tata Tea",
    price: 100
}

product["price"] = (product.price * 1.1).toFixed(2);

console.log(product);

/**
 * Mini Project 3 – Car Object

Create a car object with these properties:

brand
model
year
fuelType

Then:

Add a new property called owner.
Delete the fuelType property.
Print the final object.
*/

const car = {
    brand: "Audi",
    model: "Q7",
    year: 2026,
    fuelType: "Petrol"
}

car["owner"] = "Arun Kumar";
console.log(car);
delete car.fuelType;
console.log(car);

/*
Mini Project 4 : Create a Movie object.
Store:

title
rating
actors (array)

Print every actor using a loop.

This combines:

Objects
Arrays
Loops
*/
const movie = {
    title: "Inception",
    rating: 9.0,
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"]
};

console.log("############################");
console.log("   Movie Title : ", movie.title);
console.log("   Rating      : ", movie.rating);
console.log("   Actors      :")
for (const actor of movie.actors) { //in will print index 0,1,2 but "of" will print the value.
    console.log("                ",actor);
};