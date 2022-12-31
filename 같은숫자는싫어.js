function solution(arr) {
  let sum = []
  arr.filter((x, i) => {if(x!==arr[i-1]) sum.push(arr[i])})
  return sum
}
