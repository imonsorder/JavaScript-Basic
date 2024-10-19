// function....

//..(1) function Sub(){
//     let num1 = 25;
//     let num2 = 30;
//     let sum = num1 + num2;
//     console.log(sum);
// }

// Sub();

// ...(2) function peramitar...

// function Sub(a,b){
//     let num1 = a;
//     let num2 = b;
//     let sum = num1 + num2;
//     console.log(sum);
// }

// Sub(6,6);

//.....(3) return method....

/**
 * Functioner value jodi kothao store korte cai se khetre
 * Return keyword use korte hobe
 */

// funtioner sathe jodi kichu korte cai tobe ata korte hobe...
// nice jemon functioner sathe 6 jog korchi

// function Sub(a,b){
//     let num1 = a;
//     let num2 = b;
//     let sum = num1 + num2;
//     return sum;
// }

// console.log(Sub(5,6)+6);

// function Expretion....

// const Sub = function (a,b){
//     let num1 = a;
//     let num2 = b;
//     let sum = num1 + num2;
//     console.log(sum);
// }

// Sub(6,6);

// object funtion...

// const addition ={
//     Sub: function (a,b){
//         let num1 = a;
//         let num2 = b;
//         let sum = num1 + num2;
//         console.log(sum);
//     }

// }
// addition.Sub(6,2);

// =========================
//     Function Expressions
// =========================

// this is an anonymous function and its called their variable name..

// const x = function (a, b) {
//   return a * b;
// };

// console.log(x); // parenthesis na dile console.log e function ta return korbe..

// console.log(x(3, 6));

// =========================
//     Arrow Function
// =========================

// let myFunction = (a, b) => a * b; //

// console.log(myFunction(5, 6));

// let x = () => 8;

// console.log(x() + 6);

// =========================
//     Function parameter
// =========================

// we can set function default parameter

//  1  //
// function myFunction(x, y) {
//   if (y === undefined) {
//     y = 2;
//   }
//   return x * y;
// }

// console.log(myFunction(5)); // if function have 1 parameter passed or undefined , then y default value 2;

// //  2  //

// function myFunction(x, y = 10) {
//   return x + y;
// }

// console.log(myFunction(10)); // If y is not passed or undefined, then y = 10:

// ========== =========================

// function add(num1, num2) {
//   return num1 + num2;
// }

// let result = add(add(5, 5), add(10, 10));
// console.log(result);
