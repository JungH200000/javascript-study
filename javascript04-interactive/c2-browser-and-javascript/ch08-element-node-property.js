/* ===== 08. 요소 노드 프로퍼티: HTML vs. Text ===== */
// ch08-element-node-property.js

const myTag = document.querySelector('#list-1');
/**
 * DOM의 각 노드들은 다양한 property를 가지고 있다.
 * 주요 노드들을 알아보자.
 */

/**
 * ## 1. outerHTML
 *
 * 요소 노드 "자신을 포함한 전체 HTML"을 문자열로 반환합니다.
 * 이 프로퍼티에 새로운 값을 할당하면, 선택된 요소 자체가 통째로 교체됩니다.
 */
console.log(myTag.outerHTML);
// myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>';

/**
 * ## 2. innerHTML
 *
 * 요소 노드의 "내부 HTML"을 문자열로 반환합니다.
 * 요소의 내부 자식 요소들을 통째로 바꾸거나 추가할 때 자주 사용됩니다.
 */

console.log(myTag.innerHTML);

// 기존 내용을 완전히 새로운 HTML로 교체
// myTag.innerHTML = '<li>Exotic</li>';

// 기존 내용의 마지막에 새로운 HTML을 추가
// myTag.innerHTML += '<li>Chung</li>';

/**
 * ## 3. textContent
 *
 * 요소 노드의 "내부 텍스트"만을 문자열로 반환합니다.
 * 내부의 HTML 태그들은 모두 무시하고, 사람이 읽을 수 있는 텍스트만 가져옵니다.
 */
console.log(myTag.textContent);

// 요소 안의 내용을 'new text!'라는 텍스트로 완전히 교체
myTag.textContent = 'new text!'; // <ul id="list-1">new text!</ul>

/**
 * ## 4. innerHTML vs. textContent 💡
 *
 * 두 프로퍼티는 비슷해 보이지만, 매우 중요한 차이가 있습니다.
 *
 * - innerHTML: "HTML 태그를 해석"하여 DOM에 반영합니다.
 * - textContent: "순수한 텍스트"로만 다룹니다. (HTML 태그를 문자 그대로 화면에 보여줌)
 */

const content = document.querySelector('#content');

// 1. 내용 추가 비교
// content.innerHTML = '<h2>innerHTML vs. textContent</h2>'; // h2 태그로 동작
// content.textContent = '<h2>innerHTML vs. textContent</h2>'; // <h2>...</h2> 문자열이 그대로 보임

/**
 * ### ⚠️ 보안 주의 (XSS)
 *
 * 사용자가 입력한 값을 `innerHTML`로 웹 페이지에 표시하면,
 * 해커가 `<script>`와 같은 악성 코드를 삽입하여 실행시킬 수 있습니다.
 * 이를 "XSS(Cross-Site Scripting) 공격"이라고 합니다.
 *
 * 따라서 **사용자의 입력 값처럼 신뢰할 수 없는 데이터**를 다룰 때는
 * 항상 `innerHTML` 대신 ""`textContent`를 사용"하는 것이 안전합니다.
 */
