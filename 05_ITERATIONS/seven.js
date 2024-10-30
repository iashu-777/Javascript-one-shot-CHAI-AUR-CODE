const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums=myNumbers.map((num)=>num+10) //this will add 10 in every value of myNumbers

//chaining= in chaining pehle ka result second chain me paass hota hai
const newNums = myNumbers
    .map((num) => num * 10)
    .map((num)=>num+1)
    .filter((num)=>num>=40)
console.log(newNums);
