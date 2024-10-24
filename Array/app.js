// let names = ["Shakib", "Tamim", "Musfiq"];
// let newNames = [];

// for (let i = 0; i < names.length; i++) {
//   newNames.push("Mr " + names[i]);
// }

// console.log(newNames);

// newNames[] e notun akta array kora holo sathe MR diye....

// let nums = [1, 2, 3, 4, 5, 6];
// let newNums = [];
// for (let i = 0; i < nums.length; i++) {
//   newNums.push(nums[i] * 2);
// }
// // newNums[] e notun akta arry kora holo agertar double number diye.....
// console.log(newNums);

// ============= Two dimensional Array===================================//

// let persons = [
//   ["Setu", 99, "JavaScript"],
//   ["Sumit Saha ", 105, "Java"],
//   ["Imon Sorder", 110, "Python"],
// ];

// // console.log(persons[0][0]);

// // console log er person [0][0] duita index ache. akhane 1st index 1st array dekhacche
// // 2nd index e 1st arry er 1st element ta dekhacce..

// // ========== nasted loop========///

// for (let row = 0; row < persons.length; row++) {
//   for (let col = 0; col < persons[row].length; col++) {
//     console.log(persons[row][col]);
//   }
// }

// let phones = [
//   ["iPhone 16 Pro Max", "Apple", 160000],
//   ["S24 Ultra", "Samsung", 110000],
//   ["Nothing Phone 2", "Nothing", 50000],
// ];

// for (let i = 0; i < phones.length; i++) {
//   for (let j = 0; j < phones[i].length; j++) {
//     console.log(phones[i][j]);
//   }
// }

// /// =========== Another Method==========
// let phones = [
//   ["iPhone 16 Pro Max", "Apple", 160000],
//   ["S24 Ultra", "Samsung", 110000],
//   ["Nothing Phone 2", "Nothing", 50000],
// ];

// for (phone of phones) {
//   for (singlePhoneData of phone) {
//     console.log(singlePhoneData);
//   }
// }
