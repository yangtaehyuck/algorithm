function solution(x, n) {
  let sum = [];
  let num = 0;
  for (i = 1; i <= n; i++) {
    num += x
    sum.push(num)
  }
  return sum
}
console.log(solution(2, 5))

// 다른사람 풀이
function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
      answer.push(x*i)
  }
  return answer;
}

function solution(x, n) {
  return [...Array(n).keys()].map(v => (v + 1) * x);
}

function solution(x, n) {
  for (var i=0, arr=[]; i<n; i++) arr.push(x + x*i);
  return arr;
}

