//Object Literal and this keyword

//*********************************************************
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database ")
    console.log(`Username : ${this.username}`);
    //agar khaali username log karate to error deta , to tabhi this
    //ka use kiya upar , taaki usko current context ka pata chal sake ki kis username ki baat ho rahi hai

    console.log(this); //ye hai bhaiya asal me current context
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this) //global context me abhi kuch nai hai iska matlab ,yahi chiz agar browser me karoge to bahut kuch aata hai window ke andar

//*********************************************************

//new keyword aapka ek constructor function hai
// this allows to create multiple instances with same object literal

//step 1 : when new keyword is written ,empty object will be created known as instance
//step 2 : constructor function will be called due to new keyword 
//step 3 : ab ye constructor function saare arguements ko pack karta hai aur return kar deta hai
//step 4 : function ke andar mil jaate hai kisi variable se store kara lete hai basssss!!!

// const promiseOne = new Promise();
const date = new Date();
 
function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting=function(){
        console.log(`Hello, my name is ${this.username}`) 
    }    //LHS me variable hai , RHS me jo value parse karke de rahe , name same rakhte hai for good programming practise
    return this
    //maje ki baat- agar yahan this return nai karoge tab bhi same kaam hoga , implicitly return ho jata hai
}


// const userOne=User("ashish",8,true)
// const userTwo=User("Chai aur code",4,false)
// console.log(userOne) //yahan ek problem ho gayi userTwo ki values show hongi abhi bhi kyunki usne values override kar di , to new keyword ka istemal karo ji


const userOne=new User("ashish",8,true)
const userTwo=new User("Chai aur code",4,false)
console.log(userOne.constructor) //constructor khud hi ka reference hai
console.log(userTwo)