const fs = require("fs");

//file-aa unshih
let data = fs.readFileSync('./text.txt',
  { encoding: 'utf8', flag: 'r' });
data = data.split('\n');
let arr = [];

//input der ashiglah
const onChange = (value) => {
  for (let word of data) {
    if (word.includes(value) === true) {
      arr.push(word.split('=')[0]);
    }
  }
  return arr.sort();
}
console.log(onChange("a"));

// ug haih

// const test = (check) => {
//   for (let word of data) {
//     if (word.split('=')[0] === check) return word.split('=')[1]
//   }
//   return "ug oldsongu"
// }

// const eng = "mom";
// const mon = "ээж";
// console.log(test("mom"));

//ug nemeh
// fs.appendFileSync('text.txt', `\n${eng}=${mon}`);
