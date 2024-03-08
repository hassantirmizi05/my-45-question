let allguests = ["ali","maaz","aryan"];
let notComing = allguests[2];
console.log(notComing,"is busy somwhere");
allguests.splice(2,2,"faizan");
allguests.forEach(guest => console.log(`hello ${guest} would you like to dinner with me?`));

