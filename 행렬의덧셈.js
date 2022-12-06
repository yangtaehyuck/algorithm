numbers.map((number, index, source) => {
  // number: 요소값
  // index: source에서 요소의 index
  // source: 순회하는 대상
  console.log(number);
  // 1
  console.log(index);
  // 0
  console.log(source);
  // [1]
  return number * number;
});

const arr1 = [[1],[2]]
const arr2 = [[3],[4]]
let sum = arr1.map((x, i) => x.map((y, j) => y + arr2[i][j]))
console.log(sum)

function solution(arr1, arr2) {
  return arr1.map((x, i)=> x.map((y, j) => y + arr2[i][j]))
}

// 다른 사람 풀이
function solution(arr1, arr2) {
  var answer = [[]];
  for (var i=0; i<arr1.length; i++){
      answer[i] =[];
      for(var j=0; j<arr1[i].length; j++){
          answer[i].push(arr1[i][j] + arr2[i][j]);
      }
  }
  return answer;
}

function sumMatrix(A,B){
  var answer;
answer = A.map((a, i) => {
  return a.map((val, idx) => {
      val += B[i][idx];
    return val;
  })
})

  return answer;
}

function sumMatrix(A,B){
  var answer = Array();
      for(var i = 0; i < A.length; i++){
    answer[i] = []; 
    for(var j = 0; j < A[i].length; j++){
        answer[i][j] = A[i][j] + B[i][j];             
    }
      }
  return answer;
}

function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((arr, i) => answer.push(arr.map((v, j) => v + arr2[i][j])));
  return answer;
}

function sumMatrix(A,B){
  var answer = Array();
  for(let i=0;i<A.length;i++){
      var newarr = A[i].map(function(item, index, A){
          return item + B[i][index];
      });
      answer[i] = newarr;
  }
}

function sumMatrix(A,B){
    var row = A.length, col = A[0].length;
    var answer = new Array();
  for (var i=0; i<row;i++) {
        var arr = []
        for (var j=0; j<col;j++) {
            arr.push(A[i][j] + B[i][j]);
      }
        answer.push(arr);
  }

    return answer;
}

function solution(arr1, arr2) {
  const answer = arr1.reduce((a, b, i) => (a[i] = b.reduce((q, w, j) => (q[j] += w, q), a[i]), a), arr2.slice());
  return answer;
}