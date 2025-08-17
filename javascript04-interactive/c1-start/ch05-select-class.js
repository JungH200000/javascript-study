/* =====05. class로 태그 선택하기===== */
// ch05-select-class.js

/**
 * ## `getElementsByClassName('클래스이름')`
 *
 * `class` 속성을 이용해 HTML 요소를 선택하는 메소드입니다.
 *
 * ### 특징
 * 1) 반환 값은 **HTMLCollection**이라는 '유사 배열(Array-like Object)'입니다.
 *   - 배열처럼 인덱스와 `.length`를 가지지만, 배열의 모든 메소드를 쓸 수는 없습니다.
 * 2) 조건에 맞는 요소가 "하나뿐이더라도 항상 컬렉션 형태"로 반환됩니다.
 *   - 해당 요소를 가져오기 위해서는 ~[0]으로 인덱싱이 필요
 * 3) 조건에 맞는 요소가 "없으면 빈 HTMLCollection (`[]`)"을 반환합니다.
 */
const myTags = document.getElementsByClassName('color-btn');
console.log(myTags); // HTMLCollection(8) [...]
console.log(myTags[1]); // 1번 인덱스 접근
console.log(myTags.length); // 8

// for...of 문으로 순회 가능
for (let tag of myTags) {
  console.log(tag);
}
