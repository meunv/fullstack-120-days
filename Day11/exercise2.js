//Ex 7: Use some() to check if at least one person is an adult (>= 18).

const ages = [12, 18, 25, 30];

const adult = ages.some(age => age >= 18);

if (adult){
    console.log(adult);
}else{
    console.log("False: No adults found in this array.");
}

//Ex 8: Use every() to check if all scores are passing (>= 50).

const scores = [80, 90, 75, 88];

const scoreGreaterThanFifty = scores.every(score => score >= 50);

//expecting True or False

console.log(scoreGreaterThanFifty)

//custom message
if (scoreGreaterThanFifty) {
  console.log("All scores are greater than or equal to 50");
} else {
  console.log("No items found greater than or equal to 50");
}

//Ex 9: Use every() to verify that every password is a non-empty string.

const passwords = [
    "Password123",
    "SecurePass!",
    "",
    "Admin@123"
];

const allValidPasswords = passwords.every(
  password => typeof password === "string" && password.length > 0
);

console.log(allValidPasswords);

//custom message
if (allValidPasswords) {
  console.log("All Passwords are valid.");
} else {
  console.log("All Passwords are not valid.");
}

//Ex 10: Use some() to determine whether there has been at least one successful login.

const loginAttempts = [false, false, true];

const hasSuccessfulLogin = loginAttempts.some(attempt => attempt === true);

const validLoginAttempts = loginAttempts.filter(attempt => attempt === true).length;

console.log(hasSuccessfulLogin);
console.log(validLoginAttempts);


/*
const names = ["Arun", "Rahul", "Priya"];

const totalCharacters = names.reduce(
    (count, name) => count + name.length,
    0
);

console.log(totalCharacters);
*/

//Ex 11: User reduce() to calculate the total sales.

const sales = [150, 200, 350, 100];

const totalSales = sales.reduce(
    (sum, sale) => {
        return sum + sale
    },
        0
);
console.log(totalSales);

//Ex 12: Use reduce() to calculate the total number of characters across all words.

const words = [
    "JavaScript",
    "React",
    "Node"
];

const totalWords = words.reduce(
    (count, word) => count + word.length,
    0
);

console.log(totalWords)

//Ex 13: Use reduce() to calculate the total expenses.
const expenses = [250, 100, 50, 400];

const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense,
    0
);

console.log(totalExpense);

//Ex 14: Use reduce() to calculate the total of only valid finite numbers.

const transactions = [
  100,
  -50,
  "200",
  null,
  300,
  Infinity
];

const total = transactions.reduce((sum, transaction) => {
  if (typeof transaction === "number" && Number.isFinite(transaction)) {
    return sum + transaction;
  }

  return sum;
}, 0);

console.log(total);

// Challane : what will the output if we set the initial value 0 or 1.
// in multiplication if we start with 0 answer will be 0 only. 
/*
Every mathematical operation has an identity value.

Operation	    Identity Value
Addition	    0
Multiplication	1
Logical AND	    true
Logical OR	    false

*/
const values = [5, 10, 15];

const result = values.reduce((accumulator, value) => {
    return accumulator * value;
}, 1);

console.log(result);

//Bonus interview question 

const numbers = [2, 4, 6];

const res = numbers.reduce((accumulator, value) => {
    console.log(
        `Accumulator: ${accumulator}, Value: ${value}`
    );
    return accumulator + value;
}, 10);

console.log(res);