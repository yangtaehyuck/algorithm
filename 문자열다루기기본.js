function solution(s) {
  if (s.length === 4 || s.length === 6) {
    if(s.match(/[a-zA-Z]/g)) {
      return 'false'
    } else {
      return 'true'
    }
  } else {
    return 'false'
  }
}
console.log(solution("a234"))

// 다른사람 풀이
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

function alpha_string46(s) {
  return s.length == 4 || s.length == 6 ? !isNaN(s) : false 
}

function alpha_string46(s){
  var result = false;
  if((s.length == 4 || s.length == 6) && /^[0-9]+$/.test(s)) {
    result = true;
  }

  return result;
}

function alpha_string46(s){
  var temp = parseInt(s);
  if(s==temp){
    return true;
  }
  return false;
}

function alpha_string46(s){
  var result;

  if (s.length === 4 || s.length === 6) {
    if (typeof Number(s) === "number"){
      result = true;
    } else {
            result = false;
    }
  } else { 
    result = false;
  }

  return result;
}

function alpha_string46(s){

  //var num = parseInt(s);
  // 함수를 완성하세요
    return ((s.length == 4 || s.length == 6) && isNaN(s)==false) ? true : false;
}

function solution(s) {
  if(s.length != 4 && s.length != 6) return false;
  for(var i = 0; i < s.length; i++) {
      if(isNaN(Number(s[i]))) return false;
  }
  return true;
}

function solution(s) {
  if(s*1+'' == s && Math.abs(5-s.length) === 1) return true;
  return false;
}

const solution = s => !!((s.length === 4 || s.length === 6) && !s.includes('e') && s - 0);