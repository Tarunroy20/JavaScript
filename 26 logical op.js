// Logical operation -: ka matlab hota hain expression ko combine karna 

let num1 = 5;
let num2 = 3;
let num3 = 2
console.log(num1 > num2 && num2> num3) ;

let marks = 80;
if (marks >= 30 && marks >= 80){
    console.log("Pass")
    console.log("Garde : A")
}

let marks1 = 80;
if (marks1 >= 30 || marks1 >= 80){
    console.log("Pass")
    console.log("Garde : A")
}

let marks2 = 80;
if (!(marks2 < 30)){
    console.log("Pass")
    console.log("Garde : A")
}