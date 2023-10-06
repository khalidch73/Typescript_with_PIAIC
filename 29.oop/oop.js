"use strict";
//====================Object Oriented Programming with TypeScript=======================//
// oop is a technology used in typescript for better programming.
// for used opp technology interface of classes are used 
// syntax of class 
// example 1
class Class1 {
    constructor() {
        // properties 
        // pass initial value otherwise error show 
        //  x :number error
        this.x = 20;
        this.y = 40;
        //console.log(this); cant defined the value of this here.
    }
}
//console.log(`value of this = ${this}`); // The value of this will be showed undefined because here scop of this is node.
// the value of (this) changed according to the scop of this. value of this is not fixed.
let run = new Class1(); //new word performed 3 different function here 1. crate a new empty object like class1() 
//2. value of this assign .3 
//console.log(run);
let runNew = new Class1; // using this method we can make multiple objects. 
//console.log(runNew);    // in this class constructor are used automatically but not performed any function 
// every class has a constructor 
//console.log(runNew);
// in example 2 we used constructor function by default 
// why used constructor function? in example 1 we print 2 different objects but with same values. by using the constructor method we can changed the value of every object.
//example 2
class class2 {
    //syntax of constructor function 
    constructor(x, y) {
        // here  constructor not work bcz we dont put the value of this 
        this.score1 = x;
        this.score2 = y;
    }
}
let run1 = new class2(200, 300);
//console.log(run1);
let run2 = new class2(400, 600);
//console.log(run2);
let run3 = new class2(600, 900); // using this constructor function with this we can make multiple objects with different values.
//console.log(run3); 
//example 3 
class class3 {
    constructor() {
        this.score3 = 100;
        this.score4 = 300;
    }
}
let run4 = new class3();
//console.log(run4); 
// example 4
class square {
    constructor(diameter) {
        this.diameter = diameter;
    }
}
let result1 = new square(run4);
//console.log(result1);       
class square1 {
    constructor(diameter) {
        this.diameter = diameter;
    }
}
let result2 = new square1(result1);
//console.log(result2);       
// now we make a method in class and print 
class square2 {
    constructor(diameter) {
        this.diameter = diameter;
    }
}
let result3 = new square2(result2);
//console.log(result3);   
// we can use constructor and function in a class 
class human {
    constructor(name, age) {
        this.name = "Ali";
        this.age = 26;
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is a human and eating food.`);
    }
    eatKHALID() {
        console.log(`Khalid is a human and eating food.`);
    }
}
let result = new human("ALI", 26);
console.log(result);
result.eat(); // print eat function by this method
result.eatKHALID(); // 
