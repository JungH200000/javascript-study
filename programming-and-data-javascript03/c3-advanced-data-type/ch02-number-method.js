/* =====02. 숫자형 메소드===== */

/**
 * ## 숫자와 메소드
 * JavaScript에서 숫자(number)는 문자열이나 불리언처럼 원시 값(primitive value)이다.
 * 하지만 숫자에 점(.)을 찍고 메소드를 호출하는 순간, JavaScript는 내부적으로
 * 숫자를 임시 'Number' 객체(Object)로 변환하여, 마치 객체처럼 다양한 메소드를 사용할 수 있게 해준다.
 */

/**
 * ## 1. toFixed(digits) 메소드
 * 소수점 이하의 자릿수를 'digits'만큼 고정하여 '반올림'된 '문자열'을 반환한다.
 * 환율, 평균 점수 등 소수점 자리를 깔끔하게 표현할 때 유용하다.
 *
 * - digits : 0 ~ 100 사이의 정수
 */
let myNumber = 0.3591;

console.log(myNumber.toFixed(2)); // 0.36
console.log(myNumber.toFixed(8)); // 0.35910000
console.log(typeof myNumber.toFixed(2)); // string

// Tip : toFixed()로 반환된 문자열을 다시 숫자로 바꾸기
// (1) Number() 함수 사용
console.log(typeof Number(myNumber.toFixed(2))); // number
// (2) 단항 더하기(+) 연산자 사용 (더 간결)
console.log(typeof +myNumber.toFixed(2)); // number

/**
 * ## 2. toString(radix) 메소드
 * 숫자를 특정 진법의 '문자열'로 변환하여 반환
 *
 * - radix : 변환할 진법 (2, 8, 16 등)
 */
let myNumber2 = 255;

console.log(myNumber.toString(2)); // 11111111 (2진법)
console.log(myNumber2.toString(8)); // 377 (8진법)
console.log(myNumber2.toString(16)); // ff (16진법)

// Tip : 숫자 리터럴에 바로 메소드를 사용할 때는 괄호로 감싸라
console.log((255).toString(2)); // 11111111
