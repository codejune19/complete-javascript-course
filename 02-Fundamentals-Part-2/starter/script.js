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



//INTRODUCTION TO OBJECTS
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    occupation: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);

// dot notation
console.log(jonas.lastname);

// bracket notation
console.log(jonas['lastname'])  // difference btw the string and the bracket notation is in the bracket, we can add and string we like or compute it from some operation.
const namekey = "Name"
console.log(jonas['first' + namekey ]);
console.log(jonas['last' + namekey]);

const interestIn = prompt('WHat do you want to know about Jonas? Choose between firstName, lastNAme, age, occupation and friends');
console.log(jonas[interestIn]);

if (jonas[interestIn]) {
    console.log(jonas[interestIn])
}
    else {
        console.log('Wrong request! Choose betwee  firstName, lastName, age, occupation and friends.')
    }



 const June = {
    firstname: 'june',
    lastname: 'blue',
    occupation: 'developer',
    age: 25,
    friends: 'precious'

};
console.log(June.age); 


jonas.location = "Portugal";
jonas['twitter'] = '@jonasschmedtman'

//Challenge
//"Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}.`)




// OBJECT METHODS
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    occupation: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function(birthYear) {
        return 2037 - birthYear
    }
}
//dot notation
console.log(jonas.calcAge(1999));
//bracket notation
console.log(jonas['calcAge'](1994));














//FUNCTIONS AGAIN

function logger (){
    console.log('My name is Jonas')
}

//calling, running or invoking a functiom

logger();
logger();
logger();

function fruitProcessor (apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

function furnitures (chairs, tables, blinds, refrigerator) {
    const decoration = `I need to buy ${chairs} chairs, ${tables} tables, ${blinds} blinds, and maybe ${refrigerator} refrigerator.`;
    return decoration;
}

const firstSittingRoom = furnitures (5, 2, 2, 1);
console.log(firstSittingRoom);


//FUNCTION CALLING FUNCTION

function cutFruitPieces (fruit){
    return fruit * 4;
}

function fruitProcessor (apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} appples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2,5));



//FUNCTION CODING CHALLENGE

const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
}

const dolphinsAvgScore = calcAverage(44, 23, 71);
const koalasAvgScore = calcAverage(65, 54, 49);
console.log(dolphinsAvgScore, koalasAvgScore);

const checkWinner = function (dolphinsAvg, koalasAvg) {
    if (dolphinsAvg >= 2 * koalasAvg) {
        console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`)
    }
    else if (koalasAvg >= 2 * dolphinsAvg) {
        console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg})`)
    }
    else {console.log('No team wins')}
}

checkWinner(dolphinsAvgScore,koalasAvgScore)
checkWinner(24, 68)
*/


//CODING CHALLENGE


//PERSONAL CHALLENGE ON OBJECT


/*const elliot = {
    firstname: 'Elliot',
    lastname: 'Akaweingha',
    middlename: 'Favour',
    occupation: 'Software engineer',
    number: '09094347069',
    girlfriend: {
        babeFirstname: 'june',
        babeLastname: 'Saiyou',
        occupation: 'secretary',
        friends: ['Precious', 'Esther', 'Loretta']
    }
}

console.log(elliot.girlfriend.babeFirstname)
console.log(elliot['girlfriend'].friends[2])



// run `node index.js` in the terminal

const elliot = {
    firstname: 'Elliot',
    lastname: 'Akaweingha',
    middlename: 'Favour',
    occupation: 'Software engineer',
    number: '09094347069',
    girlfriend: {
      babeFirstname: 'Monei',
      babeLastname: 'Elliot',
      occupation: 'secretary',
      friends: ['Chinenye', 'Tamara', 'Tochi'],
    },
  };
  
  const fullname = `${elliot.firstname} ${elliot.lastname}`;
  const occupation = `${elliot.occupation}`;
  const girlfriendName = elliot.girlfriend.babeFirstname;
  const noOfGirlfriendsFriends = elliot.girlfriend.friends.length;
  
  function girlfriendsFriends() {
    const names = elliot.girlfriend.friends;
    let sentence = '';
  
    if (names.length === 1) {
      return names[0];
    }
  
    names.forEach((name, i) => {
      if (i !== names.length - 1) {
        sentence += `${name}, `;
      } else {
        sentence += `and ${name}`;
      }
    });
  
    return sentence;
  }
  
  // console.log({
  //   fullname,
  //   occupation,
  //   girlfriendName,
  //   noOfGirlfriendsFriends,
  //   girlfriendsFriends: girlfriendsFriends(),
  // });
  //elliot akaweingha is a software engineer and the name of is girlfriend is june and she has 3 friends called precious, esther and loretta
  
  const mainSentence = `${fullname} is a ${occupation} and the name of his girlfriend is ${girlfriendName} and she has ${noOfGirlfriendsFriends} friends called ${girlfriendsFriends()}`;
  
  console.log({ mainSentence });
  

  const elliot = {
    firstname: 'Elliot',
    lastname: 'Akaweingha',
    middlename: 'Favour',
    occupation: 'Software engineer',
    number: '09094347069',
    girlfriend: {
      babeFirstname: 'Monei',
      babeLastname: 'Elliot',
      occupation: 'secretary',
      friends: ['Chinenye', 'Tamara', 'Tochi'],
    },
    hasDriversLicense: true,
    calcage: function(birthYear) {
        return 2037 - birthYear
    }
  };  

console.log(elliot.firstname);
console.log(elliot.girlfriend.occupation);
console.log(elliot.calcage(2009));
console.log(elliot['number'])
console.log(elliot['girlfriend']['friends'])
console.log(elliot['calcage'](1996))


//OBJECT METHOD CODING CHALLENGE


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    occupation: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

   calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};

console.log(jonas.calcAge())

const challenge = `${jonas.firstName} is a ${jonas.calcAge()}-years old ${jonas.occupation}, and he ${jonas.hasDriversLicense? 'has a' : 'does not have a'} driver's license`;

console.log(challenge);



//CODING CHALLENGE

const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}
console.log(mark.bmi)

const John = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
}


//LOOPS
const workOut = ['mini', 'toad', 'ice', 'ruller', 'tank']

for (i = 0; i < workOut.length; i++){
    console.log(workOut(i))
};


console.log('Lifting weights repetition 1p');
console.log('Lifting weights repetition 2e');
console.log('Lifting weights repetition 3r');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');
console.log('Lifting weights repetition 11');
console.log('Lifting weights repetition 12');
console.log('Lifting weights repetition 13');

for (let rep = 1; rep <= 23; rep++)
console.log(`Lifting weigths repetition ${rep} yaay!!`)
*/

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];
// for (let i = 0; i < jonas.length; i++ ) {
//     console.log(jonas[i])
// }
/*
const theNewArray = []
for (let i = -5; i < 5; i++){
    const currentName = jonas[i]
    console.log(i, currentName)
    if(currentName !== 'teacher' && i >= 0){
        theNewArray.push(currentName)
    }
}

console.log({theNewArray})
*/

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i]);

    types[i] = typeof jonas[i];
}

console.log(types)
