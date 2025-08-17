/* =====02. 배열 인덱싱 연습하기===== */

let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

for (let type of dataType) {
  // 배열일 때만 for (let 변수 of 배열이름) {}
  console.log(type);
}

console.log('');

/**
 * ## for...in 반복문을 배열에 사용하는 것은 피하기
 * for...in은 원래 객체의 property name을 순회하기 위해 만들어져서 배열에 사용하면 아래의 문제가 발생한다.
 * (1) 예상치 못한 순서로 동작
 * (2) 배열이 아닌 다른 property까지 순회에 포함될 수 있다.
 * (3) 성능이 느리다.
 */

for (let type in dataType) {
  console.log(dataType[type]);
}

console.log('');

/* for (let i = 0; i < 6; i++) {
  console.log(dataType[i]);
}

console.log('');

let i = 0;
while (i < 6) {
  console.log(dataType[i]);
  i++;
} */
