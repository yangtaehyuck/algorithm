function solution(arr) {
  let sum = []
  arr.filter((x, i) => {if(x!==arr[i-1]) sum.push(arr[i])})
  return sum
<<<<<<< HEAD
}
console.log(solution([1,1,3,3,0,1,1]))

// 다른사람 풀이
=======
}
>>>>>>> 9e2073ed5f32b878d8a763be193637315d1dbe4c
