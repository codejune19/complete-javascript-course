'use strict';
/*
function logger() {
    console.log('My name is Jonas')
}

// calling, running or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



//function declaration
function calAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calAge1(1991)
console.log(age1)
console.log(calAge1(1991));

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

//Arrow function
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991)
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));
console.log(yearsUntilRetirement(1980));



function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3))


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;


    if (retirement > 0) { return `${firstName} retires in ${retirement} years` } else {
        console.log(`${firstName} has alreasy retired!`)
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1970, 'Mike'))


//CODING CHALLENGE
const calcAverage = (a, b, c) => (a + b + c) / 3;

let dolphinsAvgScore = calcAverage(44, 23, 71);
let koalasAvgScore = calcAverage(65, 54, 49);
console.log(dolphinsAvgScore, koalasAvgScore);

function checkWinner(dolphinsAvgScore, koalasAvgScore) {
    if (dolphinsAvgScore >= 2 * koalasAvgScore) { console.log(`Dolphins win ${dolphinsAvgScore} points`) }
    else if (koalasAvgScore >= 2 * dolphinsAvgScore) { console.log(`Koalas win ${koalasAvgScore} points`) }
    else { console.log("Theres's no winner.") };

}

console.log(checkWinner(46, 56))
console.log(checkWinner(30, 73))

//test 2
dolphinsAvgScore = calcAverage(85, 54, 41);
koalasAvgScore = calcAverage(23, 34, 27);

console.log(dolphinsAvgScore, koalasAvgScore);
checkWinner(dolphinsAvgScore, koalasAvgScore)
//THE END



//ARRAYS

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const yearss = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1])

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

//EXERCISE
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');   //push functon add an element to the end of an array.
console.log(friends);
console.log(friends.length)

friends.unshift('John'); //unshift adds an element to the beginning of the array
console.log(friends);

//Removing elements
friends.pop();
const popped = friends.pop(); //this show you the element that was removed.
console.log(popped);
console.log(friends);

friends.shift() //shift function removes the first element.
console.log(friends);

console.log(friends.indexOf('Steven')) //indexOf show the index or position of an element on the array
console.log(friends.indexOf('Bob'))

console.log(friends.includes('Steven')) //this shows you true if the element is in the array or false if it id not
console.log(friends.includes('Bob'));

if (friends.includes('Peter')) { console.log('You have a friend called Peter') } else { console.log('Peter is not yet a friend to the group') };


//CODING CHALLENGE
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const testBill = calcTip(100);

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips)

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(total)
*/


//INTRODUCTION TO OBJECTS
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstname: 'Jonas',
    lastname: 'Schmedtmann',
    age: 2037 - 1991,
    occupation: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);

console.log(jonas.lastname);
console.log(jonas)