var allguests = ["ali", "maaz", "aryan"];
var notComing = allguests[2];
console.log(notComing, "is busy somwhere");
allguests.splice(2, 2, "faizan");
allguests.forEach(function (guest) { return console.log("hello ".concat(guest, " would you like to dinner with me?")); });
