/* =====11. 이벤트와 버튼 클릭===== */
// ch10-event-and-button-click.js

/**
 * ## 1. 이벤트(Event)란?
 *
 * 이벤트는 웹 페이지에서 발생하는 대부분의 '사건'을 의미합니다.
 * 예를 들어, 사용자가 마우스를 클릭하거나, 키보드를 입력하거나, 스크롤하는 모든 행동이 이벤트입니다.
 *
 * ## 2. 이벤트 핸들링(Event Handling)
 *
 * JavaScript를 사용해 이러한 이벤트가 발생했을 때, 특정 동작을 하도록 '응답'하는 것을
 * '이벤트 핸들링' 또는 '이벤트 리스닝'이라고 합니다.
 * 이때 실행되는 함수를 "이벤트 핸들러(Event Handler)"" 또는 "이벤트 리스너(Event Listener)"라고 부릅니다.
 */
const btn = document.querySelector('#myBtn');

btn.onclick = function () {
  console.log('Hello ChungAh!');
};
/**
 * `.onclick` property보다 `addEventListener()` 메소드를 현업에서 더 자주 사용하지만,
 * 해당 메소드는 c3-event에서 자세히 알아볼 것이다.
 */

/**
 * ### 3) HTML `on-event` 속성 방식
 *
 * HTML 태그에 `onclick="..."` 속성을 직접 작성하는 방식입니다.
 * 지금은 코드의 구조와 동작을 섞어 유지보수를 어렵게 만들기 때문에 "거의 사용하지 않습니다.""
 *
 * <button id="myBtn" onclick="console.log('Hello ChungAh!')">Click!</button>
 *
 */
