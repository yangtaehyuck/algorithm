function solution(arr) {
  let sum = []
  arr.filter((x, i) => {if(x!==arr[i-1]) sum.push(arr[i])})
  return sum
}
console.log(solution([1,1,3,3,0,1,1]))

// 다른사람 풀이
