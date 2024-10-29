//array

const myArr=[0,1,2,3,4,5,true,"hello"]
console.log(myArr[1]);
const myHeroes=['shaktiman','junior g']
const myArr2=new Array(1,2,3,44)

//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(20) //not a good operation , bcz if 1000000 values ho array me to time consuming ho jayega 
// myArr.shift() //first element gayab


// console.log(myArr.includes(9))
// console.log(myArr.indexOf("hello"))

// const newArr=myArr.join('   ')
// console.log(myArr)
// console.log(newArr)

//--------------------------- slice ,splice ------------------------
//---------------difference between slice and splice---------------------------


console.log("A ",myArr)

const myn1=myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr)

const myn2=myArr.splice(1,3)
console.log(myn2)
console.log("C ",myArr)




//slice original me change nai karta , begin to end-1 tak bas print kar dega if copied to new string and print that string
//splice original me change kar deta hai , begin to end tak print bhi karta hai if copied to new string and print that string

