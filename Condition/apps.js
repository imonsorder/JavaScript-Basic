// javascript e protite if statement check kore....
// syntax: if(condition){}....
// if = 1st condition
// else if = 2nd conditon
//isNaN= jodi value number na hoy tobe aita use korte hobe

// let user = parseInt(prompt("Enter a number"));

// if (isNaN (user)){
//     document.write("You can write only number");
// }else if (user % 2 == 0){
//     document.write("The number is " + " "+ user +" "+"ODD")
// }else{
//     document.write("The number is" + " " + user + " " + "EVEN" )
// }

/**
 * Print 1-100; i
 * if i % 3 == 0 -> Fizz
 * if i % 5 == 0 -> Buzz
 * if i % 3 == 0 and i % 5 == 0 FizzBuzz
 * else i
 */

/**
 * if else condition prothom condition true peye gele
 * ar nice ki ache dekhe na
 * pura code thekei bar hoye jay
 * tai ordering ta thik rakhte hobe
 * && diye multiple value check kora proyojon hole seta first codition
 * e dite hobe
 */
// for (i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// let nums = [1, 5, 9, 11, 12, 16, 19, 35, 235, 240];
// let Even = [];
// let Odd = [];
// for (i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 == 0) {
//     Even.push(nums[i]);
//   } else {
//     Odd.push(nums[i]);
//   }
// }
// console.log(Even, Odd);

let persons = [
  ["Shakib", 39, "USA"],
  ["Tamim", 38, "CTG"],
  ["Sabbir", 28, "Dhaka"],
  ["Takin", 29, "Rajshahi"],
];

let ageLessThan30 = [];

for (i = 0; i < persons.length; i++) {
  if (persons[i][1] < 30) {
    ageLessThan30.push(persons[i]);
  }
}

console.log(ageLessThan30);
