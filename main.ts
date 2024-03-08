// creating guest list array


let allguests = ["ali","maaz","aryan"];

// creating variable for unavailable guests

let notComing = allguests[2];

// print name of unavailable guest

console.log(notComing,"is busy somwhere");

// adding and removing specific guest

allguests.splice(2,2,"faizan");

// message for bigger table

console.log("good news! , we have found a bigger dinner table");

// add new guest at starting index of array

allguests.unshift("aashir");

// add new guest at end index of array

allguests.push("rehan");

// get middle index of array by average(middle value)

let middleindex : number = Math.floor(allguests.length / 2);

// add new guest at middle of index

allguests.splice(middleindex, 0 , "hamza");

// print updated list
console.log("updated list of our guests");

// print particular guests with message
allguests.forEach(oneguest => console.log(`hello ${oneguest}, would you like to dinner with me?`));
