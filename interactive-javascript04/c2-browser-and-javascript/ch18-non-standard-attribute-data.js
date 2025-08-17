// ch18-non-standard-attribute-data.js

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

const dataFields = document.querySelectorAll('[data-field]');
const dataBtns = document.querySelectorAll('[data-status]');

const task = {
  title: '코드 에디터 개발',
  manager: 'CastleRing, Raccoon Lee',
  status: '',
};

for (const tag of dataFields) {
  const field = tag.dataset.field;
  tag.textContent = task[field];
}

for (let btn of dataBtns) {
  const status = btn.dataset.status; // 대기중, 진행중, 완료

  btn.onclick = function () {
    dataFields[2].textContent = status;
    dataFields[2].dataset.status = status;
  };
}

/**
 * ### 최종 요약
 *
 * 비표준 속성을 활용해야 한다면, 미래의 표준과 충돌할 위험이 없는
 * "`data-*` 속성과 `dataset` 프로퍼티를 사용하는 것이 가장 안전하고 확실한 방법"입니다.
 */
