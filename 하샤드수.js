function solution(x) {
  let num = String(x).split('')
  let sum = Number(num[0]) + Number(num[1])
  return (x%sum===0) ? true : false
}
console.log(solution(107))