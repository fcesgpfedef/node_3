const student = {
    nameOfStudent : 'Ram',
    age : 30,
    college : 'snist',
    branch : 'ECE',
    address : {
        state : 'karnataka',
        city : 'Bangalore',
        pincode :"560064"
    }
}

console.log(student.address.city);
console.log(student.address['pincode']);

// practise 5 programs on objects as well
// mention array and functions as properties for few elements inside object.