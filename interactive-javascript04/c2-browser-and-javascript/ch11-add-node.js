/* =====11. 요소 노드 추가하기===== */
// ch11-add-node.js

/**
 * ## 1. `innerHTML` / `outerHTML` 방식의 문제점
 *
 * `innerHTML`이나 `outerHTML`에 `+=` 연산으로 문자열을 추가하는 것은 편리해 보이지만, 다음과 같은 단점이 있습니다.
 *
 * 1.  **비효율성**: 기존의 모든 자식 요소들을 지우고, 전체 HTML 문자열을 처음부터 다시 렌더링합니다. 요소가 많을수록 성능이 저하됩니다.
 * 2.  **상태 손실**: 기존 요소에 JavaScript로 추가했던 이벤트 핸들러 등이 모두 사라집니다.
 * 3.  **참조 문제**: 말씀하신 대로, `outerHTML`로 요소를 교체하면 기존에 변수에 저장해 둔 요소는 더 이상 DOM에 존재하지 않는 과거의 요소가 되어버립니다.
 */

const today = document.querySelector('#today');

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML;
// console.log(today); // 이 시점의 'today' 변수는 더 이상 DOM의 #today가 아님!

const newToday = document.querySelector('#today');
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

/**
 * ## 2. ✅ 노드를 직접 생성하고 추가하기 (추천 방법)
 *
 * 위와 같은 문제를 해결하기 위해, 노드를 직접 생성하여 원하는 위치에 추가하는
 * 현대적인 DOM 조작 방식을 사용하는 것이 좋습니다.
 *
 * ### 3단계 접근법
 * 1.  요소 생성: `document.createElement('태그이름')`
 * 2.  요소 설정: `textContent`, `className` 등으로 내용과 속성 채우기
 * 3.  DOM에 추가: `prepend`, `append`, `before`, `after` 메소드 사용
 */
const tomorrow = document.querySelector('#tomorrow');

// --- 예시 ---

// 1. 요소 생성
const first = document.createElement('li'); // 원하는 태그 노드 생성 가능

// 2. 요소 설정
first.textContent = '처음';

// 3. DOM에 추가 (첫 번째 자식으로)
tomorrow.prepend(first);

// ---

const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last); // 메소드를 호출한 노드의 마지막 자식 노드로

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev); // 메소드를 호출한 노드의 이전 형제 노드로

const next = document.createElement('p');
next.textContent = '다음';
// tomorrow.after(next); // 메소드를 호출한 노드의 다음 형제 노드로

// 💡 Tip: 이 메소드들은 여러 개의 노드나 문자열을 한 번에 추가할 수도 있습니다.
tomorrow.after('문자열도 가능', next);
