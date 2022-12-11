function solution(n) {
  let sum = String(n).split('')
  let num = []
  for (i=(sum.length - 1); i >= 0; i--) {
    num.push(Number(sum[i]))
  }
  return num
}
console.log(solution(7845))

// 다른사람 풀이
function solution(n) {
  return n.toString().split('').reverse().map(o => o = parseInt(o));
}

function solution(n) {
  return (n + '').split('').reverse().map(n => parseInt(n));
}

function solution(n) {
  var answer = [];
  n = n + "";
  for (var i = n.length - 1; i >= 0; i--) {
      answer.push(Number(n[i]));
  }
  return answer;
}

function solution(n) {
  return (n+"").split("").reverse().map(v => parseInt(v));
}

function solution(n) {
  return (n+"").split("").reverse().map($=>+$);
}

function solution(n) {
  let answer = (n + '').split('').reverse();
  return answer.map(item => parseInt(item));
}

function solution(n) {
  return n.toString().split('').reverse().map(val => parseInt(val));
}

function solution(n) {
    var answer = [];
    answer = n.toString().split('').reverse().map((v) => +v);
    return answer;
}

function solution(n) {    
  var str = "" + n;
  var answer = [];    
  answer = str.split("").map(function(i) { return parseInt(i) }).reverse();

  return answer;
}

function solution(n) {
  const newArr = [];
  const arr = (n + "").split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 1);
  }

  return newArr;
}

function solution(n) {
  var answer = n.toString().split("").map(Number);
  return answer.reverse();
}

function solution(n) {
  var answer = [];

  var str = n.toString();

  for(var i = 0; i < str.length; i++) {
      var slice = str.substr(i, 1) * 1;
      answer.unshift(slice);
  }

  return answer;
}