/* =====08. return문과 console.log의 차이 실습 */
function first() {
  let message = '코드잇';

  return message;
}

function second() {
  let message = 'codeit';

  console.log(message);
}

function third() {
  let message = 'undefined';

  console.log(message);
}

console.log(first());
second();
console.log(third());
