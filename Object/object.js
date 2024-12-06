// Factory Function
/**
 * multiple object create korar jonno factory function use kora hoy.....
 */
// function createPerson(name, age) {
//   return {
//     name: name,
//     age: age,
//     sayHello() {
//       console.log("Hello");
//     },
//   };
// }

// let person1 = createPerson("Imon", 25);
// let person2 = createPerson("sumon", 24);

// console.log(person1);

// =================== Object  Constructor Function =================
/**
 * constructor function er nam er first letter capital dite hoy
 * jate bojha jay ata constructor function
 * In the constructor function, this has no value.
 * The value of this will become the new object when a new object is created.
 */

// function Person(first, last, age) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.fullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// const imon = new Person("Imon", "Sorder", 25);

// console.log(imon);

// class based Object

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function () {
//       console.log("hello");
//     };
//   }
// }

// let person1 = new Person("Imon", 20);

// rest prameter....
function add(num1, num2, ...nums) {
  console.log(nums);
}

add(20, 40, 30, 40);
