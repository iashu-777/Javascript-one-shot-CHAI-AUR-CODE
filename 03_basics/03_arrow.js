const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`); //this keyword tab lagate hai , jab current context ko use kar rahe hote hai, hardcoded nai hai , change kar sakte hai
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this) //gives empty

// function chai(){
//     let username="hitesh"
//     console.log(this.username); //this aise function me use nai kar sakte ,object me karte hai
// }
// chai()

const chaii = () => {
  //function hatake parenthesis ke aage arrow laga do ,ban gaya arrow function
  let user = "hitesh";
  console.log(this.username);
};
// chaii()

const addTwo = (num1, num2) => {
  return num1 + num2; //this is explicit return
};

// const addTwoo = (num1, num2) => (num1 + num2) //aise bhi lik sakte hai ,, this is implicit return
const addTwoo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwoo(4, 9));

const myArray = [2, 5, 1, 2, 3];
// myArray.forEach(()=>{})  for each loop in arrow function 
