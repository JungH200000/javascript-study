/* =====03. 배열 다루기===== */

let members = ['청아', '지원', 'Jam', 'GIO', 'last member'];

/**
 * ## 1. 배열의 타입과 길이
 *
 * ### 타입 (Type)
 * 'typeof'로 배열을 확인하면 'object'가 나온다.
 * 배열은 JavaScript에 내장된 '객체'의 특별한 한 종류이기 때문
 * 따라서 객체처럼 다양한 속성(property)과 기능(method)을 미리 가지고 있다.
 * => JavaScript는 물론 다른 프로그래밍 언어에서도 객체(Object)가 중요한 이유
 */
console.log(typeof members); // object

/**
 * ### 길이 (length property)
 * 배열이 가진 요소의 총개수를 반환
 */
console.log(members.length); // 5
console.log(members['length']); // 5

// 배열의 마지막 요소에 쉽게 접근 가능
console.log(members[members.length - 1]); // last member
console.log(members[members['length'] - 1]); // last member

/**
 * ## 2. 요소 추가 및 수중
 * 특정 인덱스에 값을 할당하는 방식으로 요소를 추가하거나 수정할 수 있다.
 *
 * - 존재하지 않는 인덱스에 할당 -> '추가'
 * - 이미 존재하는 인덱스에 할당 -> '수정 (덮어쓰기)'
 */
// 참고: 범위 밖의 인덱스를 출력하면 Error가 아니라 undefined가 출력됨
console.log(members[5]); // undefined

// 수정
members[4] = '세경';
console.log(members[4]); // 세경

// 추가
members[5] = 'final_member';
console.log(members);

/**
 * ## 3. 요소 삭제
 *
 * ### 'delete' 연산자의 문제점
 * 'delete' 연산자로 배열 요소를 삭제할 수 있지만, 문제가 존재
 */
delete members[members['length'] - 1];
console.log(members);
/**
 * 위 코드의 결과를 보면, 값이 삭제된 자리에 <empty item>이라는 '빈 공간'이 남고,
   배열의 길이(.length)도 줄어들지 않는다.
 * 이처럼 데이터만 지우고 자리는 그대로 남겨두기 때문에, 배열을 다룰 때 'delete'는 거의 사용하지 않는다.
 *
 * 빈 공간 없이 완벽하게 삭제하기 위해서는 배열이 제공하는 메소드를 사용하는 것이 가장 좋다.
 * 자세한 건 "ch05-array-method1", "ch07-array-method2"에서 살펴볼 것
 */
