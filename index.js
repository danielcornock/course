// ----- Functions ----- //

// Declaring the function
function isNumberBiggerThanTen(number) {
  if (number > 10) {
    return true;
  } else {
    return false;
  }
}

// Calling the function and assigning the value to 'result'
var result = isNumberBiggerThanTen(15); // true;

// Using the result in an if statement
if (result == true) {
  console.log('The number is bigger than 10!');
} else {
  console.log('The number is not bigger than 10.');
}

// ----- Data types ----- //

var name = 'Daniel';
var age = 12;
var isGay = false;
var favouriteFoods = ['pizza', 'chocolate']; // This is a 'list' or an 'array' of strings;

// Creating an object

var daniel = {
  name: 'Daniel',
  age: 24,
  isGay: false,
  favouriteFoods: ['pizza', 'chocolate']
};

// Accessing the object

console.log('Daniel is ' + daniel.age + ' years old'); // Combining the age with strings to make a sentence.

// Objects can have objects inside of them

var ollie = {
  name: {
    firstName: 'Ollie',
    lastName: 'Stiles'
  },
  age: 26,
  isGay: false
};

// ----- Looping ----- //

var numbers = [5, 6, 7, 8];

// For loop

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // Returns 5 on the first loop, 6 on the next, and so on
}

// While loop

var i = 0;

while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

// For of loop ( we havent covered this yet )
// It is easier but I wanted to teach you the basics first so you can understand how it all works

for (var number of numbers) {
  console.log(number);
}

// ----- Combining it all together ----- //

// A simple function that console logs the age of the person
function logAgeOfPerson(person) {
  console.log(person.age);
}

// Declaring 3 separate objects, one for each of us
var ben = {
  name: 'Ben',
  age: 25,
  hasTidyRoom: false
};

var daniel = {
  name: 'Dan',
  age: 24,
  hasTidyRoom: true
};

var oliver = {
  name: 'Oliver',
  age: 26,
  hasTidyRoom: true
};

// Creating an array (list) out of the 3 of us
var housemates = [ben, dan, ollie];

// A 'for of' loop that will loop through the housemates and call the function that logs our age, only if the housemate has a tidy room
for (var housemate of housemates) {
  if (housemate.hasTidyRoom) {
    logAgeOfPerson(housemate);
  }
}

// The same thing in a for loop
for (var i = 0; i < housemates.length; i++) {
  if (housemates[i].hasTidyRoom) {
    logAgeOfPerson(housemate[i]);
  }
}

// The same thing in a while loop

var i = 0;

while (i < housemates.length) {
  if (housemates[i].hasTidyRoom) {
    logAgeOfPerson(housemate[i]);
  }

  i++;
}
