//*****************************************************************
//function ,function bhi hai aur object bhi hai
function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2; //using function as a object

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5);
console.log(multiplyBy5.prototype);

//*****************************************************************

function createUser(username, score) {
  this.username = username;
  this.score = score;
}
//injecting our own function (increment) in prototype
createUser.prototype.increment = function () {
  this.score++; //simple this ka matlab jisne bhi bulaya uske paas jao , chai bulayega to chai.score
  //tea bulayega tea.score
};
createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.increment();
chai.printMe();
tea.increment();
tea.printMe();

console.log(chai); //object

//***********************************************************

// now some notes on functionality of new keyword -(for sde level 2 level 3 interviews , rarely fo beginner)

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
