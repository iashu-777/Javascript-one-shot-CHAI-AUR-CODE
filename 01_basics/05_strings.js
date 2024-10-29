const name="hitesh"
const repoCOunt=50

// console.log(name+repoCOunt+"Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCOunt}`);

const gameName=new String('hitesh-hc-com')


console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newStringOne="     hitesh       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))
console.log(url.includes('%'))

console.log(gameName.split('-')); //array a jayega , we had split on the basis of dash
