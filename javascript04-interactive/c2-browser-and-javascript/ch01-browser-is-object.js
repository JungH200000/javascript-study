/* =====01. 브라우저도 객체다?===== */
// ch01-browser-is-object.js

/**
 * ## 1. `window` 객체란? 🌐
 *
 * `window` 객체는 JavaScript가 웹 브라우저와 소통하기 위한 창구입니다.
 * 웹 브라우저의 창(window) 자체를 나타내며, 창의 크기, 주소, 스크롤 위치 등
   다양한 정보에 접근하고 제어할 수 있는 기능(property와 메소드)을 가집니다.
 */
// 현재 창의 너비와 높이
console.log(window.innerWidth);
console.log(window.innerHeight);

// window.open(); // 창 열기
// window.close(); // 창 닫기

/**
 * ## 2. `window`는 최상위 글로벌 객체(Global Object, 전역 객체)
 *
 * `window` 객체는 브라우저 창을 제어하는 동시에, JavaScript 코드의 모든 것을 담는
 * **최상위 전역 객체**이기도 합니다.
 *
 * - `document`, `console` 등 DOM을 다루는 객체들도 사실은 `window`의 property입니다.
 * - `let`, `const`가 아닌 `var`로 선언한 전역 변수나 전역 함수는 `window` 객체의 property가 됩니다.
 */
var myVar = 'hello';
console.log(window.myVar); // hello
console.log(myVar); // hello

/**
 * ### `window` 접두사 생략
 *
 * 모든 글로벌 객체와 변수는 `window`에 속해있기 때문에, JavaScript는 편의상 `window.` 접두사를 생략할 수 있도록 허용합니다.
 *
 * - `console.log()`는 사실 `window.console.log()`입니다.
 * - `alert()`는 사실 `window.alert()`입니다.
 */

/**
 * 더 많은 `window` 객체의 기능이 궁금하다면 MDN 문서를 참고
 * https://developer.mozilla.org/ko/docs/Web/API/Window
 */
