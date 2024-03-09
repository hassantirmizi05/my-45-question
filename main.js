// Seeing the World, array of places original order
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["haram", "madinah", "turkey", "iraq", "palestine"];
console.log("original order is ".concat(places));
// copy of array in alphabetical order without modifying
console.log("alphabtical order", __spreadArray([], places, true).sort());
// showing the original order
console.log("original order ".concat(places));
// copy of array in reverse order
console.log("reverse order", __spreadArray([], places, true).reverse());
// showing the original order
console.log("original order ".concat(places));
// changed the order of original array without copying 
console.log("original array reversed", places.reverse());
// back to original order 
console.log("back to original", places.reverse());
// sorting original array again in alphabetical order
console.log("alphabetical order", places.sort());
// reversing the original array
console.log("reversed original array again", places.reverse());
