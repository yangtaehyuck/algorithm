function solution(s) {
  let sum = s.split(' ')
  let num = []
  for (i=0; i<sum.length; i++) {
    for (j=0; j<sum[i].length; j++) {
      (j % 2 === 0) ? num.push(sum[i][j].toUpperCase()) : num.push(sum[i][j].toLowerCase())
    }
    if (i < sum.length - 1) {
      num.push(' ')
    }
  }
  return num.join('')
}
console.log(solution("try hello world"))

// 다른사람 풀이
function toWeirdCase(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}

function toWeirdCase(s){
  var result = "";

  for(var word of s.split(" ")) {
    for(var i in word) {
      result += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
    }
    result += " ";
  };

  return result.slice(0, -1);
}

function toWeirdCase(s) {
  return s.split(' ').map((a) => {
    return a.split('').map((b, i) => {
      return (i % 2 === 0) ? b.toUpperCase() : b.toLowerCase();
    }).join('');
  }).join(' ');
}

function solution(s) {
    let arr = s.split(" ");
    return arr.map(v => {
        let newStr="", num=0;
        for(let str of v){
            newStr += !(num%2)? str.toUpperCase(): str.toLowerCase();
            num++;
        }
        return newStr;
    }).join(" ");
}

function toWeirdCase(s){
  var str = '';
  var arr = s.split(' ');

  for(var i in arr){
      for(var j=0; j<arr[i].length; j++){
          var t = arr[i][j]; 
          str += (j % 2 === 0) ? t.toUpperCase() : t.toLowerCase();
      }
      str += ' ';
  }
  return str.slice(0, str.length-1);
}

const solution = s => s.split(" ").map(x => x.split('').map((c, i) => c = i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join("")).join(" ");

let solution= s=> s.split(' ').map(el => el.split('').map((e,i) => i%2?e.toLowerCase():e.toUpperCase()).join('')).join(' ');

function solution(s) {

  let strArr = s.split(' ');

  let wordTransArr = strArr.map( (word) => word.split('').map(

      (curr, index) => index % 2 == 0 ? word[index].toUpperCase() : word[index].toLowerCase()                                  
  ).join(""));

  return wordTransArr.join(" ");

}

function toWeirdCase(s){
  return s.split(' ').map((w) => w.split('').map((c,i) => i % 2 ? c.toLowerCase() : c.toUpperCase()).join('')).join(' ');
}