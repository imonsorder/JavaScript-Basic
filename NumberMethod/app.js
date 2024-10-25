//=======================================The Number() Method====================================================

//================================
// The Number() method can be used to convert JavaScript variables to numbers:
//================================
// let str = "5";
// let value = Number(str); // string k number e convert kore.. N boro hater hobe ata mone rakhte hobe..
// Number(true)  => Output will => 1
// Number(false)  => Output will => 0
// Number("10")  => Output will =>  10
// Number("  10")  => Output will => 10
// Number("10  ")  => Output will => 10
// Number(" 10  ")  => Output will => 10
// Number("10.33")  => Output will => 10.33
// Number("10,33")  => Output will => NaN  //If the number cannot be converted, NaN (Not a Number) is returned.
// Number("10 33")  => Output will => NaN
// Number("John")    => Output will => NaN
//=========================================================

//===========================================The parseInt() Method=============================
//================================
// parseInt() a string and returns a whole number. Spaces are allowed. Only the first number is returned:
// parseInt() method e desimal number ney na...
//================================
// let num = "250";
// let value = parseInt(num);
// parseInt("-10")    => Output will =>  -10
// parseInt("-10.33")    => Output will => -10
// parseInt("10")    => Output will => 10
// parseInt("10.33")    => Output will => 10
// parseInt("10 20 30")    => Output will => 10
// parseInt("10 years")    => Output will => 10
// parseInt("years 10")    => Output will => NaN //If the number cannot be converted, NaN (Not a Number) is returned.
// console.log(value);

//===========================================The parseFloat() Method=============================
//================================
// parseFloat() pa a string and returns a whole number. Spaces are allowed. Only the first number is returned:
// same as parseInt() but  parseFloat() method e desimal number ney...
//================================
