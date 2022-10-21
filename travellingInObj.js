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

for (const key in student) {
    if (student.hasOwnProperty.call(student, key)) {
        const element = student[key];
        // console.log(element);
    }
}

for (const key in student) {
    console.log(`Keys are : ${key}`);
    console.log(`Values are : ${student[key]}`);
}
