/*
Array index start from 0. So, the first element of an array is at index 0, the second element is at index 1, and so on. The last element of an array is at index length - 1.
arrry.length property returns the number of elements in an array. It is a read-only property, which means you cannot change its value directly. However, you can change the length of an array by adding or removing elements from it.
push() method adds one or more elements to the end of an array and returns the new length of the array. It modifies the original array.
pop() method removes the last element from an array and returns that element. It modifies the original array.
unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. It modifies the original array.
shift() method removes the first element from an array and returns that element. It modifies the original array.
array.splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array.
array.slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). It does not modify the original array.
array.indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. It does not modify the original array.
array.lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. It does not modify the original array.
array.includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. It does not modify the original array.
array.join() method joins all elements of an array into a string and returns this string. It does not modify the original array.
array.reverse() method reverses the order of the elements of an array in place. It modifies the original array.
array.sort() method sorts the elements of an array in place and returns the sorted array. It modifies the original array.
array.filter() method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
array.map() method creates a new array with the results of calling a provided function on every element in the calling array. It does not modify the original array.
array.reduce() method executes a reducer function on each element of the array, resulting in a single output value. It does not modify the original array.
array.forEach() method executes a provided function once for each array element. It does not modify the original array.
array.find() method returns the value of the first element in the array that satisfies the provided testing function. It does not modify the original array.
array.findIndex() method returns the index of the first element in the array that satisfies the provided testing function. It does not modify the original array.
array.every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. It does not modify the original array.
array.some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. It does not modify the original array.
array.flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. It does not modify the original array.
array.flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It does not modify the original array.
array.fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It modifies the original array.
array.copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size. It modifies the original array.
array.toString() method returns a string representing the specified array and its elements. It does not modify the original array.
array.toLocaleString() method returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and these strings are separated by a locale-specific string (such as a comma “,”). It does not modify the original array.
array.entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array. It does not modify the original array.
array.keys() method returns a new Array Iterator object that contains the keys for each index in the array. It does not modify the original array.
array.values() method returns a new Array Iterator object that contains the values for each index in the array. It does not modify the original array.
array.findLast() method returns the value of the last element in the array that satisfies the provided testing function. It does not modify the original array.
array.findLastIndex() method returns the index of the last element in the array that satisfies the provided testing function. It does not modify the original array.
array.at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array. It does not modify the original array.
array.includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. It does not modify the original array.
array.isArray() method determines whether the passed value is an Array. It returns a Boolean value. It does not modify the original array.
array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. It does not modify the original array.
array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. It does not modify the original array.
*/

// Exercise 1: Create an array containing Red, Blue, Green, Yellow and print first, last and length of the array.
const colors = ["Red", "Blue", "Green", "Yellow"];
console.log("First color:", colors[0]);
console.log("Last color:", colors[colors.length - 1]);
console.log("Length of the array:", colors.length);

// Exercise 2: Create an array of numbers 10,20,30,40,50 and print them using loop. 
const numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log("Number:", numbers[i]);
}

//Exercise 3: print the array given in Exercise 2 in reverse order using loop.
console.log("Array in reverse order:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log("Number:", numbers[i]);
}

// Exercise 4: Create an array of cities Delhi, Mumbai, Bengaluru and add Chennai at the end and Kolkata at the beginning. Remove the last element and print the final array.
const cities = ["Delhi", "Mumbai", "Bengaluru"];
cities.push("Chennai");
cities.unshift("Kolkata");
console.log("Cities:", cities);

cities.pop();
console.log("Final Cities Array after removing last element:", cities);

// Mini Project 1: Create an array of students marks 85, 72, 91, 66, 58 and print Total, Average, Highest and Lowest marks.
const marks = [85, 72, 91, 66, 58];
let total = 0;
let highest = marks[0];
let lowest = marks[0];

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
    if (marks[i] > highest) {
        highest = marks[i];
    }
    if (marks[i] < lowest) {
        lowest = marks[i];
    }
}

const average = total / marks.length;

console.log("Total Marks:", total);
console.log("Average Marks:", average);
console.log("Highest Marks:", highest);
console.log("Lowest Marks:", lowest);   

// Mini Project 2: Create an array of numbers 12, 7, 9, 18, 25, 40 and print the even and Odd numbers separately.
const numArray = [12, 7, 9, 18, 25, 40];
const evenNumbers = [];
const oddNumbers = [];  

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
        evenNumbers.push(numArray[i]);
    } else {
        oddNumbers.push(numArray[i]);
    }
}
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

// Mini Project 3: Create a blank array and add Laptop, Mouse, Keyboard  then remove the Mouse then print the final cart.   
const cart = [];
cart.push("Laptop");
cart.push("Mouse");
cart.push("Keyboard");
console.log("Cart before removing Mouse:", cart);
cart.splice(cart.indexOf("Mouse"), 1);
console.log("Final Cart after removing Mouse:", cart);

// Mini Project 4: Create an array of Employees Arun, Rahul, Priya, Sneha, Amit and aks is Priya present, is Viajy present, print the appropriate message.
const employees = ["Arun", "Rahul", "Priya", "Sneha", "Amit"];
const isPriyaPresent = employees.includes("Priya");
const isVijayPresent = employees.includes("Vijay"); 

if (isPriyaPresent) {
    console.log("Priya is present in the employees list.");
} else {
    console.log("Priya is not present in the employees list.");
}           
if (isVijayPresent) {
    console.log("Vijay is present in the employees list.");
} else {
    console.log("Vijay is not present in the employees list.");
}


// Mentor Challange: without using Math.max() or Math.min(): write a function findSecondLargest(number) in number array 10, 25, 18, 40, 33. This challenge combines arrays + loops + conditions + function.     

// JavaScript program to find the second largest element in the array
// using two traversals

function getSecondLargest(arr) {
    let n = arr.length;

    let largest = -1, secondLargest = -1;

    // Finding the largest element
    for (let i = 0; i < n; i++) {
        if (arr[i] > largest)
            largest = arr[i];
    }

    // Finding the second largest element
    for (let i = 0; i < n; i++) {
        
        // Update second largest if the current element is greater
        // than second largest and not equal to the largest
        if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [10, 25, 18, 40, 33];
console.log(getSecondLargest(arr));

// JavaScript program to find second largest element in an array
// using Sorting

// function to find the second largest element
function getSecondLargest(arr) {
    let n = arr.length;
    
    // Sort the array in non-decreasing order
    arr.sort((a, b) => a - b);
  
    // start from second last element as last element is the largest
    for (let i = n - 2; i >= 0; i--) {
      
        // return the first element which is not equal to the 
        // largest element
        if (arr[i] !== arr[n - 1]) {
            return arr[i];
        }
    }
  
    // If no second largest element was found, return -1
    return -1;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(getSecondLargest(arr));

// JavaScript program to find the second largest element in the array
// using one traversal

// function to find the second largest element in the array
function getSecondLargest(arr) {
    const n = arr.length;

    let largest = -1, secondLargest = -1;

    // finding the second largest element
    for (let i = 0; i < n; i++) {

        // If arr[i] > largest, update second largest with
        // largest and largest with arr[i]
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
      
        // If arr[i] < largest and arr[i] > second largest, 
        // update second largest with arr[i]
        else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(getSecondLargest(arr));