// const arr = ["Honda", "Tvs", "Hero", "Yamaha", "Suzuki"];

// let value = arr.length; // array er length janar jonno...
// array k string e convert korar jonno...
// let value = arr.join("*"); // arry k string convert kore and parametter e ja deya hobe ta diye string separate kore..
// let value = arr.pop(); // array er last element ta store hoye ache.. akhon jodi sei array ta log kore deki, dekhbo j last element ta array te nei..
// let value = arr.push("Runner"); // akhane push() method ta return kore array length... and oi array er last e notun r akti element add hoy..
// let value = arr.shift(); // array er 1st element ta store hoye ache.. akhon jodi sei array ta log kore deki, dekhbo j 1st element ta array te nei..
// let value = arr.unshift("Runner"); // akhane unshift() method ta return kore array length... and oi array er 1st e notun r akti element add hoy..
//console.log(value);

//==========================
// The length property provides an easy way to append a new element to an array:
//==========================
// let arr = ["Honda", "Tvs", "Hero", "Yamaha", "Suzuki"];
// arr[arr.length] = "Runner";
// console.log(arr);

// =============== reduce =================
/**
 * reduce er moddhe call back function e 4ta prametter
 * pass kora hoy.. (acc,el, idx, arr)
 * accumulator => sob gulo aksathe joro kora
 */
// let arr = [1, 2, 3];
// let result = arr.reduce(function (acc, el) {
//   return (acc += el);
// }, 0);

// console.log(result);

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// Get the total mass of all characters

// let totalMass = characters.reduce(function (acc, el) {
//   return (acc += Number(el.mass));
// }, 0);
// console.log(totalMass);

// Get the total height of all characters

// Get the total number of characters in all the character names
// let totalChar = characters.reduce(function (acc, el) {
//   return (acc += el.name.length);
// }, 0);
// console.log(totalChar);
//=============================
// let str = "Hello World";
// let newStr = str.split(" ").join(""); // charecter er majher space bad dite aituk kora jay....
// console.log(newStr);

// Get the total number of characters by eye color (hint. a map of eye color to count)
// let eyeColor = characters.reduce(function (acc, el) {
//   if (acc[el.eye_color]) {
//     acc[el.eye_color]++;
//   } else {
//     acc[el.eye_color] = 1;
//   }
//   return acc;
// }, {});

// console.log(eyeColor);

//================
/**
 * reduce only array te kaj kore
 * nice er string split er maddhome array te convirt kora holo
 * nice er 1st condition ta space soranor jonno use kora hoiche
 */
// let str = "Imon Sorder";
// let count = str.split("").reduce(function (acc, el) {
//   if (el != " ") {
//     if (acc[el]) {
//       acc[el]++;
//     } else {
//       acc[el] = 1;
//     }
//   }
//   return acc;
// }, {});
// console.log(count);
