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

function Bike(brand, model, cc) {
  this.brand = brand;
  this.model = model;
  this.cc = cc;
}

const bikeName = new Bike("Honda", "Livo", 110);

console.log(bikeName);
