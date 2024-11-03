// *********************** Property descriptors ***************************

//Math.PI ki value change kar sakte hai , noooo

const descripter=Object.getOwnPropertyDescriptor(Math,'PI') //object ke hidden chizo ke baare me batati hai
descripter.writable=true
console.log(descripter)
descripter.value=4

console.log(Math.PI) 

// 4 nai ayega , kuunki ye properties writable ye sab bahut hi hardcoded hai c++ me 

//************************************************************************** */
const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{writable:false}); //name property ko writable false me kar dega

chai.name='hitesh'
console.log(chai.name) //nai hoga change 

//************************************************************************** */

//hame loop me access rokna hai kisi key ka to wo enumerable ko false karke hota hai

for(let key in chai){
    console.log(key)
} //name price isavailable ayega


Object.defineProperty(chai,'isAvailable',{enumerable:false}); //isAvailable property ko enumerable false me kar dega

for(let key in chai){
    console.log(key)
}//name price ayega
