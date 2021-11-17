//my age
const myAge = 30;

//earlyYears 
let earlyYears = 2;
earlyYears *= 10.5;

// later years
let laterYears = myAge - 2;

//number of dogyears accounted
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//my name in lowercase letters
let myName = 'Presh';
myName.toUpperCase();

//display my name and age in dogyears
console.log('My name is ' + myName + '. I am ' + myAge+ ' years old in human years which is '+ myAgeInDogYears+ ' years old in dog years.')
