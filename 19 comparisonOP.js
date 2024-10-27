// **Equality Operator (`==`)**: 

let num = '5';
let secnum = "5";
console.log(num == secnum); // Outputs: true

// *Strict Equality Operator (`===`)**: 

let num1 = 6;
let num2 = '6';
console.log(num1 === num2); // Output: false

// 3. **Inequality Operator (`!=`)**: 

let num3 = 5;
let num4 = '5';
console.log(num3!= num4); // Outputs: true


// 4. **Strict Inequality Operator (`!==`)**: 
let num5 = 5;
let num6 = '5';
console.log(num3!== num4);  // Outputs: true



// 5.  **Greater Than Operator (`>`)**: 

let x = 8;
let y = 7;
console.log(x>y); // Outputs: true


// 5.  **Lesser Than Operator (`>`)**: 

let x1 = 8;
let y1 = 7;
console.log(x1<=y1); // Outputs: false

// 6. **Comparing Different Data Types**: 

// - What happens if you compare a boolean value `true` with a number `1` using the equality operator (`==`)?

let boolVal = true;
console.log(boolVal == 1); // Outputs: true



// 7. **String Comparison**: 
    // - Compare two strings `"Hello"` and `"hello"` to see if they are equal. What will be the result, considering JavaScript's case sensitivity?

    let str1 = "Hello";
    let str2 = "hello";
    console.log(str1 == str2);   // Outputs: false



// 8.  **Comparing `null` and `undefined`**: 
    // - Write a function that compares `null` and `undefined` using both the equality (`==`) and strict equality (`===`) operators. What are the results, and why do they differ?

let val1 = null;
let val2 = undefined;
console.log (val1 == val2); // Outputs: true


// 9. 14. **Comparing Arrays**: 
    // - Compare two arrays `[1, 2, 3]` and `[1, 2, 3]` using both the equality (`==`) and strict equality (`===`) operators. What will the results be, and why?


let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3];
console.log(arr1 == arr2); // Outputs: false  /* i am not clear with this answer , i don't know  why is the false answer , whenever i will solve , i will share you */ 




// 10. **Falsy Values Comparison**: 
    // - Compare `0`, `""` (an empty string), and `false` using the equality operator (`==`). What are the results, and how does JavaScript handle falsy values in comparisons?

    console.log( 0 == "");  // Outputs: true