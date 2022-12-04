function solution(a, b) {
  let sum = 0;
  if (a < b) {
    for (i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a === b) {
    sum = a;
  } else {
    for (i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum
}
console.log(solution(3, 3))

// 다른사람 풀이
function adder(a, b){
  var result = 0
  //함수를 완성하세요
  return (a+b)*(Math.abs(b-a)+1)/2;
}

function adder(a, b, s = 0){
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

function solution(a, b) {
  if(a===b) return a;
  let small = a < b ? a : b;
  let big = a > b ? a : b;
  for(let i = small+1; i < big+1; i++) 
      small += i;
  return small;
}

function adder(a, b){
  var result = 0
  var bigger = 0;
  //함수를 완성하세요
  if(a > b){
    for(var i = 0;i <= (a - b);i++){
      result += (b + i);
    }
  }
  else{
    for(var i = 0;i <= (b-a);i++){
      result += (a + i);
    }
  }
  return result;
}