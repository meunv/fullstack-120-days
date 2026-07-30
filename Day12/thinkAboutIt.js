<<<<<<< HEAD
const employee = {
    name: "Arun"
};

const e2 = employee;

e2.name = "Rahul";

console.log(employee.name);

// Ex1: const e2 = employee doesn't create a new object; it copies the reference, so both employee and e2 point to the identical object in memory. The object employee is mutated by e2.

const a = [1,2,3];
const b = a;

b.push(4);

console.log(a);

// Ex2: Here a is and Array object and b is not creating a new independent Array but copying the reference (memory address) that points to the array. Both a & b are pointing to the exact same array in memory, with two variable names.

const numbers = [1,2,3];

const copy = [...numbers];

copy.push(4);

console.log(numbers);

// Ex3: Here copy is creating another object so array number is not mutated. 

const employees = [
    {
        name:"Arun",
        address:{
            city:"Bangalore"
        }
    }
];

const copy2 = [...employees];

copy2[0].address.city = "Delhi";

console.log(employees[0].address.city);
console.log(copy2[0].address.city);

// Ex4: Array copy will create a new outer Array object, other than employees. But refencing the same primitives. primities here is "Delhi" So employee will be mutated.
// This is called shallow copy.

const copy3 = {...employees};

copy2[0].address.city = "Patna";

console.log(employees[0].address.city);
console.log(copy3[0].address.city);
// Ex 5: Same as Ex4 - shallow copy
const emp1 = {
    id: 1,
    skills: {
        frontend: "JavaScript"
    }
};

const emp2 = {
    ...emp1
};

emp2.skills.frontend = "React";

console.log(emp1.skills.frontend);
console.log(emp2.skills.frontend);

// Ex6: Shallow copy

const employees2 = [
    {
        name: "Arun",
        skills: ["JS", "Python"]
    }
];

const copyEmp = employees2.map(emp => ({
    ...emp
}));

copyEmp[0].skills.push("React");

console.log(employees2[0].skills);
console.log(copyEmp[0].skills);
 //Ex 7: shallow copy.

 //Ex 8: The solution to shallow copy is deep copy.
 const deepCopy = structuredClone(employees2);
 deepCopy[0].skills.push("Java")
 //check that employees2 object is mutated or not.
 console.log("\n\n");
 console.log(deepCopy)
 console.table(deepCopy);
=======
const employee = {
    name: "Arun"
};

const e2 = employee;

e2.name = "Rahul";

console.log(employee.name);

// Ex1: const e2 = employee doesn't create a new object; it copies the reference, so both employee and e2 point to the identical object in memory. The object employee is mutated by e2.

const a = [1,2,3];
const b = a;

b.push(4);

console.log(a);

// Ex2: Here a is and Array object and b is not creating a new independent Array but copying the reference (memory address) that points to the array. Both a & b are pointing to the exact same array in memory, with two variable names.

const numbers = [1,2,3];

const copy = [...numbers];

copy.push(4);

console.log(numbers);

// Ex3: Here copy is creating another object so array number is not mutated. 

const employees = [
    {
        name:"Arun",
        address:{
            city:"Bangalore"
        }
    }
];

const copy2 = [...employees];

copy2[0].address.city = "Delhi";

console.log(employees[0].address.city);
console.log(copy2[0].address.city);

// Ex4: Array copy will create a new outer Array object, other than employees. But refencing the same primitives. primities here is "Delhi" So employee will be mutated.
// This is called shallow copy.

const copy3 = {...employees};

copy2[0].address.city = "Patna";

console.log(employees[0].address.city);
console.log(copy3[0].address.city);
// Ex 5: Same as Ex4 - shallow copy
const emp1 = {
    id: 1,
    skills: {
        frontend: "JavaScript"
    }
};

const emp2 = {
    ...emp1
};

emp2.skills.frontend = "React";

console.log(emp1.skills.frontend);
console.log(emp2.skills.frontend);

// Ex6: Shallow copy

const employees2 = [
    {
        name: "Arun",
        skills: ["JS", "Python"]
    }
];

const copyEmp = employees2.map(emp => ({
    ...emp
}));

copyEmp[0].skills.push("React");

console.log(employees2[0].skills);
console.log(copyEmp[0].skills);
 //Ex 7: shallow copy.

 //Ex 8: The solution to shallow copy is deep copy.
 const deepCopy = structuredClone(employees2);
 deepCopy[0].skills.push("Java")
 //check that employees2 object is mutated or not.
 console.log("\n\n");
 console.log(deepCopy)
 console.table(deepCopy);
>>>>>>> 1fd1fe9a9e81d825fac4a9adb1397610f8d71826
 console.table(employees2);