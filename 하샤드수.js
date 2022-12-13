function solution(x) {
  let num = String(x).split('')
  let sum = num.reduce((acc, cur, i) => acc += Number(num[i]), 0)
  return (x%sum===0) ? true : false
}
console.log(solution(107))

// 다른사람 풀이
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

function Harshad(n){
  var result ;
  var sum = 0;
  var arr = String(n).split('');
  for(var i=0; i<arr.length; i++) {
    sum += Number(arr[i]);
  }
  return n % sum == 0 ? true : false;
}

function Harshad(n){
  return !(n%(n+'').split('').reduce(function (i, sum) {return +sum + +i;}));
}

function solution(x) {
  return x%eval([...x.toString()].join("+")) ? false : true;
}

function solution(x,i=0,sum=0) {
  return String(x).length==i?x%sum==0:solution(x,i+1,sum + String(x)[i]*1);
}

function solution(x) {
    var a = 0;
    var s = (x+"").split("").map(Number);

    for(let i of s){
        a += i;
    }

    return x%a == 0 ? true : false;
}

function Harshad(n){
  var num = ""+n;
  var sum = 0;
  for(var i=0;i<num.length;i++){
    sum += num[i]*1;
  }
  return (n%sum==0) ? true : false;
}

function Harshad(n){
  var result ;
  //함수를 완성하세요

  var str = n.toString();
  var sum = parseInt(str[0]);
  for(let i=1 ; i< str.length ;i++){
    sum += parseInt(str[i]);
  }

  result = n % sum ? false : true
  return result;
}

function Harshad(n){
  var result;
  //함수를 완성하세요
  var ns = n + "", sum = 0;
  for (var i = 0; i < ns.length; i++) {
    sum += ns[i] * 1;
  }
    result = (n % sum == 0) ? true : false;

  return result;
}

function Harshad(n){
  var result = 0;  
  for(var i=0, len=n.toString().length; i<len; i++){
     result += parseInt(n.toString().slice(i,i+1));
  }    
  return (n % result) == 0;
}

function Harshad(n){
  var result = n / String(n).split('').reduce((a,b) => parseInt(a)+parseInt(b))
  return result == parseInt(result) 
}

function Harshad(n){
  var result=0;
  n = n.toString();
    for(var i = 0; i < n.length ; i++){
    result += Number(n[i]);
  }
  if(n%result==0){
    return true;
  }else{
    return false;
  }
}

function Harshad(n){
  var s = 0, n2 = n;
  for (var s = 0, m = n; m > 0; m = m / 10 >> 0) {
      s += m % 10;
  }
  return n % s == 0;
}
