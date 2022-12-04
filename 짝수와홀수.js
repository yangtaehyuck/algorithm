function solution(num) {
  let answer = "";
  num % 2 === 0 ? answer = 'Even' : answer = 'Odd';
  return answer;
}

// 다른사람 풀이
function evenOrOdd(num) {
  var result = ''
  // 함수를 완성하세요
  if(num%2 === 0){
    result = 'Even';
  } else {
    result = 'Odd';
  }
  return result
}

const isEven = n => n % 2 === 0;

function evenOrOdd(num) {
  if (isEven(num)) return "Even"
  else return "Odd"
}

function evenOrOdd(num) {
  var result = "Odd";
  // 함수를 완성하세요
  if (num%2 === 0) {
      result = "Even";
  }

  return result
}

function evenOrOdd(num) {
  var result = ''
  // 함수를 완성하세요

  result = (num % 2 === 1) ? 'Odd' : 'Even';

  return result
}