function solution(arr) {
  let sum = []
  let min = Math.min(...arr);
  arr.map(x=> {if(x!==min) sum.push(x)})
  return sum.length < 1 ? [-1] : sum
}
console.log(solution([6,8,4,3,2,1]))
console.log(solution([10]))
