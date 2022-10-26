class Parent {
    name = 'Ram';

    static methodOne(){
        return `Name is ${this.name}`;
    }
}

class Child extends Parent{
    age = 34;

    methodTwo() {
        const resmetOne = Parent.methodOne();
        console.log(resmetOne);
        return `name is ${this.name} and age is ${this.age}`;
    }
}

const childObj = new Child();
console.log(childObj.methodTwo());

// Another 5 programs on this second approach of nheritance.