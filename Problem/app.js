//====================
//     Problem 01  //
//====================
/**
 * Write a function `calculateStrikeRate` that takes in two parameters - the runs scored by a batsman and the total number of balls they faced. The function should return the batsman's strike rate, which is calculated as the number of runs scored per 100 balls faced.
For example, if the batsman scored 45 runs off 30 balls, their strike rate would be calculated as follows:
(45 / 30) * 100 = 150
The function should round the strike rate to two decimal places.
Example Input/Output:
- calculateStrikeRate(45, 30) should return 150.00
- calculateStrikeRate(100, 60) should return 166.67
- calculateStrikeRate(25, 40) should return 62.5
 */

// function calculateStrikeRate(runs, balls) {
//   let getstrikes = (runs / balls) * 100;
//   return getstrikes.toFixed(2);
// }
// console.log(calculateStrikeRate(100, 60));

//====================
//     Problem 02  //
//====================
/**
 * Have the function `CountPairs` take in a string of lowercase letters and digits. The function should return the count of all pairs of characters in the string that add up to an even number.
For example, if the input string is "a1b2c3d4e5f6", there are 3 pairs that add up to an even number: "b2", "d4", and "f6". So the function should return 3.
If there are no such pairs, the function should return 0.
Examples:
- `CountPairs("a1b2c3d4e5f6")` should return 3
- `CountPairs("x1y2z3")` should return 1
- `CountPairs("a2b2c2d2")` should return 4

 */
function CountPairs(strings) {
  let counter = 0;
  for (let i = 0; i < strings.length; i++) {
    if (!isNaN(strings[i + 1]) && strings[i + 1] % 2 === 0) {
      counter++;
    }
  }
  return counter;
}
let result = CountPairs("a1b2c3d4e5f6g7");

console.log(result);

//====================
//     Problem 03  //
//====================
/**
 * Write a function called `reverseString` that takes a string as input and returns the reverse of that string. Your function should not use the built-in `reverse()` method.
Example Input/Output:
- reverseString('hello') should return 'olleh'
- reverseString('racecar') should return 'racecar'
- reverseString('12345') should return '54321'
 */

//====================
//     Problem 03  //
//====================
/**
 * Write a function `mergeArrays` that takes in two arrays of integers and returns a new array that contains all the elements from both arrays, sorted in ascending order.
For example, if the two input arrays are:
[1, 3, 5, 7, 9]
[2, 4, 6, 8, 10]
The function should return the following array:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Example Input/Output:
- mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- mergeArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]

 */

function mergeArrays(arr1, arr2) {
  const merge = arr1.concat(arr2);

  merge.sort((a, b) => a - b);
  return merge;
}

console.log(mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));

// ####### Problem 1 #######
console.log("##### Problem 1 #####");
function calculateStrikeRate(runs, balls) {
  let strikeRate = ((runs / balls) * 100).toFixed(2);
  console.log(strikeRate);
  return strikeRate;
}
calculateStrikeRate(45, 30); // 150.00
calculateStrikeRate(100, 60); // 166.67
calculateStrikeRate(25, 40); // 62.50

// ####### Problem 2 #######
console.log("##### Problem 2 #####");
function CountPairs(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) input[i] % 2 == 0 ? count++ : count;
  console.log(count);
  return count;
}
CountPairs("a1b2c3d4e5f6"); // 3
CountPairs("x1y2z3"); // 1
CountPairs("a2b2c2d2"); // 4
CountPairs("a3c5d5e7"); // 0

// ####### Problem 3 #######
console.log("##### Problem 3 #####");
function reverseString(input) {
  let reversedElement = [];
  for (let i = 0; i < input.length; i++) reversedElement.unshift(input[i]);
  let reversedString = reversedElement.join("");
  console.log(reversedString);
  return reversedString;
}
reverseString("hello"); // olleh
reverseString("racecar"); // racecar
reverseString("12345"); // 54312

