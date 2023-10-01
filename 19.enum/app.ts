// enum is a basically set of value. when we declare a variable or function value will be included in enum
enum studentName {ali, saad, hamza, waleed }
let callStudentName = studentName.saad

console.log(callStudentName);// when we print the value included in enum its will show its index
console.log(studentName[2]);// when we print the index in enum array its will print the value from enum 

enum Color {Red, Green, Blue};//its context starts with 0
var c: Color = Color.Green;
console.log(c);// 1

enum Color1 {Red = 1, Green, Blue};// when we assign the value 1 then other values will be automatically assign 
var colorName: string = Color1[2];
console.log(colorName);// green

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);// 4

enum Color3 {Red = 1, Green = 2, Blue};
var colorIndex1 = Color3["Blue"];
console.log(colorIndex1); //3 

enum Color4 {Red = 3, Green  , Blue};
var colorIndex2 = Color4["Blue"];
console.log(colorIndex2);// 5

enum Color5 {Red = 3, Green  , Blue =10 };
var colorIndex3 = Color4["Green"];
console.log(colorIndex3);// 4