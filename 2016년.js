function solution(a, b) {
  let date = new Date(`2016-${a}-${b}`);
  const Day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  return Day[date.getDay()]
}
console.log(solution(5, 24))

// 다른사람 풀이
function getDayName(a,b){
  var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}

function getDayName(a,b){
  return new Date(2016,a-1,b).toString().slice(0,3).toUpperCase();
}

var solution=(m,d)=>(new Date('2016-'+m+'-'+d)+'').split(' ')[0].toUpperCase()

var solution=(_,$)=>(new Date(2016,--_,$)+'').toUpperCase().slice(0, 3)

function solution(a, b) {
  var answer = '';
  const now = new Date(`2016-${a}-${b}`);
  answer = now.toString().split(" ")[0].toUpperCase();
  return answer;
}

function getDayName(a,b){
  let day  = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    date = new Date(`${a}/${b}/2016`).getDay();
  return day[date];
}

var getDayName = (a,b) => ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][new Date(`2016-${a}-${b}`).getDay()]

function getDayName(a,b){
  var answer = {0:"SUN", 1:"MON", 2: "TUE", 3:"WED", 4:"THU", 5:"FRI", 6:"SAT"};
var date = new Date("2016-"+a+"-"+b);

  return answer[date.getDay()];
}