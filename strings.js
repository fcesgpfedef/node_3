// length of a string
const nameOfPerson = 'Yaswanth';
console.log(nameOfPerson.length);
console.log(typeof nameOfPerson);

//escape character in string - I want to print one's status
console.log("one's status");
console.log(`one's status`);
console.log('one\'s \vstatus');

// Declaring string from objects.

const newName = new String('Yaswanth');
console.log(typeof newName);

console.log(nameOfPerson === newName);

// Extracting string parts
const str = 'Hyderabad     ';
console.log(str.slice(1,7));
console.log(str.substring(1,3));

// Write a program on the concept of Replacing string - replace I am from hyd with I am from Bang
// methods to convert al the letter to uppercase/lowercase
// program on concat method
// program on trim
// https://www.w3schools.com/js/js_string_search.asp
// https://www.w3schools.com/js/js_string_templates.asp
