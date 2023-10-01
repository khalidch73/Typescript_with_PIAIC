"use strict";
// enum is a basically set of value. when we declare a variable or function value will be included in enum
var studentName;
(function (studentName) {
    studentName[studentName["ali"] = 0] = "ali";
    studentName[studentName["saad"] = 1] = "saad";
    studentName[studentName["hamza"] = 2] = "hamza";
    studentName[studentName["waleed"] = 3] = "waleed";
})(studentName || (studentName = {}));
let callStudentName = studentName.saad;
// console.log(callStudentName);// when we print the value included in enum its will show its index
// console.log(studentName[2]);// when we print the index in enum array its will print the value from enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //its context starts with 0
var c = Color.Green;
console.log(c); // 1
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
; // when we assign the value 1 then other values will be automatically assign 
var colorName = Color1[2];
console.log(colorName); // green
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
; //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex); // 4
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
; //
var colorIndex1 = Color3["Blue"];
console.log(colorIndex1); //3 
var Color4;
(function (Color4) {
    Color4[Color4["Red"] = 3] = "Red";
    Color4[Color4["Green"] = 4] = "Green";
    Color4[Color4["Blue"] = 5] = "Blue";
})(Color4 || (Color4 = {}));
; //
var colorIndex2 = Color4["Blue"];
console.log(colorIndex2); // 5
var Color5;
(function (Color5) {
    Color5[Color5["Red"] = 3] = "Red";
    Color5[Color5["Green"] = 4] = "Green";
    Color5[Color5["Blue"] = 10] = "Blue";
})(Color5 || (Color5 = {}));
; //
var colorIndex3 = Color4["Green"];
console.log(colorIndex3); //
