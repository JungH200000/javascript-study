/* =====10. for...of 반복문===== */

/**
 * ## 1. for...of 반복문
 * 'for...of'문은 배열, 문자열, Map, Set 등 '순회 가능한(iterable) 객체'의 '값(value)'을 
    순서대로 순회하는 가장 현대적이고 간결한 반복문
 *
 * for (변수 of 배열) {
 *   동작;
 * }
 */
let members = ['청아', '지원', 'Jam', 'GIO', '현아'];

for (let element of members) {
  console.log(element);
}

console.log('');

/**
 * ## 2. 다른 반복문과 비교
 *
 * ### 1) for...of vs for
 * 'for...of'는 인덱스 없이 값만 필요할 때 코드가 훨씬 간결하고 가독성이 좋다.
 * 만약 반복 중에 '인덱스가 반드시 필요하다면' 전통적인 'for'문을 사용하는 것이 좋다.
 */
for (let i = 0; i < members.length; i++) {
  console.log(members[i]);
}

console.log('');

/**
 * ### 2) for...of vs for...in
 * 'for...in'은 객체의 property name(key)를 순회하기 위한 반복문
 * 배열에 사용하면 다음과 같은 문제가 발생할 수 있어 '사용하지 않는 것을 강력히 권장'
 * (1) 배열의 인덱스가 아닌 다른 property(배열에 추가된 커스텀 메소드)까지 순회에 포함될 수 있다.
 * (2) 성능상으로 'for'나 'for...of'보다 느리다.
 */
for (let index in members) {
  console.log(members[index]);
}
/**
 * ## 3. 언제 무엇을 사용할까??
 *
 * ### 'for...of'
 * 배열의 '값'만 순서대로 필요할 때
 * 일반 객체에 사용 불가(순회 가능하지 않음)
 *
 * ### 'for'
 * 배열의 인덱스와 값이 모두 필요할 때
 *
 * ### 'for...in'
 * 배열이 아닌, 순서가 중요하지 않은 '일반 객체'의 property name(key)를 순회할 때
 */
