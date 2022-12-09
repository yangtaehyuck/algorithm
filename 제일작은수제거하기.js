function solution(arr) {
  let sum = Math.min(...arr)
  let num = arr.splice(0, 1)
  return num
}
console.log(solution([4,3,2,1]))