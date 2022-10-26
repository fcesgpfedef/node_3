class Parent {
    constructor(name){
        this.name = name;
    }

    methodParent() {
        return `Name of the parent is ${this.name}`
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    methodChild () {
        return ` name is ${this.name} and age is ${this.age}`;
    }
}

const childObj = new Child('Ram', 23);
console.log(childObj.methodChild());
console.log(childObj.methodParent());
console.log(childObj.name);

// 5 programs on this inheritance concept