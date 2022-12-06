function solution(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}
console.log(solution([5, 5]))

// 다른 사람 풀이
function average(array){
  return array.reduce((a, b) => a + b) / array.length;
}

function average(array){
  //함수를 완성하세요

  var sum = 0;
  for(var i=0; i<array.length; i++)
    sum += array[i];
  return sum/array.length;
}

function average(array){
  var result = array.reduce(function(a,b){ return a + b; });
  return result/array.length;
}

function average(array){
  var sum = 0;
for(var value of array){
  sum += value;
}
return sum/array.length;
}

function average(array){
  return array.reduce(function(sum, cur) {
    sum += cur;
        return sum ;
  }, 0)/ array.length;
}
function solution(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}