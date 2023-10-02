"use strict";
//Named function with Rest parameters
function buildName(firstName, ...remainigName) {
    return firstName + " " + remainigName.join(" ");
}
let developerName = buildName("khalid", "nawaz", "choudhary", "software developer.");
console.log(`developerName = ${developerName}`);
let developerName1 = buildName("waleed", "nawaz", "choudhary", "software developer.");
console.log(`developerName1 = ${developerName1}`);
let developerName2 = buildName("shoaib", "nawaz", "choudhary", "software developer.");
console.log(`developerName2 = ${developerName2}`);
//anonymous function type with Rest parameters
var buildNameFun = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
};
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
