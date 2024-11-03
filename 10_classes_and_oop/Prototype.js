//challenge is , to make a truelength function which prints length of the string excluding trailing
//whitespaces

let myName = "hitesh     ";
console.log(myName.truelength);

//*****************************************

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

//ye karne se hamne 'hitesh' ko higher level hierarchy object pe pahuncha diya ,
//ab array string sabpe ye property chali gayi
Object.prototype.hitesh = function () {
  console.log("hitesh is present in all objects");
};
myHeroes.hitesh();
heroPower.hitesh();

Array.prototype.heyHitesh=function(){
    console.log("Hey Hitesh, I am in array");
}

myHeroes.heyHitesh();
// heroPower.heyHitesh(); //ye nai kar sakte , kyunki hamne array ke andar property lagayi hai to baaki
// //object pe iska effect nai ayega



//***************************************************
//Prototype inheritance
// do method aapas me chize share karein
const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher) 

let anotherUsername="chai aur code        "
String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`true length is: ${this.trim().length}`)
}
anotherUsername.truelength()
"hitesh".truelength()
"iceTEa".truelength()