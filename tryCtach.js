// Try catch is used to handle the exceptions

const arr = [1,2,3,4];

try {
    for (const i =0; i<arr.length;i++){
        console.log(arr[i]);
    }
}catch(err) {
    console.log('Exceltion Handled');
}


//Example 2 

const addArr = (arr) => {
    try {
        for (let i =0; i<arr.length;i++){
            arr[i] = arr[i] * arr[i];
        }
        return arr;
    } catch(err) { // this will be skipped if no exception occurs.
        console.log('Exception handled in new function');
        return 'Exception occured';
    }
    
}

console.log(addArr(undefined));
// console.log(addArr([1,2,3]));

// what is finally block and  2 programs on that.
// 5 programs on try catch finally blocks.