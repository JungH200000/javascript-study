/* ====14. 상수===== */
/**
 * ## 1. 상수(Constant)
 * 절대 변하지 않고, 항상 일정한 값으로,
   프로그래밍에서는 한 번 값을 할당하면 다시는 값을 변경(재할당)할 수 없는 변수를 말한다.
 * 
 * - 'let' 대신에 'const' 키워드를 사용하여 선언
 * - 초기화 필수 : 선언과 동시에 값을 반드시 할당해야 한다. 
 * - 한 번 할당된 값을 다시 변경하려고 하면 오류가 발생하여, 의도치 않은 값으 변경을 막을 수 있다.
 */

/**
 * ## 2. 상수 이름 짓기 (Naming Convention)
 * 'const'로 선언한 상수의 이름은 그 역할에 따라 두 가지 관례로 나뉜다.
 *
 * 1) 대문자와 스네이크 테이스('_') 사용
 * 원주율(PI), 최대 접속자 수(MAX_USERS)처럼
   프로그램 전체에서 고정된 값으로 사용하는 '진짜 상수'에 사용되는 관례
 * ex) const PI = 3.14; / const MAX_USERS = 1000;
 *
 * 2) 카멜 케이스(camelCase) 사용
 * 객체, 배열, 함수처럼 재할당할 일은 없지만, 내부의 값은 바뀔 수 있는 경우에 일반적으로 사용
 * ex) 밑에서 설명
 */

/**
 * ## 3. 'const'와 객체(Object)
 * 'const'는 변수의 '재할당'을 막는 것이지, 변수에 담긴 값 자체를 불변(immutable)로 만드는 것은 아니다.
 * 따라서 'const'로 선언된 객체의 property(내용물)는 변경할 수 있다.
 */
const userName = {
  name: '청아',
};
console.log(userName); // { name: '청아' }
// userName = { name: '현사' }; // Error 발생 : const 변수 자제를 재할당하는 것은 불가능
userName.name = '현사'; // 객체 내부의 property를 변경하는 것은 가능
console.log(userName); // { name: '현사' }

console.log('');

/** ## 4. 상수 사용 예시 코드 */
const PI = 3.14; // 원주율(상수)
let radius; // 반지름

// 원의 넓이를 계산하는 함수
function calculateCircleArea() {
  return radius * radius * PI;
}

// 반지름에 따른 원의 넓이를 출력하는 함수
function printCircleArea() {
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateCircleArea()}`;
}

radius = 4;
console.log(printCircleArea());

radius = 10;
console.log(printCircleArea());

radius = 29;
console.log(printCircleArea());
