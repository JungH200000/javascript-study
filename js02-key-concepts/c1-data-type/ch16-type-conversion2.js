/* =====16. 형 변환II===== */
/**
 * 함수를 사용해서 형 변환을 하는 것 말고,
 * JavaScript는 일반적으로 연산을 할 때 일정한 규칙에 따라서 자동으로 형 변환을 하는 특징이 있다.
 *
 * 대부분의 프로그래밍 언어에서는 서로 다른 데이터 타입(자료형)의 연산을 오류로 처리한다.
 * 하지만 JavaScript는 일정한 규칙에 따라서 자동으로 변환하여 계산할 수 있다.
 * 아래의 예시를 살펴보자.
 */
console.log('4' - true); // 4 - 1 = 3
console.log(typeof ('4' - true)); // number

console.log('');

/**1. 산술 연산자(+, -, *, /, %, **)
 * 일반적으로 산술 연산자는 연산되어지는 두 값을 숫자형으로 변환한 다음 연산한다.
 * 다만, 주의할 점은 + 연산자이다. 
   다른 연산자들은 숫자를 연산하는 기능 밖에 없기 때문에 모든 값을 숫자라 변환하여 계산하지만,
   + 연산자는 문자열을 연결하는 기능도 있다.
 */

console.log(4 + '2'); // 42
/**JavaScript에서 + 연산자는 더하는 기능보다 연결하는 기능이 더 강하다고 생각하면 된다.
 * + 연산자를 사용할 때 순서 상관 없이 어느 한 쪽이라도 문자열이 있다면 양쪽 모두를 문자열로 변환 후 연결한다.
 */

console.log(4 + 2); // 6
console.log(4 - true); // 4 - 1 = 3
console.log(4 * false); // 4 * 0 = 0
console.log(4 / '2'); // 4 / 2 = 2
console.log('4' ** true); // 4 ** 1 = 4
console.log(typeof (Boolean(5) * true));

console.log(4 % 'two'); // 4 % NaN = NaN
// NaN 값은 어떤 값과 연산을 해도 NaN 값이 된다.

console.log('');

/**2. 비교 연산자 */
/**1) 관계 비교 연산자(>, <, >=, <=)
 * 특별한 경우를 제외하면 산술 연산자처럼 두 값을 모두 숫자형으로 변환하여 비교한다.
 */
console.log(2 < '3'); // 2 < 3 -> true
console.log(2 > true); // 2 > 1 -> true
console.log('2' <= false); // 2 < 0 -> false
console.log('two' >= 1); // NaN >= 1 -> false
/**값을 비교하는 연산에서는 true나 false 중 하나의 결괏값을 내야하기 때문에
 * 비교가 불가능한 경우에는 false가 출력된다.
 */

console.log('');

/**2) 등호 비교 연산자(===, !==, ==, !=)
 * === : 일치
 * !== : 불일치
 * == : 동등함
 * != : 동등하지 않음
 */
// 일치 비교는 형 변환이 발생하지 않음
console.log(1 === '1'); // false
console.log(1 === true); // false

// 동등 비교는 숫자형으로 형 변환이 발생하지 않음
console.log(1 == '1'); // true
console.log(1 == true); // true
