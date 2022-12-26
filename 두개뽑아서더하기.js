function solution(numbers) {
  let sum = []
  for (i = 0; i < numbers.length; i++) {
    for (j = (i+1); j < numbers.length; j++) {
      sum.push(numbers[i] + numbers[j])
    }
  }
  let result = sum
  return result.filter((x, i) => result.indexOf(x) === i).sort((a, b) => a - b)
}
console.log(solution([2,1,3,4,1]))