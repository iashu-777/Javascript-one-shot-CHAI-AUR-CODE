//singleton : jab bhi ham object ko literal ki tarah declare karte hai to singleton nai bnta hai

// Object.create //ye tarika hota hai constructor ke through object ko declare kara , isse singleton banta hai

//object literals

const mySym=Symbol("Key1")


const JsUser = {
  name: "hitesh", //ye name ko string ki tarah treat kar lega automatically
  age: 18,
  "full name":"Hitesh chaudhary",
  [mySym]:"mykey1",
  location: "jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"],
};
console.log(JsUser.email); // agar dot se access kar rahe to string ki tarah daalne ki jarurat nai hai
console.log(JsUser["email"]); //if sqaure bracket se access kar rahe to string lagake daalna padega

console.log(JsUser["full name"]) //full name ko dot se access nai kar sakte , error ayega
console.log(JsUser[mySym])

JsUser.email="hehe@gmailhuehue.com"
console.log(JsUser.email)

// Object.freeze(JsUser) //now after this no changes will propogate in JsUser , koi error nai ayega par change nai hoga kuch
JsUser.email="hehe@gmailhuehuehuehuehuehuheuheuhue.com"
console.log(JsUser)

JsUser.greetingTwo=function(){
    console.log(`hello bhaiya , juice pilado musambi ka mood off hai mera ,${this.name}`)
}
JsUser.greetingTwo()