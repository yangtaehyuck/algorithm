function solution(s){
  // let p = s.match(/p/ig).length /ig의 i는 대소문자 구별않고 검색 g는 모든 문자열 검색 /p는 문자 'p'를
  // let y = s.match(/y/ig).length
  let y = s.toLowerCase().split('').filter(i=>i==='y').length
  let p = s.toLowerCase().split('').filter(i=>i==='p').length
  return (p === y) ? true : false
}
console.log(solution("happyy"))

// 다른사람 풀이
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

function numPY(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}

function solution(s){

  return [...s.toLowerCase()].reduce((acc, cur) => {
      if(cur ==='p') return acc + 1;
      else if(cur ==='y') return acc - 1;
      return acc;
  }, 0) ? false : true;
}

function numPY(s){
  var result = true;
  s = s.toUpperCase();
  var num = 0;
  for(var i = 0; i < s.length; i++){
    if(s[i] === 'P') num++;
    if(s[i] === 'Y') num--;
  }
  result = (num === 0);

  return result;
}

var solution=s=>(s.match(/p/ig)||[]).length==(s.match(/y/ig)||[]).length

function numPY(s){
  var result = true;
  var numP = s.match(/p/ig);
  var numY = s.match(/y/ig);
  if((numP.length == numY.length) || numP.length == 0 && numY.length == 0) {
    result = true;
  }
  else {
    result = false;
  }
  return result;
}

function numPY(s){
  if(!s) return true;
  s = s.toUpperCase(s);
    var p = s.match(/P/g);
    var y = s.match(/Y/g);
  return p.length == y.length;
}

function numPY(s){
  var result = true;
  var pCnt = 0, yCnt = 0;
  //함수를 완성하세요
    for (var i = 0; i < s.length; ++i)
  {
    var posChar = s.charAt(i);
    if (posChar === 'p' || posChar === 'P')
      pCnt++;
    if (posChar === 'y' || posChar === 'Y')
      yCnt++;
  }
  result = (pCnt === yCnt);
  return result;
}

var solution=s=>s.replace(/y/gi,'').length==s.replace(/p/gi,'').length

function numPY(s){
  let pLength = s.match(new RegExp("p", "ig")).length,
      yLength = s.match(new RegExp("y", "ig")).length;

  if( pLength === yLength ){
        return true;
  } else {
    return false;
  }
}

function numPY(s){
  var s = s.toLowerCase();
  var pLeng = s.match(/p/g).length;
  var yLeng = s.match(/y/g).length;

  if(pLeng != yLeng) return false;

  return true;
}

function numPY(s){
  let p = 0 
  let y = 0
  s.split('').forEach(c => {
    if( c === 'p' || c === 'P'){
      p++
    } else if( c === 'y' || c ==='Y'){
      y++
    }
  })
  return p === y;
}

function numPY(s) {
  var result = true;
  var p_count = 0,
      y_count = 0
  for (let char of s) {
      if (char.toLowerCase() === 'p')
          p_count++;
      if (char.toLowerCase() === 'y')
          y_count++;
  }
  return p_count == y_count;
}

function numPY(s){
  var result = true;
  s = s.toUpperCase();
  var pNum = s.split('P').length;
  var yNum = s.split('Y').length;
  if (pNum != yNum)
    result = false;

  return result;
}

function numPY(s){
  const pCount = s.match(/p/ig) && s.match(/p/ig).length || 0
  const yCount = s.match(/y/ig) && s.match(/y/ig).length || 0
return (pCount === yCount) ? true : false
}

function numPY(s){
  let result = true;
  //함수를 완성하세요
  let lowS = s.toLowerCase();
  result = lowS.split('p').length === lowS.split('y').length ? true : false;

  return result;
}

function numPY(s){
  var p_chk = (s.match(/p/gi) != null) ? s.match(/p/gi).length : 0;
  var y_chk = (s.match(/y/gi) != null) ? s.match(/y/gi).length : 0;

  return (p_chk == y_chk) ? true : false;
}

function numPY(s){
  var result = true;
  //함수를 완성하세요
  var numP, numY;
  numP = (s.match(/p/gi)).length;
  numY = (s.match(/y/gi)).length;
  result = (numP === numY) ? true : false;

  return result;
}

function numPY(s){
  return (s=[...s.toLowerCase()],s.filter(v=>v==='p').length===s.filter(v=>v==='y').length);
}

function numPY(s){
  //함수를 완성하세요
    s = s.split('');
  var count = 0;
  s.forEach(item => {
    (item === 'y' || item === 'Y') && count++;
    (item === 'p' || item === 'P') && count--;
  });
  return count === 0 ? true : false;
}