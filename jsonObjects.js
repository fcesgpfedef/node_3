const student = {
    nameOfStudent : 'Ram',
    age : 30,
    college : 'snist',
    branch : 'ECE'
}

console.log(typeof student);
console.log(student.age);
console.log(student.college);
console.log(student['branch']);

student.marks = 100;
console.log(student);

// deleting property from object
// How do you travel through object(for loop)