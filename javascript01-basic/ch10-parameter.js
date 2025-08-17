/*=====10.파라미터=====*/
/** Parameter(매개변수)
 * 함수 내부에서 변수처럼 활용되어,
 * 함수를 정의할 때, 외부로부터 어떤 값을 받을지를 정하는 변수
 *
 * > 함수 선언
 * function 함수이름(parameter) {
 *   ...
 * }
 * > 함수 호출
 * 함수이름(값)
 * => 값이 함수의 parameter로 전달됨
 */

// 1. 예시(1)
// 함수 선언
function greetings(sentence) {
  console.log(sentence);
}

// 함수 호출
greetings('Hola');
/** 함수 호출할 때 'Hola'라는 문자열이
 * 함수 선언 부분에서 sentence라는 parameter로 전달되고,
 * 함수 내부에서는 'Hola'라는 값을 가진 변수처럼 활용되어,
 * console.log로 인해 'Hola'가 출력된다. */

// 2. 예시(2)
function welcome(name) {
  console.log('안녕하세요, ' + name + '님.');
}

welcome('청아');
welcome('지원');
welcome('현사');

// 3. 예시(3)
function printSquare(x) {
  console.log(x * x);
}

printSquare(2);
printSquare(5);
printSquare(12);