// ####### Problem 4 #######
console.log("##### Problem 4 #####");
function isPalindrome(input) {
  let reversedElement = [];
  for (let i = 0; i < input.length; i++) reversedElement.unshift(input[i]);
  let reversedString = reversedElement.join("");
  let palindrome = reversedString === input ? true : false;
  console.log(palindrome);
  return palindrome;
}
isPalindrome("racecar"); // true
isPalindrome("hello"); // false
isPalindrome("rotator"); // true
isPalindrome("peep"); // true

// ####### Problem 5 #######
console.log("##### Problem 5 #####");
function mergeArrays(array1, array2) {
  let mergedArray = array1.concat(array2).sort((a, b) => a - b);
  // mergedArray.sort(a, b => a - b);
  console.log(mergedArray);
  return mergedArray;
}
mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mergeArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]

// ####### Problem 6 #######
console.log("##### Problem 6 #####");
function findShortestWord(input) {
  let words = input.split(" ");
  let shortestWord = words[0];
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i].length < shortestWord.length) shortestWord = words[i];
  }
  console.log(shortestWord);
  return shortestWord;
}
findShortestWord("The quick brown fox jumps over the lazy dog"); // 'The'
findShortestWord("Hello world"); // 'Hello'
findShortestWord("Today is Monday"); // 'is'

// ####### Problem 7 #######
console.log("##### Problem 7 #####");
function removeDuplicates(input) {
  let uniqueArray = [];
  input.map((item) =>
    !uniqueArray.includes(item) ? uniqueArray.push(item) : null
  );
  console.log(uniqueArray);
  return uniqueArray;
}
removeDuplicates([
  "Zara",
  "Sadia",
  "Mahin",
  "Adnan",
  "Maisha",
  "Adnan",
  "Faiyaz",
]);

// ####### Problem 8 #######
console.log("##### Problem 8 #####");
let bookTitles = [];
let bookAuthors = [];
let numberOfCopies = [];
function createBookList(bookTitle, bookAuthor, numberOfCopie) {
  bookTitles.push(bookTitle);
  bookAuthors.push(bookAuthor);
  numberOfCopies.push(numberOfCopie);
}
function addCopies(bookTitle, numberOfCopie) {
  for (let i = 0; i < bookTitles.length; i++) {
    if (bookTitles[i] === bookTitle) numberOfCopies[i] += numberOfCopie;
  }
}
function sellBook(bookTitle, numberOfCopie) {
  for (let i = 0; i < bookTitles.length; i++) {
    if (bookTitles[i] === bookTitle) numberOfCopies[i] -= numberOfCopie;
  }
}
function getDetails() {
  let details = [];
  for (let i = 0; i < bookTitles.length; i++) {
    let singleDetail =
      "'" +
      bookTitles[i] +
      "' by '" +
      bookAuthors[i] +
      "' has '" +
      numberOfCopies[i] +
      "' copies";
    details.push(singleDetail);
  }
  console.log(details);
  return details;
}
// creating book list
createBookList("Bohubrihi", "Humayun Ahmed", 10);
createBookList("Sita", "Mojnu Ahmed", 15);
// adding copies
addCopies("Sita", 2);
addCopies("Bohubrihi", 3);
// selling book
sellBook("Sita", 5);
sellBook("Bohubrihi", 5);
// getting details
getDetails();

// ####### Problem 9 #######
console.log("##### Problem 9 #####");
function parseString(...input) {
  let sumOrString;
  let isString = input.find((word) => (isNaN(word) ? true : false));
  if (isString) {
    sumOrString = input.join(" ");
  } else {
    sumOrString = 0;
    input.forEach((num) => (sumOrString += Number(num)));
  }
  console.log(sumOrString);
  return sumOrString;
}
parseString("21", "24", "40"); // 85
parseString("Hello", "Alpha"); // Hello Alpha
parseString("Summer", "2022", "2023"); // Summer 2022

// ######### Problem 10 #######
console.log("##### Problem 10 #####");
function getPositiveNumbers(input) {
  let positiveNumbers = [];
  for (let i = 0; i < input.length; i++)
    input[i] > 0 ? positiveNumbers.push(input[i]) : null;
  console.log(positiveNumbers);
  return positiveNumbers;
}
getPositiveNumbers([2, -5, 10, -3, 8, -1, 0, 7]);

