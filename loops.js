const ageArray = [12, 9, 13, 14, 2, 45, 67];

// we use loops to travel inside the array
// for loop, while loop, do while loop etc.

for(let i =0;i < ageArray.length;i++) {
    ageArray[i] = ageArray[i] + 2;
    // console.log(ageArray[i]);
}


console.log('Transformed Array: ', ageArray);



 // Break in loops

 for(let i =0;i < ageArray.length;i++) {
    if (i === 3) {
        break;
    } else {
        console.log(ageArray[i]);
        continue;
    }
}

// Sample program on the concept of continue.