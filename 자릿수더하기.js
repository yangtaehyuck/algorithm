function solution(n) {
  return String(n).split('').reduce((acc, cur) => acc += Number(cur), 0)
}
console.log(solution(123))

// 다른사람 풀이
function solution(n){
  return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

function solution(n)
{
    var a = (n + '').split('');
    var b = 0;
    for(var i = 0; i < a.length; ++i) {
        b += parseInt(a[i]);
    }
    return b;
    //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
}

function solution(n) {
  var arr = n.toString().split('');
  var sum = 0;
  arr.forEach(element => {
      sum += parseInt(element);
  });
  return sum;
}

function solution(n)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    String(n).split('').map(data => answer += parseInt(data));

    return answer;
}

const solution = n => n.toString().split("").reduce((acc, num)=> acc+parseInt(num,10), 0);

var solution = n => String(n).split('').reduce((a,c)=>a+c*1, 0);

function solution(n)
{
    var answer = 0;
    var m=String(n);

    for(var i=0; i<m.length; i++){
        answer+=parseInt(m[i]);
    }
    return answer;
}

function solution(n) {
  var answer = 0;
  n = n + "";
  for (var i = 0; i < n.length; i++) {
      answer += Number(n[i]);
  }
  return answer;
}

function solution(n){
  return n.toString().split('').reduce((prev,cur) => prev+parseInt(cur),0);
}

function solution(n)
{
    let numStr = n.toString();
    let answer = 0;
    for (let i=0; i<numStr.length; i++) {
        console.log(parseInt(numStr[i]))
        answer += parseInt(numStr[i]);
    }
    return answer;
}

function solution(n)
{
    var sum = 0;
    var ori_n =n;
    for(var i =0; i<ori_n.toString().length; i++){
        sum +=  n%10;
        n = parseInt(n/10);
    }
    return sum;
}

function solution(n)
{
    var answer = 0;
    var arr = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    arr = n.toString().split("").map(x =>parseInt(x));
    for(var i = 0;i<arr.length;i++){
        answer += arr[i];
    }
    return answer;
}

function solution(n)
{
    var answer = 0;

    var list = n.toString().split('');
    answer = list.reduce((prev, curr) => {
        return +prev + +curr
    }, answer)

    return answer;
}

function solution(n)
{
    var answer = 0;
    n.toString().split('').forEach(function(i){ answer += parseInt(i) });


    return answer;
}

function solution(n)
{
    return n.toString().split('').reduce(function(i,j) { return parseInt(i) + parseInt(j) }, 0);
}