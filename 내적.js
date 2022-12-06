function solution(a, b) {
  let sum = 0;
  a.map((x, i) => sum += (x * b[i]))
  return sum
}

// 다른사람 풀이
function solution(a, b) {
  return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

function solution(a, b) {
  var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
  return answer;
}

function solution(a, b) {
  var sum = 0;
  for(var i=0; i<a.length; i++){
      sum += a[i]*b[i];
  }
  return sum;
}

var solution=(a,b)=>a.reduce((a,c,i) => a+c*b[i], 0);

function solution(a, b) {
  var answer = 0;
  a.forEach((cur, idx) => {
      answer += (cur * b[idx]);
  })
  return answer;
}

function solution(a, b) {
  return a.map((a,i)=> a*b[i]).reduce((acc,val)=>{
       return acc+val
   },0)
}

function solution(a, b) {
  return a.map((v,i) => v*b[i]).reduce((ac,cr) => ac + cr ,0);
}

function solution(a, b) {
  // 내적 구하여 리턴
  return [...Array(a.length)].map((e, i) => a[i]*b[i]).reduce((a, e) => a+e);
}

function solution(a, b) {
  return a.reduce((sum,v,idx) => {
     return sum = sum + (v*b[idx]) 
  },0);
}

function solution(a, b) {
  return a.reduce((acc,former,i) => acc+=former*b[i], 0)
}