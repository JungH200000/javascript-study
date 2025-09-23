/* =====20. null과 undefined===== */
/**JavaScript Data type(자료형)
 * JavaScript의 Data type으로는 숫자(Number), 문자(String), 불린(Boolean) 외에도
 * null과 undefined라는 특별한 Data type이 있다.
 *
 * null과 undefined는 JavaScript에서 '값이 없다'라는 의미를 가지고 있다.
 * null과 underfined는 의미는 같지만 쓰임에서 차이가 있다.
 */

/**1. null
 * 코드를 작성하는 사람이 의도적으로 '값이 없다'는 것을 표현할 때 사용하는 값으로,
 */
let world = null;
console.log(world); // null

console.log('');

/**2. undefined
 * 코드를 실행하면서 '값이 없다'는 것을 확인하는 값으로, 
   변수 선언을 한 다음 값을 할당하지 않았다는 것을 의미
 * 
 * JavaScript에서 값이 주어지지 않은 변수에는 기본적으로 undefined 값을 가지고 있다.
 */
let hello;
console.log(hello); // undefined

// 이 두 가지를 명확히 구분하지 못하면 코드를 이해하거나 작성할 때 오해나 실수가 발생할 수 있다.

console.log('');

/**3. 비교 */
console.log(null == undefined); // true
console.log(null === undefined); // false
