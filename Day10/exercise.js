// Ex1: Create an Arry
const colors = ["Red", "Green", "Blue"];
console.log(colors);

// Ex2: print the array as indexes.
console.log("\n----- printing with for loop: -----\n")
for(let ctr=0; ctr< colors.length; ctr++){
    console.log(colors[ctr]);
}

//or
console.log("\n----- printing with while: -----\n")
let n=0;
while(n < colors.length){
    console.log(colors[n]);
    n++;
}

//or
console.log("\n----- printing with Do...while: -----\n")
let c=0;
do{
    console.log(colors[c]);
    c++;
}while(c<colors.length);

// print with function;
console.log("\n----- printing with function: -----\n")
const printColours =function(color){
    let col = 0;
    for (col; col < color.length; col++){
        console.log(color[col]);
    }
}
printColours(colors);

//Ex 3: Replace "Green" with "Yelow".
const index = colors.indexOf("Green");
colors[index] = "Yellow";
console.log("\nprinting the Revised Array\n");
console.log(colors);

//Ex 4: delcaring an array and print the length of an array.
const numbers = [10, 20, 30, 40, 50];
console.log(`The Length of array is ${numbers.length}`);

//Ex 5: Array operations Push, Pop, shift, unshift;
const fruits = ["Apple", "Banana"];
console.log("\nThe Original Array is " +fruits);
fruits.push("Orange");
console.log("\nAfter Push operation with element Orange (Adding Orange as last element): " +fruits);
fruits.unshift("Mango");
console.log("\nAfter unshift operation (Adding Mango in the begining of the Array): " +fruits);
fruits.pop();
console.log("\nAfter POP operation (removing last value): " +fruits);
fruits.shift();
console.log("\nAfter shift operation (removing first Element): " +fruits);

//Ex 6: Create an array of cities and print them.
const cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];
for(const c of cities){
    console.log(c);
}

//Ex 7: Printing the sum of numbers of an array.
const marks = [80, 90, 70, 95, 88];
const sum = marks.reduce((accumulator, current) => {
    // Check if the current item is strictly a number and not NaN
    if (typeof current === 'number' && !isNaN(current)) {
        return accumulator + current;
    }
    return accumulator;
}, 0);

//Method 2: 
console.log("Sum of numbers:", sum); // Output: 423

let sumOfNumbers = 0;
for (let i = 0; i < marks.length; i++) {
  sumOfNumbers += marks[i];
}
console.log(sumOfNumbers);

//Ex 8: print Average of An array
const avgerage= marks.length ? sumOfNumbers / marks.length : 0;
console.log(avgerage);

//Ex 9: Print each employee name with a serial number from an array:
const employees = [
    "Arun",
    "Rahul",
    "Priya",
    "Neha"
];
let a =1;
for(const emp of employees){
    console.log(` ${a}. ${emp}`);
    a++;
}

// Ex10: Create an Array of five productes and search of "Monitor" using includes();
const products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Printer"
];

const toFind = "Monitor"
if (products.includes(toFind)){
    console.log("Product Found");
}else{
    console.log("Product Not Found");
}