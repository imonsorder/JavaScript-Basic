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
let arr = [1, 2, 3];
let result = arr.reduce(function (acc, el) {
  return (acc += el);
}, 0);

console.log(result);
