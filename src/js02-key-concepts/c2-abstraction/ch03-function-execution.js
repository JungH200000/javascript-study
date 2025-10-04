/* =====03. 함수의 실행 순서====== */
/**
 * 기본적으로 코드는 위에서부터 아래로 한 줄씩, 왼쪽에서부터 오른쪽으로 읽으면서 진행된다.
 * 함수는 선언하고 끝나는 것이 아니라 함수를 호출했을 때 실행되기 때문에 
   함수의 실행 순서를 이해하고 있어야 함수를 좀 더 자유롭게 활용할 수 있다.
 */
function sayHello() {
  console.log('Hellow');
  console.log('Welcome to 경상북도');
}

console.log('함수 호출 전');
sayHello();
console.log('함수 호출 후');

console.log('');

function square(x) {
  return x * x;
}

console.log('함수 호출 전');
console.log(square(10)); // 100
console.log('함수 호출 후');

console.log('');

console.log('함수 호출 전');
console.log(square(5) + square(9)); // 25 + 81 = 106
console.log('함수 호출 후');
