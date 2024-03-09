// Seeing the World, array of places original order

let places:string[] = ["haram","madinah","turkey","iraq","palestine"];
console.log(`original order is ${places}`);

// copy of array in alphabetical order without modifying
console.log(`alphabtical order`,[...places].sort());

// showing the original order
console.log(`original order ${places}`);

// copy of array in reverse order
console.log("reverse order", [...places].reverse());

// showing the original order
console.log(`original order ${places}`);

// changed the order of original array without copying 
console.log("original array reversed",places.reverse());

// back to original order 
console.log("back to original",places.reverse());

// sorting original array again in alphabetical order
console.log("alphabetical order",places.sort());

// reversing the original array
console.log("reversed original array again",places.reverse());
