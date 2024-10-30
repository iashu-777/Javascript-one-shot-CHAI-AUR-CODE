//for of

//["","",""]
//[{},{},{}]

const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

const greetings="hello world!"
for (const greet of greetings) {
    console.log(greet)
}

// Maps
//unique key value pair lenge
// Map { 'key1' => 'value1', 'key2' => 'value2' }

const myMap = new Map();
myMap.set("ashish", "muskan");
myMap.set("ashu", "meera");
myMap.set("peachu","goma")
console.log(myMap)

//forof on map
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
//forof on object

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// for (const [key, value] of person) { //aise ye person iterable nai hoga
//   console.log(`${key}: ${value}`);
// } 