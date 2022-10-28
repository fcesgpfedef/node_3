// callback is nothing but an anonymous function, it will be passed as a n arguement in general.

function add (a, b, callback) {
    setTimeout(() => {
        const res = a + b;
        callback(res);
    }, 1000)
}


add(2, 3, (result) => {
    console.log(result);
    if (result % 2 === 0){
        console.log('Even num');
    }else{
        console.log('Odd num');
    }
});

// without callbacks

function add (a, b ) {
    setTimeout(() => {
        const res = a + b;
        return res;
    }, 1000);
}


const result = add(2, 3);
console.log(result);
if (result % 2 === 0){
    console.log('Even num');
}else{
    console.log('Odd num');
}

