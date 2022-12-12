function solution(num) {
  for (i=0; i<500; i++) {
    if (num%2===0) {
      num = num / 2
    } else if (num === 1) {
      return i
    } else {
      num = num * 3 + 1
    }
  }
  return -1
}
console.log(solution(6))

// 다른사람 풀이
function collatz(num) {
  var answer = 0;
  while(num !=1 && answer !=500){
      num%2==0 ? num = num/2 : num = num*3 +1;
  answer++;
}
  return num == 1 ? answer : -1;
}

function collatz(num,count = 0) {
  return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}

