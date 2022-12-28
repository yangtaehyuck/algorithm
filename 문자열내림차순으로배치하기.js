function solution(a, b) {
  let sum = 0;
  if (a < b) {
    for (i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a === b) {
    sum = a;
  } else {
    for (i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum
}