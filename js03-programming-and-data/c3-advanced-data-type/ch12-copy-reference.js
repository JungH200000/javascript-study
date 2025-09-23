/* =====10. 참조형 복사하기 (얕은 복사)===== */

/**
 * ## 1. 얕은 복사 (Shallow Copy)란?
 *
 * 참조형 데이터를 복사할 때, 객체 자체를 통째로 복사하는 것이 아니라
 * 가장 바깥쪽의 객체(혹은 배열)만 복사하는 것을 '얕은 복사'라고 합니다.
 *
 * 얕은 복사를 통해 만들어진 새로운 변수는 원본과는 다른 주소를 참조하게 되므로,
 * 서로에게 영향을 주지 않는 독립적인 객체가 됩니다.
 */

/**
 * ## 2. 배열 얕은 복사
 *
 * ### 1) 전개 구문 (Spread Syntax) - 가장 추천
 * `...`을 사용하여 배열의 모든 요소를 펼쳐 새로운 배열을 만듭니다. 가장 간결하고 가독성이 좋습니다.
 */
let numbers1 = [1, 2, 3];
let numbers2 = [...numbers1];

numbers2.push(4);
console.log('원본: ', numbers1); // [ 1, 2, 3 ]
console.log('복사본: ', numbers2); // [ 1, 2, 3, 4 ]

/**
 * ### 2) `slice()` 메소드
 * `slice()` 메소드에 아무 인수를 전달하지 않으면, 배열 전체가 복사된 새로운 배열을 반환합니다.
 */
let numbers3 = numbers1.slice();
console.log('slice로 복사: ', numbers3);

/**
 * ## 3. 객체 얕은 복사
 *
 * ### 1) 전개 구문 (Spread Syntax) - 가장 추천
 * 현업에서 자주 사용됨
 */
let user1 = {
  userName: '청아',
  birth: 1992,
};
let user2 = { ...user1 };

user2.userName = '지원';
console.log('원본: ', user1); // { userName: '청아', birth: 1992 }
console.log('복사본: ', user2); // { userName: '지원', birth: 1992 }

/**
 * ### 2) `Object.assign()` 메소드
 * `Object.assign(새객체, 복사할객체)` 형태로 사용합니다.
 * 현업에서 자주 사용됨
 */
let user3 = Object.assign({}, user1);
console.log('assign으로 복사: ', user3);

/**
 * ### 3) for 문
 *
 * 얕은 복사가 '어떻게' 동작하는지 내부 원리를 보여줍니다.
 */

let user4 = {};

for (let key of Object.keys(user1)) {
  user4[key] = user1[key];
}

user4.userName = '원영';
console.log(user1, user4);

/**
 * ### 4) 함수 작성
 *
 * 새로운 객체가 추가되면 for문을 수정해야 하므로 함수를 만드는 것이 더 유용합니다.
 * 얕은 복사가 '어떻게' 동작하는지 내부 원리를 보여줍니다.
 */
function cloneObject(object) {
  let temp = {}; // 임시 빈 객체

  for (let key of Object.keys(object)) {
    temp[key] = object[key];
  }

  return temp;
}

let user5 = cloneObject(user1);
user5.userName = '예정';

console.log(user1, user5);

/**
 * ## 4. 얕은 복사의 한계와 깊은 복사(Deep Copy)
 *
 * 얕은 복사는 객체나 배열 안에 또 다른 객체나 배열이 중첩된 경우에는 문제가 발생합니다.
 * 가장 바깥쪽 껍데기만 복사하고, "내부의 참조형 값은 주소만 복사"하기 때문입니다.
 */
let userA = {
  name: '청아',
  location: { city: '구미' }, // 중첩된 객체
};
let userB = { ...userA }; // 얕은 복사
userB.location.city = '서울';

console.log('원본: ', userA); // 서울
console.log('복사본: ', userB); // 서울

/**
 * 내부의 모든 참조 관계까지 완전히 복제하는 것을 "깊은 복사(Deep Copy)"라고 하며,
 * 이는 `JSON.parse(JSON.stringify(object))`나 Lodash 같은 외부 라이브러리를 통해 구현할 수 있습니다.
 */
