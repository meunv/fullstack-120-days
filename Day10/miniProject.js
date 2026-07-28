/**
 * Create an empty shopping cart:

const cart = [];

Perform these operations in order:

Add "Laptop"
Add "Mouse"
Add "Keyboard"
Display the cart
Remove the last product
Display the cart again
Add "Monitor" at the beginning
Display the cart
Check whether "Mouse" exists using includes()
Print the total number of products using length
 */
const cart = [];
const printCart = ()=>{
    for (const c of cart){
    console.log(c);

}
}
cart.push("Laptop", "Mouse", "Keyboard");
console.log("===== Shopping Cart =====");
printCart();
console.log("\nAfter removing last item:");
cart.pop();
printCart();
console.log("\nAfter addmin monitor:");
cart.unshift("Monitor");
printCart();
console.log("\n");
console.log("Mouse exists: " +cart.includes("Mouse"));
console.log("\n");
console.log(`Total Products: ${cart.length}`);

//Bonus Challange

const displayCart = (cart) => {
    console.log(`\n===== Shopping Cart =====`)
    let n=1;
    for(const c of cart){
        console.log(`${n}. ${c}`);
        n++;
    }
};
displayCart(cart);