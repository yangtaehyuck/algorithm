function solution(n) {
  // if ((Math.sqrt(n) % 1 === 0) === false) {
  //   return -1
  // } else {
  //   return 
  // }
  return (Math.sqrt(n) % 1 === 0) ? Math.pow(((Math.sqrt(n))+1), 2) : -1
  // return Number.isInteger(n) ? Math.pow(((Math.sqrt(n))+1), 2) : -1
}
console.log(solution(121))

// 다른사람 풀이
function nextSqaure(n){
  var result = 0;
  var n = Math.sqrt(n);
  result = Number.isInteger(n) ? Math.pow(n+1, 2) : 'no';
  return result;
}

function nextSqaure(n){
  var root = Math.sqrt(n);
  var result = parseInt(root) - root === 0 ? (root + 1 ) * (root + 1) : "no";
  return result;
}

function nextSqaure(n){
  var result = 0;
    var k = Math.sqrt(n);

  if(k%1 == 0){
    result = (k+1)*(k+1);
  }else{
    result = "no";
  }
  return result;
}

function solution(n) {
  var answer = 0;
  for(let i=0, a=0; i<=n; i++){
    if(n/i===i){
      a = i + 1
      return a*a
    } else {
      answer = -1
    }
  }
  return answer;
}

function nextSqaure(n){
  var result = 0;
    if(Number.isInteger(Math.sqrt(n))){
    result= (Math.sqrt(n)+1) * (Math.sqrt(n)+1)
  } else {
    result = "no"
  }

  return result;
}