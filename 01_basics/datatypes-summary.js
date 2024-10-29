//kis tarah se data ko memory me rakha jata hai aur access kiya jata hai , iss basis me do type hai
//primitive and non primitive

//7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const Anotherid=Symbol('123')

const bigNumber=293232032020329329392932n
console.log(bigNumber)

console.log(id===Anotherid) //false
//reference type(Non primitive)
//array, objects,functions

const heroes=["shaktiman","naagraj","doga"]
// heroes.pop()
console.log(heroes);

let myObj={
    name:"ashish",
    age:22,
}

const myFunction=function(){
    console.log("hello world")
}