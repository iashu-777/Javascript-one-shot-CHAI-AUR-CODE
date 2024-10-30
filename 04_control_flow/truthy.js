const userEmail="ashu@google.com" //if empty then maan liya jayega false , empty array ko true maana jayega

if(userEmail){
    console.log("got user email")
}
else{
    console.log("dont have user email")
}

//falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN inke alawa sab truthy hai

//truthy values
//"0",'false'," ",[],{},function(){}

const emptyObject={}
if (Object.keys(emptyObject).length===0) { //for checking object is empty or not ,, Object.keys(emptyObject) give array
    console.log("Object is empty")
}