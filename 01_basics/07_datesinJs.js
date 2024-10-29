//Dates

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate)

// let myCreatedDate=new Date(2023,0,23) //month starts from zero in javascript
// let myCreatedDate=new Date(2023,0,23,5,3) //month starts from zero in javascript
// let myCreatedDate=new Date("2023-01-14")
let myCreatedDate=new Date("01-14-1970")
 
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp)  //1st jan 1970 se lekar abtak ka millisecond ki value hai ye

console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000000));

let newDate=new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
    weekday:"long",
})

