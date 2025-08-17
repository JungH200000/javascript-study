/* =====03. console.dir?===== */
// ch03-dom-log-dir.js

/**
 * `console.log`와 `console.dir`는 모두 개발자 도구 콘솔에 값을 출력하는 역할을 하지만,
 * 대상을 '어떻게' 보여주는지, 그리고 몇 가지 기능에서 중요한 차이를 보입니다.
 */

/**
 * ## 1. 가장 큰 차이: DOM 객체 출력 방식
 *
 * 두 메소드의 가장 극명한 차이는 DOM 요소를 출력할 때 나타납니다.
 *
 * - `console.log(domElement)`: 요소를 "HTML과 유사한 트리 구조"로 보여줍니다.
 * 구조를 파악하기에는 편리합니다.
 *
 * - `console.dir(domElement)`: 요소를 모든 속성(property)과 메소드를 포함한
 * "완전한 JavaScript 객체" 형태로 보여줍니다.
 */
const title = document.querySelector('#title');

console.log(title); // <h1 id="title">...</h1> 형태로 출력
console.dir(title); // h1 객체가 가진 모든 속성(style, id, className 등)과 메소드를 보여줌

/*
 * [현업 Tip] 왜 console.dir()를 사용할까요?
 *
 * JavaScript로 DOM을 조작한다는 것은 결국 객체의 속성을 바꾸거나 메서드를 호출하는 것입니다.
 * console.dir()는 해당 객체가 사용할 수 있는 모든 '도구(속성과 메서드)' 목록을
 * 전부 보여주기 때문에 개발자에게는 '정비 매뉴얼'과도 같습니다.
 * 어떤 기능을 사용할 수 있는지 정확히 파악하고 디버깅할 수 있어 현업에서 압도적으로 선호됩니다.
 *
 * 참고 문서:
 * - MDN Web Docs - console.dir(): https://developer.mozilla.org/ko/docs/Web/API/console/dir
 */

/**
 * ## 2. 일반 값 출력 방식의 미묘한 차이
 *
 * 원시 값(문자열, 숫자 등)을 출력할 때도 약간의 차이가 있습니다.
 * `console.dir`는 모든 값을 "객체의 속성을 보여주듯" 표현하려는 경향이 있습니다.
 * 예를 들어, 함수를 출력할 때 `dir`는 함수가 가진 내부 속성까지 펼쳐볼 수 있게 해줍니다.
 */
function func() {
  console.log('I love ChungAh!');
}
console.log(func); // parameter로 전달받은 값을 위주로 출력
console.dir(func); // 객체의 속성과 메소드를 좀 더 자세하게 출력

/**
 * ## 3. 인자(Argument) 개수의 차이
 *
 * - `console.log(arg1, arg2, ...)`: 여러 개의 인자를 쉼표로 구분하여 전달하면 "모든 값을 출력"합니다.
 * - `console.dir(arg1, arg2, ...)`: 여러 개의 인자를 전달해도 "첫 번째 값만 출력"합니다.
 */
console.log('첫번째', '두번째'); // '첫번째' '두번째' 모두 출력
console.dir('첫번째', '두번째'); // '첫번째'만 출력

/**
 * ## 최종 요약: 언제 무엇을 쓸까?
 *
 * - `console.log()`: 변수의 "값 자체"를 빠르게 확인하고 싶을 때, 여러 값을 한 번에 보고 싶을 때.
 * - `console.dir()`: "DOM 요소"가 어떤 속성과 기능을 가졌는지 "객체로서 자세히" 들여다보고 싶을 때.
 */
