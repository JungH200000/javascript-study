/* =====12. 다차원 배열===== */

/**
 * ## 1. 다차원 배열 (Multi-dimensional Array)
 * '배열 안에 또 다른 배열이 들어간 형태'
 * 2차원 배열은 표(table)나 그리드(grid), 지도 좌표처럼 행과 열의 구조를 가진 데이터를 다룰 때 매우 유용하다.
 */
let twoDimensional = [
  [1, 2],
  [3, 4],
];

/**
 * ## 2. 언제 사용할까? (vs 객체(Object))
 * 데이터의 각 값이 무엇을 '의미'하는지(예: {name: '청아})보다,
   데이터의 '위치'나 '순서'가 더 중요할 때 사용하면 효과적
 */

/**
 * ## 3. 요소에 접근하기 (Indexing)
 * '배열[행][열]'과 같이 대괄호를 연달아 사용하여 원하는 위치의 요소에 접근할 수 있다.
 * 인덱스는 행과 열 모두 0부터 시작한다.
 */
console.log(twoDimensional);
console.log(twoDimensional[0]); // 0번 행 전체 -> [ 1, 2 ]
console.log(twoDimensional[1][0]); // 1번 행 0번 열 -> 3

console.log('');

/**
 * ## 4. 다차원 배열 순회하기
 * 중첩 반복문을 사용하면 다차원 배열의 모든 요소를 순회할 수 있다.
 */
for (let i = 0; i < twoDimensional.length; i++) {
  // 행(row) 담당
  for (let j = 0; j < twoDimensional[i].length; j++) {
    // 열(column) 담당
    console.log(twoDimensional[i][j]); // 1, 2, 3, 4 순서대로 출력
  }
}
