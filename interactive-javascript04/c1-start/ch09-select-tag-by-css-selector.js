/* =====09. css 선택자로 태그 선택하기===== */
// ch09-select-tag-by-css-selector.js

/**
 * ID, 클래스, 태그 이름 등 각각의 메소드를 사용하는 대신,
 * `querySelector`와 `querySelectorAll`을 사용하면 
   "하나의 메소드로 모든 CSS 선택자 문법을 활용"할 수 있어 매우 편리하고 강력합니다.
 *
 * 현업에서는 DOM 요소를 선택할 때 이 두 가지 메소드를 표준적으로 사용합니다.
 */

/**
 * ## 1. `querySelector('CSS 선택자')` - 단일 요소 선택
 *
 * CSS 선택자에 해당하는 "첫 번째 요소 하나만" 선택합니다.
 * 만약 해당하는 요소가 없으면 `null`을 반환합니다.
 */
// ID로 선택
const myTag1 = document.querySelector('#myNumber');
// `getEelementById('myNumber')`와 동일
console.log(myTag1); // 0

// class로 선택
const myTag2 = document.querySelector('.color-btn');
// `getElementsByClassName('color-btn')[0]`과 동일
console.log(myTag2);

// 복합 선택자로 선택
const blueButtonINDiv = document.querySelector('div .color-btn.blue');
console.log(blueButtonINDiv);

/**
 * ## 2. `querySelectorAll('CSS 선택자')` - 모든 요소 선택
 *
 * CSS 선택자에 해당하는 "모든 요소"를 "NodeList" (유사 배열) 형태로 선택합니다.
 * 만약 해당하는 요소가 없으면 빈 `NodeList`를 반환합니다.
 */
const myTags = document.querySelectorAll('.color-btn');
// `getElementsByClassName('color-btn')`과 동일
console.log(myTags); // NodeList(8) [...]
