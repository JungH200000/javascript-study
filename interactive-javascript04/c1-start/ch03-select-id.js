/* =====03. id로 태그 선택하기===== */
// ch03-select-id.js

/**
 * ## 1. DOM 조작의 첫걸음: 태그 선택
 *
 * JavaScript로 HTML 태그의 스타일이나 내용을 바꾸거나, 사용자의 클릭에 반응하게 하려면
 * 먼저 어떤 태그를 조작할지 "선택"하는 과정이 필요합니다.
 *
 * ## 2. `document` 객체 📄
 *
 * JavaScript 코드에서 `document`는 현재 웹 페이지의 HTML 문서 전체를 가리키는 객체입니다.
 * 웹 페이지의 제목, 주소, 그리고 모든 태그에 접근할 수 있는 시작점 역할을 합니다.
 *
 * ## 3. `document.getElementById('id이름')`
 *
 * `document` 객체가 가진 여러 메소드 중, `id` 속성을 이용해 HTML 요소(Element)를
    선택하는 가장 기본적인 메소드입니다.
 *
 * - 동작: parameter로 전달된 `id` 값을 가진 요소를 "단 하나" 찾아 반환합니다.
 * - 반환 값: ID를 찾은 경우: 해당 "HTML 요소 객체"
 *           ID를 찾지 못한 경우: `null`
 */

// `btns`라는 id를 가진 div 요소를 선택해서 myTag 상수에 할당
const myTag = document.getElementById('btns');

console.log(myTag); // chrome 개발자 도구 확인
// 포함하고 있는 다른 모든 태그들이 표시된다.

// 존재하지 않는 'hello' id를 선택하면 null이 반환됨
const myTag2 = document.getElementById('hello');
console.log(myTag2); // null
