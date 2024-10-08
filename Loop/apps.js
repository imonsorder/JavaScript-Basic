// =========================
//      For Loop
// =========================

// EXAMPLE FOR LOOP

// 1 //

// let users = ["Imon","Rashid","Sobuj","Shohidul","Arian","Rahman"];

// let arrLength = users.length;

// for (let counter = 0; counter < arrLength;  counter++){
//     console.log(users[counter]);

// }

// 2 //

// let num = 10;

// for (let i = 1; i <= num; i++) {
//   if (i % 2 == 0) {
//     console.log("odd" + " " + i);
//   } else {
//     console.log("even");
//   }
// }

// 3 //

// const bikes = ["Honda", "Yamaha", "Suzuki", "Bajaj"];
// for (i = 1; i < bikes.length; i++) {
//   console.log(bikes[i]);
// }

// TIPS
// ami caile expression 1 loop er baire likhte pari

// let i = 0;
// for (; i < 10; i++) {
//   console.log(i);
// }

// ami caile expression 2 loop e nao dite pari... but loop ta off korar jonno akta break dite hobe...

// for (let i = 0; ; i++) {
//   if (i == 10) {
//     break;
//   } else {
//     console.log(i);
//   }
// }

// ami caile expression 3 ta block er moddheo dite pari
// for (let i = 0; i < 10; ) {
//   console.log(i);
//   i++;
// }

// =========================
//      For IN Loop
// =========================

// FOR IN LOOP USE only for object

// const person = { fname: "Imon", lname: "Sorder", age: "25" };

// for (let x in person) {
//   console.log(person[x]);
// }

// =========================
//      For of Loop
// =========================

// Array er jonno othoba itarable object er jnno for of loop use korte hoy..
// FOR IN loop index number return kore
// FOR OF loop value return kore..

// let car = ["BMW", "Audi", "Marcedis"];
// for (let x of car) {
//   console.log(x);
// }

// let users = ["Imon","Rashid","Sobuj","Shohidul","Arian","Rahman"];

// let arrLength = users.length;

// let counter = 0;

// while (counter < arrLength){
//     console.log(users[counter]);
//     counter++;
// }

// =========================
// do while Loop.....
// =========================

// let users = ["Imon", "Rashid", "Sobuj", "Shohidul", "Arian", "Rahman"];

// let arrLength = users.length;

// let counter = 0;

// do {
//   console.log(users[counter]);
//   counter++;
// } while (counter < arrLength);

// =========================
//  BREAK AND CONTINUE
// =========================

// BREAK
// loop e break keyword use korle sekhan theke loop stop hoye jay...

// for (let i = 0; i < 10; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

// continue
// loop e continue keyword use korle  condition jeta thake seta bad diye baki gulo caliye jay..

// for (let i = 0; i < 10; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }
