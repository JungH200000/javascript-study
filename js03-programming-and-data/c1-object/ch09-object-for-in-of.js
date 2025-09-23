/* =====09.객체의 for...in/of 반복문===== */

/**
 * ## 1. for...in 반복문
 * 객체(Object)에 포함된 모든 'property'들을 순회하며 반복적인 동작을 수행하는 구문
 * 일반 'for'문과 달리, 객체의 'property'개수만큼 반복하고 각 반복마다 property name을 변수에 할당해 준다.
 *
 * for (let 변수 in 객체) {
 *   // 변수에는 property name(string)이 할당된다.
 *   동작 // 객체[변수] 형태로 property 값에 접근할 수 있다.
 * }
 */
let user = {
  name: '배고파',
  age: 24,
  city: '구미시',
};

for (let key in user) {
  console.log(`key: ${key}, value: ${user[key]}`);
}

console.log('');

/**
 * ## 2. for...in 사용 시 주의사항
 * 'for...in'은 편리하지만, 예측과 다르게 동작할 수 있는 두 가지 큰 특징이 있어 주의가 필요하다.
 *
 * ### 1) 반복 순서
 * 'for...in'은 property의 순서를 보장하지 않으며, 특히 '숫자처럼 보이는 property name'은 특별하게 취급
 *
 * #### 객체의 property name과 순서
 * (1) 숫자형 property name
 * property name에는 숫자도 사용할 수 있다. 하지만 내부적으로는 문자열로 변환되어 저장된다.
 * 이런 숫자형 property name은 '대괄호 표기법'으로만 접근할 수 있다.
 *
 * (2) 정수형 property name
 * '따옴표 없는 정수처럼 보이는 property name'들은 'for...in'으로 순회할 때
   '숫자 크기순(오름차순)으로 먼저 정렬'되어 순회한다.
 * 그 후에 나머지 property name들이 원래 추가된 순서대로 순회한다.
 *
 * 이러한 특징들로 인해 아래와 같이 예시의 순서가 뒤바뀌는 현상이 나타난다.
 */
let myObject = {
  2: '알고리즘의 정석',
  3: '컴퓨터 개론',
  1: '자바스크립트 프로그래밍 기초',
};
for (let key in myObject) {
  console.log(myObject[key]);
}
/* 출력 결과:
 * 자바스크립트 프로그래밍 기초
 * 알고리즘의 정석
 * 컴퓨터 개론
 */
console.log('');

/**
 * ### 2) 프로토타입 체인 순회 (상속된 property)
 * 'for...in'은 객체가 직접 소유한 property뿐만 아니라, '상속받은 property(프로토타입 체인)까지 모두 순회'한다.
 * => 'hasOwnProperty()' 메소드를 사용해 '객체가 직접 소유한 property인지 확인'하는 것이 안전하다.
 */
for (let key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`key: ${key}, value: ${user[key]}`);
  }
}

console.log('');

/**
 * ## 3. 더 나은 방법: Object 메소드 + for...of
 * 위와 같은 단점 때문에, 현대 JavaScript에서는 'for...in' 대신
   객체의 '자신만의 property'만 안전하게 순회하는 아래의 방법들을 사용하는 것을 권장한다.
 */
let user2 = {
  name: '현사',
  age: 25,
};

// 1. Object.keys(): key 배열을 반환
for (let key of Object.keys(user)) {
  console.log(key);
}
console.log('');
// 2. Object.values(): value 배열을 반환
for (let value of Object.values(user)) {
  console.log(value);
}
console.log('');
// 3. Object.entries(): [key, value] 쌍의 배열을 반환
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}, ${value}`);
}
