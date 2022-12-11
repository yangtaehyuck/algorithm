function solution(n) {
  return Number(String(n).split('').sort((a, b) => b - a).map(x=>Number(x)).join(''))
}
console.log(solution(118372))

// 다른사람 풀이
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}

function solution(n) {
  // 문자풀이
  return parseInt((n+"").split("").sort().reverse().join(""));
}

function solution(n) {
  var arrN = n.toString().split("");
  var answer = 0;
  var temp;
  for (let i = 1; i < arrN.length; i++) {
    if (arrN[i-1] < arrN[i]) {
      temp = arrN[i-1];
      arrN[i-1] = arrN[i];
      arrN[i] = temp;
      i = -1;
    }
  }
  answer = Number(arrN.join(""));
  return answer;
}

function solution(n) {
  var answer = 0;
  var array = n.toString().split("");
  array.sort(function(a,b){ return b-a;});
  answer = parseInt(array.join(""));
  return answer;
}

function solution(n) {
  return parseInt(n.toString().split('').sort((val1,val2) => val2-val1).join(''));
}

function solution(n) {
  var answer = parseInt((n + '').split('').sort().reverse().join(''), 10);
  return answer;
}

function solution(n) {
  return (n + '').split('').sort((a, b) => b - a).join('') * 1;
}

function solution(n) {
  var answer = 0;
  var arr = new Array();
  arr = (n+"").split("");
  arr.sort(function(a,b){
      return b-a;
  });
  answer = arr.join("")/1;
  return answer;
}

function solution(n) {
  return Number(n.toString().split("").sort((a,b) => b-a).join(""));
}

function solution(n) {
  return parseInt(n.toString().split("").sort((a,b) => b-a).join(""));
}

function solution(n) {
  var answer = 0;

  answer = +n.toString().split('').sort((a,b) => b-a).join('');

  return answer;
}

function solution(n) {
  return parseInt(n.toString().split('').sort(function(i,j) { return j - i}).join(''));
}