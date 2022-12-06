function solution(phone_number) {
  let sum = '';
  if ((phone_number.length - 4) === 0) {
    for (let j = 0; j < phone_number.length; j++) {
      sum += phone_number[j]
    }
  } else {
    for (let i = 0; i < phone_number.length; i++) {
      if ((phone_number.length - sum.length) > 4) {
        sum += '*'
      } else {
        sum += phone_number[i]
      }
    }
  }
  return sum
}