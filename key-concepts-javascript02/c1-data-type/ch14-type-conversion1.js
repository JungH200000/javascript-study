/* =====14. 형 변환I===== */
/**1. 형 변환(Type Conversion)
 * 값의 데이터 타입(자료형)을 다른 데이터 타입으로 변경하는 것
 * JavaScript에서 기본적으로 제공하는 함수를 활용하면 된다.
 */

/**2. 형 변환 방법
 * 문자열(string)로 변경 : String()
 * 숫자형(number)로 변경 : Number()
 * 불린형(boolean)으로 변경 : Boolean()
 */

/* 1) 문자열로 형 변환 */
// number -> string
let x = 123;
console.log(x); // 123
console.log(typeof x); // number

console.log(String(x)); // 123
console.log(typeof String(x)); //string

console.log('');

// boolean -> string
let y = true;
console.log(y); // true
console.log(typeof y); // boolean

console.log(String(y)); // true
console.log(typeof String(y)); // string

console.log('');

/* 2) 숫자형로 형 변환 */
// string(숫자 x) -> number
let z = '문자열';
console.log(z); // 문자열
console.log(typeof z); // string

console.log(Number(z)); // 문자열
console.log(typeof Number(z)); // NaN
// 숫자가 아닌 값들을 형 변환할 때는 NaN 값으로 변경된다.

console.log('');

// string(숫자 o) -> number
let a = '1029';
console.log(a); // 1029
console.log(typeof a); // string

console.log(Number(a)); // 1029
console.log(typeof Number(a)); // number

console.log('');

// boolean -> number
let b = true;
console.log(b); // true
console.log(typeof b); // boolean

console.log(Number(b)); // 1
console.log(typeof Number(b)); // number
/* boolean 값은 숫자형으로 형 변환을 할 때 
    true = 1로, false = 0으로 변환된다. */

console.log('');

/* 3) 불린형으로 형 변환 */
// string -> boolean
let c = '문자열';
console.log(c); // 문자열
console.log(typeof c); // string

console.log(Boolean(c)); // true
console.log(typeof Boolean(c)); // boolean

console.log('');

// number -> boolean
let d = 1029;
console.log(d); // 1029
console.log(typeof d); // number

console.log(Boolean(d)); // true
console.log(typeof Boolean(d)); // boolean

console.log('');

// 일반적으로 어떤 값을 불린형으로 변경할 때는 true 값이 된다.
/**false로 변경되는 경우
 * '무언가 비어있거나 없는 의미'를 지닌 falsy 값일 경우
 * falsy 값 : '', 0, NaN
 */
