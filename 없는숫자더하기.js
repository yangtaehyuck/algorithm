function solution(numbers) {
  let result = 45;
  for (const number of numbers) {
    result -= number;
  }
  return result;
}

// 다른 사람 풀이
function solution(numbers) {
    let sum = 0
    for(let i = 0 ; i < 10 ; i ++) {
        if(!numbers.includes(i)) {
            sum+=i
        }
    }
    return sum
}

function solution(numbers) {
  let number = [0,1,2,3,4,5,6,7,8,9];
  var answer = 0;

  number.forEach((idx) => {
      if(!numbers.includes(idx)) {
          answer += idx;
      }
  });

  return answer;
}

function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}