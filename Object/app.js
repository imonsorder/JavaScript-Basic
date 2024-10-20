// let person = {
//   name: "Imon Sorder",
//   age: 25,
//   location: "Madaripur",
//   sayHello: function () {
//     console.log("Hello world");
//   },
// };

// Object property access korar way......

// console.log(person.location);
// console.log(person["age"]);
// let x = "name";
// console.log(person[x]); // property akta variable declear kore [x] aivabe acces kora jay..
// person.sayHello();

// person.phone = +8801789597337; // object er moddhe add korlam notun kore...

// console.log(person);

// ==============calculator==============

// let calculator = {
//   add: function (num1, num2) {
//     return num1 + num2;
//   },
//   minus: function (num1, num2) {
//     return num1 - num2;
//   },
//   multiply: function (num1, num2) {
//     return num1 * num2;
//   },
//   divide: function (num1, num2) {
//     return num1 / num2;
//   },
// };

// console.log(calculator.minus(10, 5));
/**
 * Amra caile object theke function nam ta kete diyeo korte pari.. same result dibe
 */
// let calculator = {
//   add(num1, num2) {
//     return num1 + num2;
//   },
//   minus(num1, num2) {
//     return num1 - num2;
//   },
//   multiply(num1, num2) {
//     return num1 * num2;
//   },
//   divide(num1, num2) {
//     return num1 / num2;
//   },
// };
// console.log(calculator.divide(100, 5));
let name = "Robin";
let per = {
  name: "Sumon",
  age: 26,
  interest: ["JS", "PHP", "Python"],
  address: {
    city: "Shariatpur",
    zip: "8000",
  },

  sayHello() {
    console.log("Hello " + this.name);
  },
};

per.sayHello();

// console.log(per.address.zip); // object er moddhe object k access korlam....
