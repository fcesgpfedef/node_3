const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        const a =2 ;
        if (a === 2)
            resolve('Success');
        else
            reject('False');
    }, 2000)
});


promiseOne.then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});

// 5 programs on this concept.

// what is promise.all and a program on that concept.