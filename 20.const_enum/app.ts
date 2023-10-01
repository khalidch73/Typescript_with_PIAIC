const enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;
console.log(c); // 1

const enum Color1 {Red, Green, Blue};
//var colorName: string = Color1[1]; //Not allowed with const enums to declare index
//console.log(colorName);

const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex); //4
// in const enum we able to print index by giving value but we are not able to print value by giving index
const enum Color3 {Red = 1, Green, Blue};//can assign values to all
var colorIndex1 = Color3["Blue"];
console.log(colorIndex1);// 3