// Shrinking Guest List by using ex.16
var allguests = ["ali", "maaz", "aryan"];
// creating variable for unavailable guests
var notComing = allguests[2];
// print name of unavailable guest
console.log(notComing, "is busy somwhere");
// adding and removing specific guest
allguests.splice(2, 2, "faizan");
// message for bigger table
console.log("good news! , we have found a bigger dinner table");
// add new guest at starting index of array
allguests.unshift("aashir");
// add new guest at end index of array
allguests.push("rehan");
// get middle index of array by average(middle value)
var middleindex = Math.floor(allguests.length / 2);
// add new guest at middle of index
allguests.splice(middleindex, 0, "hamza");
// print updated list
console.log("updated list of our guests");
// print particular guests with message
allguests.forEach(function (oneguest) { return console.log("hello ".concat(oneguest, ", would you like to dinner with me?")); });
// start shrinking
// informing them 
console.log("guys unfortunately , the dinner table wont arrive on time, so i can invivte only two guests on dinner");
// while loop to satisfy condition to remove guests until 2 names left
while (allguests.length > 2) {
    var removeGuest = allguests.pop();
    console.log("I am really sorry , ".concat(removeGuest, " i can not invite you on dinner"));
}
//  message to remaining guests 
allguests.forEach(function (lastTwo) { return console.log("luckily ".concat(lastTwo, " you are invited to dinner with me")); });
// empty list , removing last two guest
allguests.pop();
allguests.pop();
console.log("empty list ".concat(allguests));
