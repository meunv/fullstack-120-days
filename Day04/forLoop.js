for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Exercise 1: print numbers from 10 to 1 using a for loop
console.log("\nNumbers from 10 to 1:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//Exercise 2: print even numbers from 1 to 10 using a for loop 
console.log("\nEven numbers from 1 to 10:");
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

//Exercise 3: print odd numbers from 1 to 10 using a for loop
console.log("\nOdd numbers from 1 to 10:");
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

//Exercise 4: print the multiplication table of 7 using a for loop
console.log("\nMultiplication table of 7:");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}


//Exercise 5: print the sum of numbers from 20 to 0 decrasing by 5 but if i ===10 then continue to the next iteration

console.log("\nSum of numbers from 20 to 0 decreasing by 5 (skipping 10):");

for (let i = 20; i > 0; i -= 5) {
    if (i === 10) {
        continue; // Skip the iteration when i is 10
    }
    console.log(i);

}

//Exercise 6: print numbers from 1 to 5 but if i === 3 then break the loop and if i is odd then continue to the next iteration
console.log("\nNumbers from 1 to 5 (skipping odd numbers and breaking at 3):");
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }

    if (i % 2 === 1) {
        continue;
    }

    console.log(i);
}

//Exercise 7: print the * pattern using a for loop
console.log("\nThe * pattern:\n");    
for (let i = 1; i <= 5; i++) {
    let stars = ''; 
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}
