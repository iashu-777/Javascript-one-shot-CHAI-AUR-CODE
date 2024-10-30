// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach( (language) =>
//          {console.log(`I love coding in ${language}`)
//             return language
//     }    )

// console.log(values); //for each loop return kuch nai karta , undefined karta hai , to manually return lagate hai

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums=myNums.filter((num)=> {
//     return num>4   //explicit return, matlab agar curley braces ka use kar rahe to return statement jaruri hota hai

// })
const newNums = myNums.filter((num) => num > 4); //implicit return

//another way,using for each loop

const newNums1 = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums1.push(num);
  }
});

console.log(newNums); //filter se filter karte hai , koi number 4 se bahar hai
console.log(newNums1);

const books = [
  { title: "Book One", genre: "Fiction", publish: "1981", edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: "2005", edition: 2007 },
  { title: "Book Three", genre: "Fiction", publish: "1995", edition: 2011 },
  { title: "Book Four", genre: "Non-Fiction", publish: "2015", edition: 2013 },
  { title: "Book Five", genre: "Fiction", publish: "1985", edition: 2008 },
  { title: "Book Six", genre: "Non-Fiction", publish: "2010", edition: 2012 },
  { title: "Book Seven", genre: "Fiction", publish: "1990", edition: 2006 },
  { title: "Book Eight", genre: "Non-Fiction", publish: "2014", edition: 2016 },
  { title: "Book Nine", genre: "Fiction", publish: "1980", edition: 2002 },
];

// const userBooks=books.filter((bk)=>bk.genre==="Fiction")

const userBooks=books.filter((bk)=>bk.publish>=2000 && bk.genre==='Non-Fiction')
console.log(userBooks)