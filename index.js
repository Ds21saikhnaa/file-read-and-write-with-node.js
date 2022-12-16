const fs = require("fs");
const readline = require('readline');
const colors = require('colors');

//file-aa unshih
let data = fs.readFileSync('./text.txt',
  { encoding: 'utf8', flag: 'r' });
data = data.split('\n');

let arr = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Энэ бол толь бичиг'.rainbow); // rainbow
const mirror = () => {
  console.log('0. Үг нэмэх');
  console.log('1. Үг хайх');
  console.log('2. Олон сонголтоос харах');
  console.log('3. Үг устгах');
  rl.question('дээрээх сонголтуудаас сонго(тоогоор):'.bgCyan, (num) => {
    if (num == 0) newWord();
    else if (num == 1) translate();
    else if (num == 2) onChange();
    else if (num == 3) deleteWord();
    else rl.close();;
  });
}

//shine ug nemeh
const newWord = () => {
  rl.question('англи үгээр оруул!!!(латинaaр):', (eng) => {
    rl.question('монгол үгээр оруул!!!(криллээр): ', (mon) => {
      fs.appendFileSync('text.txt', `\n${eng}=${mon}`);
      console.log('Амжилттай!'.rainbow); // rainbow
      rl.close();
    });
  });
}

//haih
const translate = () => {
  rl.question('англи үгээ оруул(латинaaр):', (eng) => {
    const result = test(eng);
    console.log(result.bgCyan);
    rl.close();
  });
}

rl.on('close', function () {
  console.log('\nBYE!!!'.rainbow);
  process.exit(0);
});


//input der ashiglah
const onChange = () => {
  rl.question('англи үгэнд орох үсгийг бич(латинaaр):', (letter) => {
    for (let word of data) {
      if (word.includes(letter) === true) {
        arr.push(`${word.split('=')[0]} = ${word.split('=')[1]}`);
      }
    }
    if (!arr.length) {
      console.log("олдсонгүй!!!".bgCyan);
      rl.close();
    } else {
      arr = arr.sort();
      for (let i = 0; i < arr.length; i++) console.log(arr[i].bgCyan, "\n");
      rl.close();
    }
  });
}

const deleteWord = () => {
  rl.question('ustagah ugee oruul(латинaaр):', (eng) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].split('=')[0] === eng) {
        data.splice(i, 1);
        try {
          fs.writeFileSync('text.txt', data[0]);
          for (let j = 1; j < data.length; j++) {
            fs.appendFileSync('text.txt', `\n${data[j]}`);
          }
          console.log("amjilttai".underline);
        } catch (err) {
          console.log(err);
        }
        rl.close();
      }
    }
    console.log("oldsongu".bgCyan);
    rl.close();
  });
}

const test = (check) => {
  for (let word of data) {
    if (word.split('=')[0] === check) return word.split('=')[1]
  }
  return "олдсонгүй!!!"
}

mirror();