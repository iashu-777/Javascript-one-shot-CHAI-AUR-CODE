const score = 400;
console.log(score);
const balance = new Number(100); //new se object bana rahe , fir constructor de diya , ab guarantee hai ki ye ek number
//hi hoga

console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(3)); //returns string

const hundeereds = 1000000;
console.log(hundeereds.toLocaleString("en-IN")); //to indian values

console.log(Number.EPSILON);

//++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(4, 3, 6, 7, 7));
console.log(Math.random()); //always zero to 1
console.log(Math.floor(Math.random() * 10) + 1); //+1 isliye kara kyunki math.flooe ya math.round kabhi 0 bhi return kar dega
//to usi se bachane ke liye +1 kiya


//generate random number between range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
