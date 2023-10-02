// tuples are predefined Length and types of array 
let array6 = [1,2,"khalid",4, true] // its a simple array we makes it tuples 
let arrayTest = array6[2]
console.log(arrayTest); // khalid 
let array7:[number,number] = [1,2]
console.log(array7[1]);//2
//let array8:[number,number]= [1,2,"khalid"]// its will show error because we make a tuple and assign it number value.
let array8:[number,number,string] =[1,2,"khalid"]// its will show 3 values first 2 numbers and third string 
let array9:[number,number,string,boolean]=[1,2,"khalid",true]
console.log(array9[3]);// true
