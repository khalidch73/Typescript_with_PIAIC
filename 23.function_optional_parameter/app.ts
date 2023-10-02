//optional parameter with with named function 
function buildName(firstname:string, lastname?: string): string {
    if (lastname) {
        return (firstname+""+lastname)
    }else {
        return firstname
    }
} 
let a =buildName("khalid") //ok
let b =buildName("khalid", "nawaz") //ok
//let c =buildName("khalid","nawaz","ch")// error because only two parameter are assigned
console.log(`a = ${a}`);
console.log(`b = ${b}`);

function buildFullName(firstname:string, secondname?:string, lastname?: string): string {
    if (secondname) {
        return (firstname+""+secondname)
    }else if (lastname) {
        return (firstname+""+secondname+""+ lastname)
    }else{
        return firstname
    }
} 
let c =buildFullName("khalid")//ok
let d =buildFullName("khalid", "nawaz")//oky
let e =buildFullName("khalid", "nawaz", "choudhary")//oky ?
console.log(`c = ${c}`);
console.log(`d = ${d}`);
console.log(`e = ${e}`);
//anonymous function type with optional parameters
let buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let f =buildName1("khalid")//ok
let g =buildName1("khalid", "nawaz")//ok
console.log(`f = ${f}`);
console.log(`g = ${g}`);



