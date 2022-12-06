// numbers.filter((number, index, source) => {
//   // number: 요소값
//   // index: source에서 요소의 index
//   // source: 순회하는 대상
//   console.log(number);
//   // 1
//   console.log(index);
//   // 0
//   console.log(source);
//   // [1]
//   return number > 3;
// });

function solution(arr, divisor) {
  let sum = arr.filter(i => (i % divisor === 0))
  return sum.sort((a, b) => a - b);
}

function solution(arr, divisor) {
  var answer = arr.filter(v => v%divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

function solution(arr, divisor) {
  let sum = []
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) sum.push(arr[i])
  }
  if (sum[0] === undefined) {
    return [-1]
  } else {
    return sum.sort((a, b) => a - b)
  }
}
console.log(solution([5, 9, 7, 10], 5))
console.log(solution([3,2,6], 10))

//다른사람 풀이
function solution(arr, divisor) {
  var answer = [];
  arr.map((o) => {
      o % divisor === 0 && answer.push(o);
  })
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

function solution(arr, divisor) {
  var answer = [];

  for(var i = 0; i < arr.length; ++i) {
      if(arr[i] % divisor == 0) answer.push(arr[i]);
  }

  return answer.length < 1 ? [-1] : answer.sort((a, b) => a - b);
}

function solution(arr, divisor) {
  var answer = [];
  for (var i=0; i < arr.length; i ++) 
      if (arr[i] % divisor == 0)
          answer.push(arr[i]);

  if(answer.length == 0)
      answer = [-1];
  else
      answer = answer.sort(function(a,b){return a-b});
  return answer;
}

function solution(arr, divisor) {
  var answer = [];
  for(var i =0; i<arr.length; i++){
  if(arr[i]%divisor == 0){
      answer.push(arr[i]);
  }
  }
  if(answer.length ==0){
      return [-1];
  }
  return answer.sort((a,b) => a-b);
}

function solution(arr, divisor) {
  const answer = arr.filter(val => val%divisor === 0);
  if(answer[0] === undefined)return [-1];
  answer.sort((val1,val2) => val1-val2)
  return answer;
}

function solution(arr, divisor) {
  var answer = [];
  for(var i=0; i<arr.length; i++){
      if(arr[i] % divisor == 0){
          answer.push(arr[i]);
      }
  }
  if(answer.length > 0){
      answer.sort(function(a,b){ return a-b;})
      return answer;    
  }
  else{
      return [-1];
  }

}

function solution(arr, divisor) {
  var answer = [];
  arr.map(item => {
      if(!(item % divisor)) answer.push(item)
  });
  answer = answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
  return answer;
}

function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((a,b) => {
      if(a % divisor === 0) {
          return a
      }
  });
  return answer = answer.length === 0 ? [-1] : answer.sort(function(a,b) {return a-b});

}

function solution(arr, divisor) {
  var answer = arr.filter(v => v%divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}
