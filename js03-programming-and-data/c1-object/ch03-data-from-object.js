/* =====03. 객체에서 데이터 접근하기===== */

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
 * ## 1. 점 표기법 (Dot Notation)
 * 'objectName.propertyName' 형태로 접근하는 가장 일반적이고 간편한 방식
 *
 * 하지만 key(propertyName)에 띄어쓰기나 특수문자(-)가 포함되는 등,
 * 변수 이름 규칙에 맞지 않는 key에는 사용할 수 없는 단점이 있다.
 */
console.log(user.name); // 배고파
console.log(user.child); // null
// console.log(user.born Year); // SyntaxError: Unexpected identifier 'Year'
// born과 Year를 다른 단어로 인식
console.log('');

/**
 * ## 2. 대괄호 표기법
 * 'objectName['propertyName']' 형태로 접근하며, 
    key(propertyName)를 반드시 따옴표로 감싸줘야 한다.
 * 점 표기법으로 접근할 수 없는 key(띄어쓰기, 하이픈 포함 등)에 접근할 때 유용
 * 
 * ### 대괄호 표기법의 핵심: 동적 접근
 * 대괄호 안에는 변수나 계산식을 넣어 동적으로 property에 접근할 수 있다.
 */
// (1) 기본
console.log(user['name']); // 배고파

// (2) 점 표기법으로 불가능했던 key에 접근
console.log(user['born Year']); // 2000

// (3) 대괄호 안에서 계산식 사용
console.log(user['born ' + 'Year']); // 2000

// (4) 변수를 key로 사용
let propertyName = 'name';
console.log(user[propertyName]); // 배고파, user['name']과 동일

console.log('');

/**
 * ## 3) 중첩 객체 접근하기
 * 점 표기법과 대괄호 표기법을 섞어서 체인(chain)처럼 연결하여 접근할 수 있다.
 * 특별한 방법 없이 property name을 계속 연결해서 접근하면 된다.
 */
console.log(user.location.city); // 구미시
console.log(user.location['province-loc']); // 경상북도
console.log(user['location']['city']); // 구미시
console.log('');
/**
 * ## 4. 주의: 존재하지 않는 property에 접근할 경우
 * 존재하지 않는 property에 접근하면 Error가 발생하는 것이 아니라,
   '값이 정해지지 않았다'는 의미의 'undefined'가 반환된다.
 */
console.log(user.age); // undefined