// ####### Problem 11 #######
console.log("##### Problem 11 #####");
function findMissingNumber(input) {
  let missingNumber = "No Missing Number";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== i + 1) {
      missingNumber = i + 1;
      break;
    }
  }
  console.log(missingNumber);
  return missingNumber;
}
findMissingNumber([1, 2, 3, 5, 6, 7, 8]);

// ####### Problem 12 #######
console.log("##### Problem 12 #####");
function getMaxProduct(input) {
  let max1 = 0;
  let max2 = 0;
  for (let i = 0; i < input.length; i++) {
    max1 = max1 < input[i] ? input[i] : max1;
    for (let j = 0; j < input.length; j++) {
      max2 = max1 > input[j] && max2 < input[j] ? input[j] : max2;
    }
  }
  let maxProduct = max1 * max2;
  console.log(maxProduct);
  return maxProduct;
}
getMaxProduct([2, 3, 5, 6, 7]);

// ####### Problem 13 #######
console.log("##### Problem 13 #####");
function findPrimeNumbers(input) {
  let primeNumbers = input.filter((num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
  console.log(primeNumbers);
  return primeNumbers;
}

findPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17, 19, 23, 29]);

// ####### Problem 14 #######
console.log("##### Problem 14 #####");
function printAsterisksTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = " ".repeat(rows - i) + "*".repeat(i * 2 - 1);
    console.log(row);
  }
}
printAsterisksTriangle(5);

// ####### Problem 15 #######
console.log("##### Problem 15 #####");

function printPalindromicTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let numbers = "";
    for (let j = 0; j < i; j++) numbers += i + j;
    for (let j = i - 2; j >= 0; j--) numbers += i + j;
    let row = " ".repeat(rows - i) + numbers;
    console.log(row);
  }
}
printPalindromicTriangle(5);

// ####### Problem 16 #######
console.log("##### Problem 16 #####");
// ## Task 1 Problem 16 ##
console.log("## Task 1 of Problem 16 ##");
function fibonacciSequence(n) {
  let sequence = [0, 1];
  for (let i = 2; i <= n - 1; i++)
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  console.log(sequence);
  return sequence;
}
fibonacciSequence(8);
fibonacciSequence(15);

// ## Task 2 Problem 16 ##
console.log("## Task 2 of Problem 16 ##");
function isFibonacciNumber(n) {
  let isFibonacci = false;
  let A = Math.sqrt(5 * (n * n) + 4);
  let B = Math.sqrt(5 * (n * n) - 4);
  if (A === Math.floor(A) || B === Math.floor(B)) isFibonacci = true;
  console.log(isFibonacci);
  return isFibonacci;
}
isFibonacciNumber(5);
isFibonacciNumber(8);
isFibonacciNumber(10);
isFibonacciNumber(21);

// ######### Problem 17 #######
console.log("##### Problem 17 #####");
function findMedian(input) {
  let median;
  let sortedInput = input.sort((a, b) => a - b);
  if (sortedInput.length % 2 === 0) {
    median =
      (sortedInput[sortedInput.length / 2 - 1] +
        sortedInput[sortedInput.length / 2]) /
      2;
  } else {
    median = sortedInput[(sortedInput.length + 1) / 2 - 1];
  }
  console.log(median);
  return median;
}
findMedian([5, 2, 8, 1, 9]);
findMedian([4, 2, 7, 1, 9, 10]);
findMedian([100, 87, 47, 56, 132, 154, 20, 38]);

// ####### Problem 18 #######
console.log("##### Problem 18 #####");
function countCharacter(input) {
  let counterObject = {};
  for (let i = 0; i < input.length; i++) {
    counterObject[input[i]]
      ? counterObject[input[i]]++
      : (counterObject[input[i]] = 1);
  }
  console.log(counterObject);
  return counterObject;
}
countCharacter("Hello");
countCharacter("Occurrences");
