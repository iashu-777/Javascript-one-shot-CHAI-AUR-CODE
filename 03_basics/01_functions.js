function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("s");
  console.log("H");
}

// sayMyName()

function addTwoNumbers(number1,number2){
    return number1+number2
}

// console.log(addTwoNumbers(5,null))


function loginUserMessage(username="sam"){ //agar kuch pass nai hota hai to username sam hoga
    if(!username){
        console.log("please enter a username")
        return
    }
    else{
    return `${username} just logged in`
}}
console.log(loginUserMessage("hitesh"))


function calculatedCartPrice(...num1){ //yahan ye rest operator bol rahe hai, ek array me daaal dega
    let element=new Number
    for (let index = 0; index < num1.length; index++) {
         element = element+num1[index];
        
    }
    return element

}
console.log(calculatedCartPrice(200,400,500))


const user={
    username:"hitesh",
    prices:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)   
//if galat daal diya price ki jagah prices daal diya
handleObject({
    username:"sam",
    price:399
})


const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))

