function solution(s) {
    let answer = ''
    let S = Number(s.length);
    if (S % 2 === 0) {
      let a = S / 2
      answer = s[a-1]+ s[a]
    }
    if (S % 2 === 1) {
      let a = Math.floor(S/2)
      answer = s[a]
    }
    return answer
}
console.log(solution("ab"))

// 다른사람 풀이
function solution(s) {
  const mid = Math.floor(s.length/2);
  return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}

function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

const solution = s => {
  return s.length % 2 ? 
      s[parseInt(s.length/2)] :
      s.substr(s.length/2-1, 2);
}

function solution(s) {
  var answer = '';
  var length = s.length;

  if(length % 2 == 0){
      answer = s[length/2-1] + s[length/2]
  }else{
      answer = s[length/2-0.5]
  }

  return answer;
}

function solution(s) {
  var answer = '';
  if(s.length%2 == 0){        
      //짝수 : 가운데 두자리
      answer = s.substr(s.length/2-1,2);
  }else{
      //홀수
      answer = s.substr((s.length+1)/2-1,1);
  }
  return answer;
}