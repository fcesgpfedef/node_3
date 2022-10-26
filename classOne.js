class Sample {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    sampleMethod() {
        return `Addition of two numbers are : ${this.a + this.b}`
        // return ' I am  a sample method.'
    }
}

const obj = new Sample(22, 33);
const obj2 = new Sample(40, 50);
console.log(obj.sampleMethod());

// console.log(Sample.sampleMethod());

// Write a calculator program using class syntax.


