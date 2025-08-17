/* =====06. 유사 배열===== */
// ch06-array-like-object.js

/**
 * ## 1. 유사 배열이란?
 *
 * 이름 그대로, 배열처럼 보이지만 실제 배열은 아닌 객체를 말합니다.
 * 마치 진짜 과일은 아니지만 과일 맛이 나는 '과일맛 사탕'과 같습니다.
 *
 * 유사 배열이 되기 위한 최소한의 조건은 다음과 같습니다.
 *
 * 1) 숫자 형태의 인덱스(key)가 있다: 0부터 시작하는 숫자 인덱스로 각 요소에 접근할 수 있습니다.
 * 2) `length` 프로퍼티가 있다: 객체가 가진 요소의 개수를 알려주는 `length` 프로퍼티를 가집니다.
 *
 * 이 두 가지 조건만 만족하면, 객체는 '유사 배열'로 취급될 수 있습니다.
 */
const myTags = document.getElementsByClassName('color-btn');
console.log(myTags);
console.log(myTags[1]); // 인덱싱: 1번 인덱스
console.log(myTags.length); // 8

/**
 * ## 2. 배열과 유사 배열의 결정적 차이
 *
 * ### 1) 배열 메소드 사용 불가
 * 유사 배열은 진짜 배열이 아니므로, `push`, `pop`, `splice`, `forEach` 등과 같은
 * 배열 전용 메소드를 사용할 수 없습니다. 이것이 가장 큰 차이점입니다.
 */
// console.log(myTags.push(4)); // Uncaught TypeError: myTags.push is not a function

/**
 * ### 2) `Array.isArray()` 결과는 `false`
 * `Array.isArray()`는 주어진 값이 진짜 배열인지를 확인하는 가장 확실한 방법입니다.
 * 유사 배열은 배열이 아니므로, 당연히 `false`를 반환합니다.
 */
console.log(Array.isArray(myTags)); // false

/**
 * ## 3. 주의사항: 유사 배열은 다양하다.
 * 유사 배열은 위와 같은 특징들을 가진 대부분의 형태를 가리키는 포괄적인 개념이기 때문에
   정말 다양한 형태로 존재할 수 있다.
 * 
 * 예를 들어 HTMLCollection의 경우 for...of 문을 활용하는 데 문제는 없지만 어떤 유사 배열의 경우는
 * for...of 문을 활용할 수 없는 경우도 있다.
 * 다만, 이미 만들어진 유사 배열에 접근하는 경우 대부분 위의 4가지 특징을 모두 가지고 있다. 
 */
