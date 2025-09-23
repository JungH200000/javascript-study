/* =====08~09. 불린형===== */
/** 1. 불린(Boolean)
 * True(참)와 False(거짓)를 표현하는 자료형 */
// 예시 명제1
console.log(2 > 1); // true
console.log(2 < 1); // false

// 예시 명제2
console.log(10 >= 29); // false
console.log(10 <= 29); // true
console.log(10 === 10); // true
console.log(10 !== 10); // false
/** 비교 연산자
 * A >= B : A는 B보다 크거나 같다
 * A <= B : A는 B보다 작거나 같다
    단, 등호(=)를 부등호(>, <) 뒤에 작성해야 한다.
 * A === B : A와 B는 같다.
 * A !== B : A와 B는 같지 않다. */

// 예시 명제3
console.log('안녕하세요' === '안녕하세요'); // true
console.log('반갑습니다' !== '배고파'); // true

/**2. 불린 연산자
 * 불 대수와 마찬가지로 AND, OR, NOT을 사용한다. */

// 1) AND 연산자 : &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 2) OR 연산자 : ||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // true

// 3) NOT 연산자 : !
console.log(!true); // true -> false
console.log(!false); // false -> ture
// 중첩 사용
console.log(!!true); // true -> false -> true
console.log(!!false); // false -> treu -> false

/**3. 다양한 방식으로 조합해 보기*/
console.log(2 < 1 && 'Hello' !== 'Hello'); // false AND false -> false
console.log(7 !== 7 || 4 < 3); // false OR false -> false

let x = 5;
console.log(x > 4 || !(x > 6)); // true OR NOT False -> true OR true -> true
