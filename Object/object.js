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

// Constructor Function
/**
 * function er name likht first word capital dibo
 * new -> {}
 */

// function CreatePerson(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     console.log("Hello");
//   };
// }

// let person1 = new CreatePerson("Imon", 25);
// let person2 = new CreatePerson("Sumon", 22);

// console.log(person1);

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
.