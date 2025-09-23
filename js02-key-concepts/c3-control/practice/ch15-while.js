/* =====15. while 반복문 실습 II===== */

// 정수 180의 약수를 모두 출력하고, 몇 개의 약수가 있는지 출력
let integer = 180;
let divisor = 1;
let divisorCount = 0;

while (integer >= divisor) {
  if (integer % divisor === 0) {
    console.log(divisor);
    divisorCount++;
  }
  divisor++;
}

console.log(`${integer}의 약수는 총 ${divisorCount}개입니다.`);
