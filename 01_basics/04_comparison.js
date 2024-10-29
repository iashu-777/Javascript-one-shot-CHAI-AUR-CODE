console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//the reason is that an equality check == and comparisons ><>=<= work differently
// comparisons convert null to a Number treating it as 0
// thats why null>=0 is true and null>0 is false

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
//gives always false

console.log("2" === 2); //ye strict check hai data type bhi check karta hai
