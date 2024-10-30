//Immediately Invoked Function Expressions (IIFE)- global scope ke pollutiion se kayi baar problem hoti hai
//to usse bachne ke liye IIFE ka use kiya hai
// function chai(){
//     console.log('DB connected')
// }
// chai() //hame chaiye bina call kiye fatt se run ho jaye function

(function chai() { // named IIFE bolte hai
  console.log(`DB Connected`);
})(); //IIFE ko pata nai hota ki execution rokna kahan par hai , to semicolon laga dete hai

((name) => {  //IIFE use with arrow function , also known as unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');

