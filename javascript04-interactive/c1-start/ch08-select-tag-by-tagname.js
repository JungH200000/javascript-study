/* =====08. 태그 이름으로 태그 선택하기===== */
// ch08-select-tag-by-tagname.js

/**
 * ## 1. `document.getElementsByTagName('태그이름')`
 *
 * `id`나 `class` 외에 태그 이름을 기준으로 요소를 선택할 수도 있습니다.
 * `getElementsByClassName`과 마찬가지로, 여러 개의 요소를 한 번에 선택합니다.
 */
// HTML 문서 내의 모든 <button> 태그를 선택
const btns = document.getElementsByTagName('button');
console.log(btns); // HTMLCollection(10) [...]

/**
 * ### 특징
 *
 * - 메소드 이름에 복수형 `Elements`가 포함된 것처럼, 결과는 항상 "HTMLCollection" (유사 배열)입니다.
 * - `getElementsByTagName('*')` 처럼 `*`를 사용하면 문서 내의 모든 태그를 선택할 수 있습니다.
 */
const allTags = document.getElementsByTagName('*');
console.log(allTags); // HTMLCollection(21) [...]

/**
 * ## 2. 사용을 권장하지 않는 이유
 *
 * `getElementsByTagName`은 잘 사용되지 않습니다.
 *
 * CSS에서 특정 태그 이름(`button`, `div` 등)에 직접 스타일을 적용하는 경우가 드물듯이,
 * JavaScript에서도 태그 이름으로 모든 요소를 한꺼번에 다루는 것은 매우 위험합니다.
 *
 * 의도치 않은 요소까지 함께 변경될 수 있어 예상치 못한 버그를 만들기 쉽기 때문입니다.
 */
