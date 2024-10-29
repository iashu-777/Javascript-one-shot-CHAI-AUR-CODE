// var c=300
let a=300
if(true){
    let a=10
    const b=20
    console.log("inner: ",a)
}

console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username="ashu"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if(true){
    const username ="ashu"
    if(username==='ashu'){
        const website=" youtube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)

//+++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++=
console.log(addone(5))
//technique 1
function addone(num){
    return num+1
}

//technique 2
// console.log(addTwo(5)) //yahan error a jayega upar wale me nai aayegi , this concept is hoisting
const addTwo=function(num){
    return num+2
}

