function solution(price, money, count) {
  let result = 0;
  let sum = 0;
  for (let i= 1; i <= count; i++) {
    sum += (price*i);
  }
  
  if ((money - sum) >= 0) {
    result = 0;
  } else {
    result = Math.abs(money - sum);
  }
  
  return result;
}
console.log(solution(3, 20 , 4));

// 다른 사람 풀이
function solution(price, money, count) {
  let answer = 0;

  for (let i = 1; i <= count; i++) {
      answer += price * i;
  }

  return answer > money ? answer - money : 0;
}

function solution(price, money, count) {

  const moneyToPay = (count * (count + 1))/2 * price;

  if (money >= moneyToPay) return 0; 

  return moneyToPay - money;
}

function solution(price, money, count) {
  const tmp = price * count * (count + 1) / 2 - money;
  return tmp > 0 ? tmp : 0;
}