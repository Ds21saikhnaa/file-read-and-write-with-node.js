const datas = {
  "alim": "алим",
  "ball": "бөмбөг",
  "show": "цас"
}

const test = (flag, word) => {
  for (let data in datas) {
    if (flag !== "mn") {
      if (word === data) return datas[data];
    } else {
      if (word == datas[data]) return data;
    }
  }
  return "ug oldsongu"
}

console.log(test('en', "baller"));
