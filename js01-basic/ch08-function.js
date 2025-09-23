/*=====08. 함수=====*/
//
/** 함수(function)는 특정 작업을 처리(수행)하는 명령어(코드) 묶음
 * 이때까지 사용했던 console.log도 JavaScript 개발자들이 미리 만들어 놓은 함수이다.
 * 추상화: 복잡한 내용은 함수 내부로 숨기고, 핵심은 함수 이름에 드러내는 방식으로 사용함
 */

/** 1. 함수 선언
 * 함수가 사용될 때 어떤 행동을 할지 정의하는 것을 말한다.
 * function 함수이름() {
 *   명령;
 *   명령;
 *   명령;
 *   ...
 * };
 */

function greetings() {
  console.log('Hi');
  console.log('안녕');
  console.log('こんにちは');
  console.log('你好');
  console.log('Guten Tag');
  console.log('Bonjour');
  console.log('Buongiorno');
}

/** 2. 함수 호출 */
greetings();
