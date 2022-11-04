const addNumbers = (arr) => {
    return new Promise ((resolve, reject) => {
        let sum = 0;
        for (let i =0; i < arr.length;i++) {
            sum = arr[i]+ sum;
        }
        resolve(sum);
    })
}

const getResult = async () => {// All asyc functons are promises bydefault in behavious
    const res = await addNumbers([1,2,3]);
    const arr2 = null;
    console.log(arr2.sort());
    return res;
}

getResult().then((finalRes) => {
    console.log(finalRes);
}).catch((e) => [
    console.log(`Final catch block ${e}`)
]);


// 10 programs on this async await with exception handling.