/*  Template Literals -> Template Literal ka matlab hota hain => baktick
 Expression ko string ke ander likhna. {`"This is Traun  " {a+b}` => baktick} */

//  Example for understand the problem , why do we use the template literal.

let pencilPrice = 10;
let eraser = 5;
// let output = "The total price is : " + (pencilPrice + eraser) + " Rupees.";
let output = `"The total price is :" ${pencilPrice+ eraser} "Rupees" `
console.log(output);
