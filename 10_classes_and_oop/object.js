//*****************************************************************
//function ,function bhi hai aur object bhi hai 
function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power=2 //using function as a object

console.log(multiplyBy5(5));
console.log(multiplyBy5.power); 
console.log(multiplyBy5)
console.log(multiplyBy5.prototype);


//*****************************************************************

function createUser(username,score){
    this.username=username
    this.score=score
}