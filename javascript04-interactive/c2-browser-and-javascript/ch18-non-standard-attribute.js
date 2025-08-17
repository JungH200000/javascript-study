/* =====18. 비표준 속성 다루기 */
// ch18-non-standard-attribute.js

/**
 * ## 1. 비표준 속성(Non-standard Attribute)이란?
 *
 * `id`, `class`, `href`처럼 HTML 표준 명세에 정의되지 않은, 개발자가 임의로 만든 속성을 말합니다.
 * 이러한 비표준 속성은 CSS 선택자나 JavaScript에서 유용하게 활용될 수 있습니다.
 *
 * (CSS에서는 `[속성이름="값"]` 형태의 '속성 선택자'로 접근할 수 있습니다.)
 */

/**
 * ## 2. 비표준 속성의 활용 예시
 *
 * ### 1) 선택자로 활용
 * `querySelectorAll('[field]')`처럼 특정 비표준 속성을 가진 모든 요소를 선택할 수 있습니다.
 */
const fields = document.querySelectorAll('[field]');
console.log(fields);

/**
 * ### 2) 객체 데이터와 HTML 요소를 연결할 때
 *
 * JavaScript 객체의 key와 HTML 요소의 비표준 속성 이름을 일치시켜,
 * 어떤 데이터를 어떤 요소에 표시할지 쉽게 연결할 수 있습니다.
 */
const task = {
  title: '코드 에디터 개발',
  manager: 'CastleRing, Raccoon Lee',
  status: '',
};

for (const tag of fields) {
  const field = tag.getAttribute('field');
  tag.textContent = task[field];
}

/**
 * ### 3) 이벤트와 연계하여 데이터 및 스타일 변경
 *
 * 버튼에 특정 값을 가진 비표준 속성을 부여하고, 클릭 이벤트가 발생했을 때
 * 그 값을 읽어와 다른 요소의 상태를 변경하는 데 활용할 수 있습니다.
 */
const btns = document.querySelectorAll('.btn');

for (let btn of btns) {
  const status = btn.getAttribute('status'); // 대기중, 진행중, 완료

  btn.onclick = function () {
    fields[2].textContent = status;
    fields[2].setAttribute('status', status);
  };
}

/**
 * ## 3. 비표준 속성의 위험성 ⚠️
 *
 * 비표준 속성은 편리하지만, 치명적인 문제가 발생할 수 있습니다.
 * 만약 내가 만든 비표준 속성 이름(예: `glitter`)이 나중에 "HTML 표준 속성으로 채택"되면,
 * 브라우저가 그 속성을 다르게 해석하여 원래 의도와 전혀 다른 기능이 실행될 수 있습니다.
 */

/**
 * ## 4. 올바른 해결책: `data-*` 속성과 `dataset` Property ✅
 *
 * 이러한 위험을 피하기 위해, HTML 표준에서는 개발자가 커스텀 데이터를 안전하게 저장할 수 있도록
 * `data-*` 형태의 속성을 공식적으로 약속했습니다.
 *
 * ### 사용법
 * - HTML: `data-` 접두사 뒤에 원하는 이름을 붙여 속성을 만듭니다. (`data-status`, `data-user-id` 등)
 * - JavaScript: `element.dataset` property를 통해 접근합니다.
 * - `data-status`  -> `element.dataset.status`
 * - `data-user-id` -> `element.dataset.userId` (kebab-case는 camelCase로 자동 변환)
 */
// ch18-non-standard-attribute-data.js에서 코드 확인
