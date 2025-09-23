/* =====01. 객체와 프로퍼티===== */

/**
 * ## 1. 객체 (Object)란?
 * 연관된 데이터(속성)와 기능(메서드)을 하나의 묶음으로 저장하는 자료 구조
 * 중괄호 {}를 사용하여 만들며, 그 안에는 key-value 쌍으로 구성된 property들을 쉼표(,)로 구분하여 작성
 *
 */
const user = {
  name: '청아',
  age: 24,
  'is-student': true,
};

console.log(typeof user); // object 타입

/**
 * ## 2. 프로퍼티 (Property)
 * 객체를 구성하는 key-value 한 쌍을 property(속성)라고 부른다.
 * 
 * ### 1) property name (= key)
 * key는 기본적으로 문자열(string) 타입이다.
 * 하지만 따옴표 없이 작성해도 JavaScript가 내부적으로 문자열로 인식하므로,
   특별한 경우가 아니면 보통 따옴표를 생략하고 사용한다.
 * 
 * #### [key 이름 규칙 (따옴표 생략 시)]
 * (1) 첫 글자는 반드시 문자, 밑줄(_), 달러 기호($) 중 하나
 * (2) 띄어쓰기나 하이픈(-) 등 특수문자 포함 불가능
 *
 * -> 만약 위 규칙을 어겨야 한다면, key 전체를 따옴표로 감싸줘야 한다.
 * ex)
 * {
 *   'brand name': 안녕,
 *   'user-id': 'client-client',
 * }
 *
 * ### 2) property value (= value)
 * value에는 숫자, 문자열, 불리언 같은 원시 값뿐만 아니라 
   배열, 함수, 그리고 또 다른 객체도 들아갈 수 있다.
 */

/**
 * ## 3. property value에 접근하기
 * 객체의 property 값은 두 가지 방법으로 접근할 수 있다.
 *
 * ### 1) 점 표기법 (Dot Notation)
 * '객체이름.key' 형태로, 가장 일반적으로 사용되는 방법
 *
 * ### 2) 대괄호 표기법 (Bracket Notation)
 * '객체이름['key']' 형태로, key를 문자열로 감싸서 접근
 * key에 띄어쓰기나 특수문자가 포함된 경우, 또는 변수를 통해 동적으로 key에 접근할 때 반드시 사용해야 함
 */

console.log(user.name); // 1) 점 표기법 => 청아
console.log(user['is-student']); // 2) 대괄호 표기법 => true
