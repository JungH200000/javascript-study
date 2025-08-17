/* =====16. 스타일 다루기===== */
// ch16-handle-style.js

const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

/**
 * ## 스타일을 다루는 3가지 방법
 *
 * JavaScript로 요소의 스타일을 변경하는 방법은 크게 세 가지입니다.
 * 각각의 장단점을 이해하고 상황에 맞는 방법을 사용하는 것이 중요합니다.
 *
 * ---
 *
 * ### 1. `element.style` Property (가끔 유용)
 *
 * 요소에 직접 인라인(inline) 스타일을 적용합니다.
 * `style.backgroundColor = 'red'` 처럼 CSS 속성을 camelCase로 바꿔서 사용합니다.
 *
 * - 장점: 동적으로 계산된 값(예: 마우스 위치)을 적용하는 등, 단일 요소에 "특정 스타일 하나"를 즉시 적용할 때 간편합니다.
 * - 단점:
 * 1.  높은 우선순위: 인라인 스타일이라 CSS 파일의 규칙을 덮어쓰므로, 스타일 관리가 복잡해집니다.
 * 2.  재사용성 부족: 여러 요소에 동일한 스타일을 적용하려면 코드가 반복됩니다.
 *
 * -> "결론: 꼭 필요한 경우가 아니면 잘 사용하지 않습니다."
 */
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';

/**
 * ## 2. `element.className` Property (구식 방법)
 *
 * `className` property에 새로운 문자열 값을 할당하여 클래스 전체를 교체합니다.
 *
 * - 장점: 스타일 정보를 CSS 파일에 위임할 수 있습니다.
 * - 단점: "클래스 전체를 덮어씁니다."" 기존에 여러 클래스가 적용되어 있었다면,
 *         하나를 수정하기 위해 모든 클래스 이름을 다시 적어줘야 해서 불편하고 실수를 유발하기 쉽습니다.
 */
today.children[1].className = 'done';

/**
 * ## 3. `element.classList` Property (최고의 방법 ✅)
 *
 * 클래스를 개별적으로, 그리고 안전하게 제어할 수 있는 다양한 메소드를 제공합니다.
 * "현대 JavaScript에서 스타일을 제어하는 표준적인 방식입니다.""
 *
 * - `.add('클래스1', '클래스2', ...)`: 클래스를 추가합니다.
 * - `.remove('클래스1', ...)`: 클래스를 제거합니다.
 * - `.toggle('클래스')`: 클래스가 있으면 제거하고, 없으면 추가합니다.
 * - `.contains('클래스')`: 특정 클래스의 존재 여부를 `true`/`false`로 반환합니다.
 */
console.log(today.classList);
console.log(today.children[1].classList);

const item = tomorrow.children[1];

// add
item.classList.add('done', 'other');

// remove
item.classList.remove('done', 'other');

// toggle
item.classList.toggle('done'); // 'done' 클래스가 없으므로 다시 추가됨
item.classList.toggle('done'); // 'done' 클래스가 있었으므로 제거됨

// contains
console.log(item.classList.contains('item')); // true
