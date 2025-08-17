/* =====12. for 반복문 실습 II===== */

// 방법1
function printTriangle(height) {
  let triangle = ''; // 빈 문자열

  for (let i = 1; i <= height; i++) {
    triangle += '*';
    console.log(triangle);
  }
}

console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);

console.log('');

// 방법2 - repeat 메서드 사용
// 문자열.repeat(반복할 횟수);
function printTriangle(height) {
  for (let i = 1; i <= height; i++) {
    console.log('*'.repeat(i));
  }
}

console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);
