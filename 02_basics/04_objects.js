// const tinderUser=new Object() its a singleton object

// console.log(tinderUser) //empty object

const tinderUser={} //its a non singleton object

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname:"hitesh",
            lastname:"chaidhary"
        }
    }
}


console.log(regularUser.fullname.userFullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2} //not a good practise , isse object ke andar object chala jayega , jaisa array me hota hai
const obj3=Object.assign({},obj1,obj2) //{}->isko target maante hai , baakiyon ko source ,,its a good practise
//agar curley braces nai lagaoge to object 1 me hi changes kar dega 

const objj3={...obj1,...obj2}
console.log(obj3)
console.log(objj3)

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)) //saari keys ko liya uska ek array bana diya
console.log(Object.values(tinderUser)) //saari values ko liya uska ek array bana diya
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //kya ye property available hai ki nai



const course={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor //har baar use karne pe ye bada likhna padega
//so object ko destructure kar rahe
const{courseInstructor:instructor}=course

console.log(instructor) 

const navbar=({company})=>{ //destructuring

}
navbar(company="hitesh")



//---------------- API in form of JSON ----------------------
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"

// } 


//------------------ API in form of arrays ----------------

[
    {},
    {},
    {}
]

