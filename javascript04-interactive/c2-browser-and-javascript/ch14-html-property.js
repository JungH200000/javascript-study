/* =====14. HTML 속성 다루기===== */
// ch14-html-property.js

const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

/**
 * ## HTML 속성을 다루는 2가지 방법
 *
 * DOM 요소 노드는 HTML 태그의 속성을 다룰 수 있는 두 가지 방법을 제공합니다.
 *
 * ### 1. Property로 접근하기
 *
 * `id`, `className`, `href` 와 같은 "HTML 표준 속성"들은 요소 노드의 property로 자동 변환되어,
   점 표기법(`.`)으로 쉽고 빠르게 접근하고 수정할 수 있습니다.
 *
 * ⚠️ "주의":
 * - `class` 속성은 `className` property로 접근해야 합니다.
 * - HTML 표준에 없는 비표준 속성(예: `<ol>` 태그의 `href`)은 property로 접근할 수 없습니다.
 */
console.log(tomorrow);
console.log(tomorrow.id); // tomorrow

console.log(item);
console.log(item.className); // item

console.log(link);
console.log(link.href);
console.log(tomorrow.href); // undefined

/**
 * ### 2. 메소드(Method)로 접근하기 (더 범용적인 방법)
 *
 * `getAttribute`, `setAttribute`, `removeAttribute` 메소드를 사용하면,
 * 표준 여부와 관계없이 "모든 속성"에 접근하고 제어할 수 있습니다.
 */
// 속성 값 얻기: getAttribute('속성이름')
console.log(tomorrow.getAttribute('href'));
console.log(item.getAttribute('class'));

// 속성 값 수정/추가: setAttribute('속성이름', '값')
tomorrow.setAttribute('class', 'list'); // class 속성 추가
link.setAttribute('href', 'https://ChungAh.hhh'); // href 속성 수정

// 속성 삭제: removeAttribute('속성이름')
tomorrow.removeAttribute('href');
tomorrow.removeAttribute('class');
