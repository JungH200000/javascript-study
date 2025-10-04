/* =====01. 팩토리얼(factorial, 계승)===== */
// 1부터 어떤 양의 정수 n까지 정수를 모두 곱한 것으로, n!으로 나타낸다.

// 1. 팩토리얼 계산하기 : 6! = 1 * 2 * 3 * 4 * 5 * 6
function factorial(n) {
  let i = 1;
  let result = 1; // 0! = 1
  while (i <= n) {
    result = result * i;
    i++;
  }

  return result;
}

/* function factorial(n) {
  let result = 1; // 0! = 1
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
} */

console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));

console.log('');

// 2. 거꾸로 팩토리얼 계산하기 : 6! = 6 * 5 * 4 * 3 * 2 * 1
function factorialReverse(n) {
  let result = 1; // 0! = 1

  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

console.log(factorialReverse(12));
console.log(factorialReverse(6));
console.log(factorialReverse(3));
console.log(factorialReverse(0));
