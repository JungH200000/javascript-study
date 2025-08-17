/* =====05. 객체 다루기(추가, 수정, 삭제, 확인)=====  */

let user = {
  name: '배고파',
  'born Year': 2000,
  likeFood: '만두',
  military: true,
  child: null,
  location: {
    'province-loc': '경상북도',
    city: '구미시',
  },
};

/**
 * ## 1. 객체 (Object)의 property 추가 및 수정
 * 객체의 property를 추가하거나 수정하는 방법은 동일하다.
 * 존재하지 않는 key에 값을 할당하면 '추가'되고,
 * 이미 존재하는 key에 값을 할당하면 '수정(덮어쓰기)'이 된다.
 */

// 수정 (Update)
console.log(user.name); // 배고파

user.name = '나는 아직 배고파';
console.log(user.name); // 나는 아직 배고파

// 추가 (Add)
console.log(user.university); // undefined
user.university = '서울대학교';
console.log(user.university); // 서울대학교
console.log(user); // university: 서울대학교 추가

console.log('');

/**
 * ## 2. 객체 (Object)의 property 삭제
 * 'delete' 연산자를 사용하면 객체의 property를 간단하게 삭제할 수 있다.
 */
console.log(user.university); // 서울대학교
delete user.university;
console.log(user.university); // property 삭제됨 => undefined
console.log(user); // university: 서울대학교 삭제됨

console.log('');

/**
 * ## 3. 객체의 property 존재 여부 확인 방법
 * 특정 property가 객체에 있는지 확인하는 방법은 크게 두 가지이다.
 *
 * ### 1) 'in' 연산자 사용 (가장 확실한 방법)
 * 'key'의 존재 여부 자체를 확인한다.
 * property 값이 'undefined여도, key만 존재하면 'true'를 반환한다.
 */
console.log('name' in user); // true (name key가 존재)
console.log('university' in user); // false (university key는 존재하지 않음)

if ('university' in user) {
  console.log(`name 값은 ${user.name}입니다.`);
} else {
  console.log(`name property는 존재하지 않습니다.`);
}

console.log('');

/**
 * ### 3) 'undefined'와 비교 (주의 필요)
 * property에 접근한 결과가 'undefined'가 아닌지로 존재 여부를 판단할 수 있다.
 * 대부분의 경우 잘 동작하지만, property의 값이 원래부터 'undefined'인 경우에는
   property가 없다고 잘못 판단할 수 있는 단점이 있다.
 */
let test = {
  propName1: 'value',
  propName2: undefined,
};

console.log('propName1' in test); // true
console.log(test.propName1 !== undefined); // true

console.log('propName2' in test); // true
console.log(test.propName2 !== undefined); // false
