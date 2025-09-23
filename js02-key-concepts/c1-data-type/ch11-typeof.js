/* =====11. typeof 연산자===== */
/** typeof 연산자
 * 사용하는 값의 자료형을 알려주는 연산자
 * 오른쪽에 있는 값의 자료형을 문자열로 반환하는 연산자
 */
console.log(typeof 1029); // number
console.log(typeof '안녕하세요'); // string
console.log(typeof true); // boolean

// 1) JavaScript는 소수와 정수를 따로 구분하지 않음
console.log(typeof 1.0); // number
console.log(typeof -5); // number

// 2) ``(백틱)으로 감싸진 문자는 string
console.log(typeof `배고파.`); // string

// 3) 변수
let name = '청아';
console.log(typeof name); // string

// 4) 함수
function greeting() {
  console.log('Hello');
}
console.log(typeof greeting); // function

// 5) typefo 연산자에 연산식을 넣으면??
console.log(typeof 'Hello ' + 'World!'); // stringWorld!
console.log(typeof 1024 * 1024); // NaN(Not a Number)

/**typeof 연산자는 사칙연산보다 우선 순위가 높기 때문에
 * typeof 연산자에 연산식을 넣을 때 괄호를 사용하는 것이 좋다.
 */
console.log(typeof ('Hello' + 'World!'));
console.log(typeof (1024 * 1024));
