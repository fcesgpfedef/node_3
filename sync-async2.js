console.log('1');
console.log('2');
console.log('3');

setTimeout(() => { // there is a deley here
    // this code will execute after the delay
    console.log('I am in side set timeout');
}, 3000);
console.log('4');

setTimeout(() => { // there is a deley here
    // this code will execute after the delay
    console.log('I am in side set timeout seconf function');
}, 4000);

// practise some 10 programs on the sync vs async concepts.
// what is callback and 5 programs on callback concept.