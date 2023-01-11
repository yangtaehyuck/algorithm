function solution(n) {
  let sum = ''
  for (i=1; i<=n; i++) {
      if (i%2===1) {
          sum+='수'
      } else {
          sum+='박'
      }
  }
  return sum
}

// 다른사람 풀이
function waterMelon(n){
  var result = "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박"
  return result.substring(0,n);
}

const waterMelon = n => {
  return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}

const waterMelon = n => "수박".repeat(n).slice(0,n);

function waterMelon(n){
  var result = "수박";
   result = result.repeat(n-1).substring(0,n);
  //함수를 완성하세요

  return result;
}

function waterMelon(n){
  // n을 2로나눈 몫 만큼 곱하고 나머지가 있으면 '수' 더해라.
  return ("수박").repeat(n/2) + ((n%2) ? '수' : '');
}

function waterMelon(n){
  var result = "";
    for(var i = 0 ; i < n ; i++) {
        result += i % 2 == 0 ? "수" : "박";
  }
  return result;
}

function waterMelon(n){
  var result = "";
for(var i=1; i<=n; i++) {
  i % 2 === 1 ? result += "수" : result += "박"
}
return result;
}

function waterMelon(n){
  return [...Array(n).keys()].map(i => {
    if (i % 2 === 0) return "수";
    else return "박";
  }).join('');
}

function waterMelon(n){
  return "수박".repeat(Math.ceil(n)).substr(0,n);
}

function waterMelon(n){
  var result = ""
  for (var i=0;i<n;i++){
     if (i%2) result += '박';
     else result += '수';
  }
  return result;
}

function findKim(seoul){
  var idx = 0;
  //함수를 완성하세요