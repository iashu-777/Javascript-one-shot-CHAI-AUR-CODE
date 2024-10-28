let score="33abc"
console.log(typeof score);
console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //it give NaN which means not a number. take care of this thing

let score1=null
console.log(typeof score1);
console.log(typeof score1);

let valueInNumber1=Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1); //it give 0

let score2=undefined
console.log(typeof score2);
console.log(typeof score2);

let valueInNumber2=Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2); //it give NaN which means not a number. take care of this thing

// "33"=>33
//"33abc"=>NaN
//true=>1;false=>0

let isLoggedIn=""

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=>true;0=>false
//""=>false
//"hitesh" =>true