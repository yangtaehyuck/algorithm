function solution(participant, completion) {
  let sum = []
  participant = participant.sort()
  completion = completion.sort()
  for (i=0; i<participant.length; i++) {
    if (participant[i] !== completion[i]) {
      sum.push(participant[i])
    } 
  }
  return sum[0]
}
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))

// 다른사람 풀이
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for(let i in participant) {
      if(participant[i] !== completion[i]) return participant[i];
  }
}

function solution(participant, completion) {
  const map = new Map();

  for(let i = 0; i < participant.length; i++) {
      let a = participant[i], 
          b = completion[i];

      map.set(a, (map.get(a) || 0) + 1);
      map.set(b, (map.get(b) || 0) - 1);
  }

  for(let [k, v] of map) {
      if(v > 0) return k;
  }

  return 'nothing';
}

function solution(participant, completion) {
  var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
  return participant.find(t=> {
      if(dic[t])
          dic[t] = dic[t]-1;
      else 
          return true;
  });
}

function solution(participant, completion) {
  let ret = []
  let hashed = []
  participant.forEach(entry => {
      hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1        
  })
  completion.forEach(entry => {
      hashed[entry] = hashed[entry] - 1
  })

  for (var key in hashed) {
      if (hashed[key] >= 1) return key
  }
}

function solution(participant, completion) {
  var answer = '';
  participant.sort();
  completion.sort();
  for(var i = 0 ; i < participant.length; i++){
      if(participant[i] !== completion[i]){
          answer = participant[i];
          break;
      }
  }
  return answer;
}

var solution=(p, c)=>{
  p.sort()
  c.sort()
  for(i=0; i<p.length; i++){
    if(p[i]!=c[i]){
      return p[i]
    }
  }
}

function solution(participant, completion) {

  var sortedComp = completion.sort(),
      sortedPart = participant.sort();
  var name = sortedPart[sortedPart.length - 1];
for(var idx in sortedComp){
    if(sortedComp[idx] !== sortedPart[idx]){ name = sortedPart[idx];
              break;                             }
}
return name;
}

function solution(participant, completion) {
  let p = participant.sort();
  let c = completion.sort();
  for (let i=0; i<p.length; i++) {
      if (p[i] !== c[i]) {
          return p[i];
      }
  }
}

function solution(participant, completion) {
  var answer = '';
  participant.sort()
  completion.sort()

  answer = participant.find((e, i) => {
     if(e !== completion[i]){
         return e
     }
  })
  console.log("answer:: ", answer)
  return answer;
}

function solution(participant, completion) {
  let result = [];
   const newPart = participant.sort();
   const newComple = completion.sort();    
   for(let i=0; i<participant.length; i++){
       if(newPart[i]!==newComple[i]){
           return newPart[i]
       }
   }
}