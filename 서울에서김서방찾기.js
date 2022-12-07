function solution(seoul) {
  for (i = 0; i <= seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      return `김서방은 ${i}에 있다`
    }
  }
}
console.log(solution(["Jane", "Kim"]))

// 다른사람 풀이
function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}

const solution = (arr) => `김서방은 ${arr.findIndex(s => s === 'Kim')}에 있다`;

function findKim(seoul) {
  return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
}

function findKim(seoul){
  var idx = 0;
  //함수를 완성하세요

  var findSize = seoul.length;
  for(var i = 1; findSize > i; i++) {
    if(seoul[i] == "Kim") {
        idx = i;
    }
  }
  return "김서방은 " + idx + "에 있다";
}

function findKim(seoul){
  var idx = 0;
        for (var i = 0; i < seoul.length; i++){
       if (seoul[i] === 'Kim'){
         idx += i;
         break;
      }
      }

  return "김서방은 " + idx + "에 있다";
}

function solution(seoul) {
  let kim1 = seoul.indexOf("Kim");
  var answer = '김서방은 '+`${kim1}`+'에 있다';
  return answer
}

function findKim(seoul){
  return '김서방은 ' + seoul.indexOf('Kim') + '에 있다';
}

function findKim(seoul){
  var idx = 0;
  //함수를 완성하세요
    for(var item of seoul){

    if(item == 'Kim'){
            return "김서방은 " + idx + "에 있다";
    }
    idx++;
  }
}

function findKim(seoul){
  var idx = 0;
  //함수를 완성하세요
  seoul.forEach((name, index) => {
    if (name === 'Kim') 
      idx = index;
  });

  return "김서방은 " + idx + "에 있다";
}

function findKim(seoul){
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

function findKim(seoul){
  var idx = 0;
  //함수를 완성하세요

  return "김서방은 " + seoul.findIndex(function(element){return  element == "Kim"}) + "에 있다";
}