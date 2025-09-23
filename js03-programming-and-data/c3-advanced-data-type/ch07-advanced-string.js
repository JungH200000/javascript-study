/* =====07. 문자열 심화===== */

/**
 * ## 1. 객체처럼 다뤄지는 문자열
 *
 * 숫자와 마찬가지로, 문자열(string)도 원시 값(primitive value)입니다.
 * 하지만 메소드를 호출하는 순간, JavaScript는 내부적으로 문자열을 임시 String 객체로 다루어,
 * 마치 객체처럼 다양한 내장 메소드와 property를 사용할 수 있게 해줍니다.
 */
const myString = ' Hun Chung ';

// ### 주요 문자열 메소드(Method) 및 property

// `.length`: 문자열의 길이를 반환
console.log(myString.length); // 11

// `.slice(start, end)`: 부분 문자열을 '새로운 문자열'로 반환
console.log(myString.slice(1, 4)); // 1번 인덱스부터 3번 인덱스까지
console.log(myString.slice(5)); // 3번 인덱스부터 끝까지
console.log(myString.slice()); // 문자열 전체

// `.trim()`: 양 끝의 공백을 제거한 '새로운 문자열' 반환
console.log(myString.trim());

// `.toUpperCase()` / `.toLowerCase()`: 대소문자로 변환한 '새로운 문자열'을 반환
console.log(myString.toUpperCase()); //  HUN CHUNG
console.log(myString.toLowerCase()); //  hun chung

// `.indexOf(str)` / `.lastIndexOf(str)`: 문자의 인덱스 탐색
console.log(myString.indexOf('n')); // 앞에서 부터
console.log(myString.lastIndexOf('n')); // 뒤에서 부터

// `[index]`: 특정 인덱스의 문자에 접근 (배열과 유사)
console.log(myString[5]); // 대괄호 표기법
console.log(myString.charAt(5)); // charAt 메소드

console.log('');

/**
 * ## 2. 배열과 문자열: 공통점과 결정적 차이
 *
 * 문자열은 문자의 나열(배열)이라는 점에서 배열과 매우 유사합니다.
 *
 * ### 공통점
 *
 * (1) `.length` property를 가집니다.
 * (2) 대괄호 표기법 `[ ]`으로 특정 위치의 값(문자)에 접근할 수 있습니다.
 * (3) '순회 가능한(iterable) 객체'이므로 `for...of` 반복문을 사용할 수 있습니다.
 */
for (const char of 'ChungAh') {
  console.log(char);
}

/**
 * ### 가장 큰 차이점: Mutable vs. Immutable
 *
 * - '배열 (Array)': 'Mutable (변경 가능)'. 인덱스를 통해 요소를 직접 수정할 수 있습니다.
 * - '문자열 (String)': 'Immutable (변경 불가능)'. 한 번 생성된 문자열의 내용은 절대 바뀌지 않습니다.
 *
 * `slice`, `trim` 같은 모든 문자열 메소드들은 기존 문자열을 바꾸는 게 아니라,
 * 변경된 '새로운 문자열을 반환'하는 방식으로 동작합니다.
 * 바로 이 '불변성' 때문에, 원본 배열을 직접 수정하는 `splice`, `pop` 같은 메소드는 문자열에 존재하지 않습니다.
 */
// 배열은 변경 가능 (Mutable)
let myArray = ['C', 'h', 'u', 'n', 'g', 'A', 'h'];
myArray[0] = 'Z';
console.log(myArray);

// 문자열은 변경 불가능 (Immutable)
let myString2 = 'ChungAh';
myString2[0] = 'Z'; // 값을 바꾸려는 시도가 무시됨 (Error 발생 X)
console.log(myString2); // 원본 그대로 유지
