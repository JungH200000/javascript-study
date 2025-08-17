/* =====12. 노드 삭제와 이동하기===== */
// ch12-delete-shift-node.js

const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

/**
 * ## 1. 노드 삭제하기: `node.remove()` 🗑️
 *
 * `remove()` 메소드를 호출하면, 해당 노드는 DOM 트리에서 완전히 삭제됩니다.
 */
// '내일 할 일' 목록 전체를 삭제
// tomorrow.remove();

// '오늘 할 일' 목록의 세 번째 li 요소를 삭제
// today.children[2].remove();

/**
 * ## 2. 노드 이동하기 🚚
 *
 * DOM 트리에서 노드를 이동시키는 별도의 '이동' 메소드는 없습니다.
 * 대신, "이미 존재하는 노드를 `append`, `prepend`, `before`, `after` 메소드로 다른 위치에 추가하면,
 * 기존 위치에서는 사라지고 새로운 위치로 자연스럽게 '이동'됩니다."
 *
 * (한 노드는 DOM 트리 안에서 동시에 여러 위치에 존재할 수 없기 때문입니다.)
 */

// 1. '내일 할 일'의 두 번째 li를 '오늘 할 일'의 마지막 자식으로 이동
// today.append(tomorrow.children[1]);

// 2. '오늘 할 일'의 두 번째 li를 '내일 할 일'의 두 번째 li 뒤로 이동
// tomorrow.children[1].after(today.children[1]);

// 3. '오늘 할 일'의 첫 번째 li를 '내일 할 일'의 마지막 li 앞으로 이동
// tomorrow.lastElementChild.before(today.children[0]);
