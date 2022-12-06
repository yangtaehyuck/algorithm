function solution(absolutes, signs) {
  let Signs = []
  let sum = 0
  for (i = 0; i < signs.length; i++) {
    if (signs[i] === true) {
      Signs.push('+')
    } else {
      Signs.push('-')
    }
  }
  for (j = 0; j < absolutes.length; j++) {
    sum += Number(Signs[j] + absolutes[j])
  }
  return sum
}
console.log(solution([4,7,12], [true,false,true]));

// 다른사람 풀이
function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((v, i) => {
      if (signs[i]) {
          answer += v;
      } else {
          answer -= v;
      }
  })
  return answer;
}

function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
      signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
  }
  return answer;
}

var solution = (absolutes, signs) => absolutes.reduce((acc, x, i) => acc + (x * (signs[i] ? 1 : -1)), 0);

function solution(absolutes, signs) {
  return absolutes.reduce((acc, v, i) => acc += v * (signs[i] ? 1 : -1), 0)
}

function solution(absolutes, signs) {
  let result = 0;
    for(let i = 0; i < signs.length; i++){
      if(signs[i] === false){
        absolutes[i] = absolutes[i] * -1
      }
      result += absolutes[i]
    }
  return result;
}

function solution(absolutes, signs) {
  let val = [],
      answer = 0;
  absolutes.map((x, i) => {
      val.push(signs[i] ? x : -x)
  })
  val.map(x => {
      answer += x
  })
  return answer;
}

function solution(absolutes, signs) {
  return absolutes.reduce((acc, v, i) => acc += v * (signs[i] == true ? 1 : -1), 0);
}

function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, i) => (signs[i] === true ? acc + cur : acc + -cur),
    0
  );
}

function solution(absolutes, signs) {
  return absolutes.map((item,idx) => {
     return signs[idx] ? item : item * -1
   }).reduce((acc,curr) => {
     return acc + curr
   })
 }

 function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}