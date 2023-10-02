function add1(number1:any, number2:any) :any {
    return number1+number2
}
console.log(add1(3,4));
console.log(add1("khalid","nawaz"));
// in this case we will used function overloads to defined primitive data type.
// by makes a signature 
function add2(num1:number, num2:number) :number
function add2(num1:string, num2:string) :string

function add2(num1:any, num2:any):any {
    return num1+num2
}
console.log(add2(3,4));            // now add2 types will be show as a number 
console.log(add2("hello", "ali")); // this will be show string 
// function overloads can also be used in union type function

