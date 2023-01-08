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