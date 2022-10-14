// Array is combination of various primitive datatypes

const age = 32;
const ageArray = [12, 13, 14, 45, 67];
console.log(typeof ageArray);

console.log(ageArray.length); // this gives the length of array
console.log(ageArray[1]);

ageArray.push(34);
console.log(ageArray);

ageArray.pop(); // removes the element in the last index position
console.log('Array after calling pop method',ageArray);
console.log(`Array after calling pop method's: ${ageArray}`);

ageArray.push('Raj');
console.log(`Array after pushing string: ${ageArray}`);

const cars = new Array('BMW', 'VOLVO', 'Maruthi'); // declaring array from Array class.
console.log(cars);

