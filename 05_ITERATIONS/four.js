const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];
for (const num in programming) {
  console.log(programming[num]); //yahan jo num ayega wo key hoga , matlab array ki indexing hogi
}

const myMap = new Map();
myMap.set("ashish", "muskan");
myMap.set("ashu", "meera");
myMap.set("peachu", "goma");

for (const key in myMap) { //nothing will printed
   console.log(key)
}
