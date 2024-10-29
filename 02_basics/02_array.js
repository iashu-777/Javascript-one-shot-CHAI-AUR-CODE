const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1]);

// const allHeros=marvel_heroes.concat(dc_heroes) //merge two arrays
// console.log(allHeros)

const all_newHeros=[...marvel_heroes,...dc_heroes] //... matlab spread , glass liya tod diya bikhar gaya , fir samet liya
console.log(all_newHeros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=anotherArray.flat(Infinity) //depth daal do ki kitne andar tak flat karna hai

console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"})) //intersting , bcz key ko karna hai ki value ki arrray banani hai bataya nai

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) //saare set ka array bana diya

