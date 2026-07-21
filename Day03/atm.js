/*
Written by: Arun kumar on 20-07-2026
This atm.js file is used to demonstrate that if the coustomer is asking the ATM, this program will check and tell he is eligible or not.

*/

const age = 20;
const hasAadhar = true;
const hasPAN = true;   

if (age >= 18 && hasAadhar && hasPAN) {
    console.log("Customer is eligible for ATM services.");
} else {
    console.log("Customer is not eligible for ATM services.");
}


//login system
const username = "admin";

const password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}

//Mini project3 - Electircity bill calculation
const unitsConsumed = 150;
if (unitsConsumed <= 100) {
    const billAmount = unitsConsumed * 2; // Rs. 2  per unit for first 100 units
    console.log(`Electricity Bill Amount: Rs. ${billAmount}`);
} else if (unitsConsumed <= 300) { 
    const billAmount = 100 * 2 + (unitsConsumed - 100) * 4; // Rs. 4 per unit for units beyond 100
    console.log(`Electricity Bill Amount: Rs. ${billAmount}`);
} else if (unitsConsumed <= 500) {
    const billAmount = 100 * 2 + 200 * 4 + (unitsConsumed - 300) * 6; // Rs. 6 per unit for units beyond 300
    console.log(`Electricity Bill Amount: Rs. ${billAmount}`);
}
else {
    const billAmount = 100 * 2 + 200 * 4 + 200 * 6 + (unitsConsumed - 500) * 8; // Rs. 8 per unit for units beyond 500
    console.log(`Electricity Bill Amount: Rs. ${billAmount}`);
}
