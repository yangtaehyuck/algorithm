function solution(phone_number) {
  let sum = '';
  if ((phone_number.length - 4) === 0) {
    for (let j = 0; j < phone_number.length; j++) {
      sum += phone_number[j]
    }
  } else {
    for (let i = 0; i < phone_number.length; i++) {
      if ((phone_number.length - sum.length) > 4) {
        sum += '*'
      } else {
        sum += phone_number[i]
      }
    }
  }
  return sum
}
console.log(solution("4444"))

//다른 사람 풀이
function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  //함수를 완성해주세요

  return result;
}

function hide_numbers(s){
  var result = ""
  //함수를 완성해주세요
  for(var i=0;i< s.length;i++){    
    result += i < s.length -4 ? "*" : s.charAt(i);
  }  
  return result;
}

function hide_numbers(s){
  var result = Array(s.length-3).join("*") 
  var cut = s.substring(s.length-4) 

  return result+cut;
}

function hide_numbers(s){
  var num = s.slice(s.length-4, s.length);
  var hide = '*'.repeat(s.length-4);
  var result = hide + num;
  return result;
}

function hide_numbers(s){
  return "*".repeat(s.length-4)+s.substr(-4,4);
}

function hide_numbers(s){
  var result = ""
  //함수를 완성해주세요
  //*******4444

  for(var i = 0; i<s.length-4;i++){
  result += "*";
  }
  result +=  s.substring(s.length-4,s.length+1);

  return result;
}

function hide_numbers(s){
  var result = Array(s.length-3).join("*") 
  var cut = s.substring(s.length-4) 

  return result+cut;
}