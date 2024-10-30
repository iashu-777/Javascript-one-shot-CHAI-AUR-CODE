const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach((element) => {
  console.log(element);
});

//another way------------------------------------------

coding.forEach(function (val) {
  console.log(val);
});

//another way------------------------------------------

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

//-------------------------------------------------------------

coding.forEach((item, index, arr) => {
  console.log(`index: ${index}, item: ${item}, array: ${arr}`);
});

const myCoding = [
  { name: "js", level: "advanced" },
  { name: "ruby", level: "beginner" },
  { name: "java", level: "intermediate" },
  { name: "python", level: "advanced" },
  { name: "cpp", level: "beginner" },
];

myCoding.forEach((item) => {
  console.log(`name: ${item.name}, level: ${item.level}`); //with dot operator we have fetched all values
});

myCoding.forEach((item) => {
  console.log(item); //without dot operator we have fetched only object
});

myCoding.forEach((item, index) => {
  console.log(`index: ${index}, item: ${item.name}`); // with index
});
