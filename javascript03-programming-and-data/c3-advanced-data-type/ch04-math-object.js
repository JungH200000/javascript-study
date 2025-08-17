/* =====04. Math 객체===== */

/**
 * ## 1. Math 객체
 * 'Math'는 수학적인 상수와 함수(메소드)를 미리 정의해 둔 JavaScript의 내장 객체이다.
 * 복잡한 수학 연산을 간편하게 처리할 수 있도록 도와준다.
 * 
 * ### 'Date'와의 차이점
 * 'Math'는 생성자(constructor)가 아니므로, 'new Math()'와 같이 객체를 생성하지 않고
   'Math.메소드()' 형태로 바로 사용한다.
 */

/**
 * ## 2. 주요 Math 메소드
 */

// ### 1) 절댓값 (Absolute Value)
// 숫자의 부호를 무시한 값을 반환한다.
console.log(Math.abs(-10)); // 10
console.log(Math.abs(10)); // 10

// ### 2) 최댓값 (Maximum) / 최솟값 (Minimum)
// 여러 개의 숫자 중에 가장 큰 값이나 작은 값을 반환한다.
console.log(Math.max(2, -1, -19, 49, 0)); // 49
console.log(Math.min(2, -1, -19, 49, 0)); // -19

// ### 3) 거듭제곱 (Exponentiation)
// Math.pow(base, exponent)는 base의 exponent 제곱을 반환한다.
console.log(Math.pow(2, 3)); // 8 (2의 3제곱)

// ### 4) 제곱근 (Square Root)
// 숫자의 양의 제곱근을 반환한다.
console.log(Math.sqrt(25)); // 5

// ### 5) 반올림 (Round) / 올림 (Ceil) / 버림 (Floor)
// round(x) : x를 소수점 첫째 자리에서 반올림한 정수를 반환한다.
// ceil(x) : x보다 크거나 같은 정수 중 가장 작은 값을 반환한다. (올림)
// floor(x) : x보다 작거나 같은 정수 중 가장 큰 값을 반환한다. (버림)
console.log(Math.round(4.289)); // 4
console.log(Math.ceil(5.12)); // 6
console.log(Math.floor(2.87)); // 2

// ### 6) 난수 (Random)
// 0 이상 1 미만의 소수를 무작위로 반환한다.
console.log(Math.random());
console.log(Math.random());

/**
 * ### Tip: 삼각 함수나 로그 같은 계산도 할 수 있다.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

/**
 * ## 3. Math 속성 (properties)
 * Math 객체에는 원주율과 같은 유용한 수학 상수도 미리 정의되어 있다.
 */
console.log(Math.PI);
