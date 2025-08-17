/* =====05. DOM 트리 여행하기===== */
// ch05-inside-dom-tree.js

/**
 * DOM을 이용하면 JavaScript로 웹 문서를 자유롭게 다룰 수 있습니다.
 * 하지만 웹 문서를 수정하거나 새로은 콘텐츠를 추가/삭제하려면 다루고자 하는 노드를 잘 선택해야 합니다.
 */

/**
 * ## 1. DOM 트리 탐색이란?
 *
 * `querySelector` 같은 메소드로 특정 요소를 선택한 뒤,
 * 그 요소를 기준으로 부모, 자식, 형제 관계를 이용해 주변 요소로 이동하며 탐색하는 방법입니다.
 * 이를 통해 복잡한 HTML 구조에서도 원하는 요소에 유연하게 접근할 수 있습니다.
 */
const myTag = document.querySelector('#list-1');
console.log(myTag);

/**
 * ## 2. 요소 노드(Element Node) 간 이동하기
 *
 * 텍스트 노드나 주석 노드를 제외하고, "오직 HTML 태그(요소 노드) 사이만" 이동하고 싶을 때
 * 사용하는 안전하고 예측 가능한 방법입니다. (가장 추천)
 */
// 부모 요소 노드 접근
console.log('#list-1 부모 요소: ', myTag.parentElement);

// 형제 요소 노드 접근
console.log('#list-1 이전 형제 요소: ', myTag.previousElementSibling); // h2#title-1
console.log('#list-1 다음 형제 요소: ', myTag.nextElementSibling); // h2#title-2

// 자식 요소 노드 접근
console.log(myTag.children); // HTMLCollection(모든 자식 li 태그)
console.log(myTag.children[1]);
console.log(myTag.firstElementChild); // 첫 번째 자식 li 태그
console.log(myTag.lastElementChild); // 마지막 자식 li 태그

// 조합
console.log(myTag.parentElement.nextElementSibling); // <script...></script>

/**
 * ## 3. 모든 노드(Node) 간 이동하기 (주의! ⚠️)
 *
 * 요소 노드뿐만 아니라 텍스트 노드, 주석 노드 등 모든 종류의 노드를 포함하여 탐색합니다.
 *
 * ### 왜 주의해야 할까? - '공백 텍스트 노드'
 *
 * HTML 코드에서 가독성을 위해 사용하는 "줄바꿈이나 들여쓰기는 DOM 트리에서 '공백 텍스트 노드'로 취급"됩니다.
 *
 * <ul>
 *   <li>Ragdoll</li>
 * </ul>
 *
 * 위 코드에서 `<ul>`과 `<li>` 사이의 줄바꿈과 공백 때문에, `<ul>`의 첫 번째 자식은 `<li>` 요소가 아닌
 * '공백 텍스트 노드'가 됩니다.
 *
 * 따라서 `firstChild`, `nextSibling` 같은 모든 노드 탐색 프로퍼티를 사용하면
 * 이런 눈에 보이지 않는 텍스트 노드가 선택될 수 있어, 코드가 예측과 다르게 동작할 위험이 큽니다.
 *
 * ### 결론
 *
 * 의도적으로 텍스트 노드를 다뤄야 하는 특별한 경우가 아니라면,
 * 항상 `parentElement`, `children`, `nextElementSibling` 처럼 ""`Element`가 포함된 프로퍼티를 사용하는 것이 훨씬 안전합니다.""
 */
