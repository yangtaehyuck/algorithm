function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3)
}
console.log(solution(45))

// 다른사람 풀이
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}

function solution(n) {
  n = n.toString(3).split('').reverse().join('')
  return parseInt(n, 3)
}

