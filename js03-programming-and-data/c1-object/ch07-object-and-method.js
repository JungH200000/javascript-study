/* =====07. 객체와 메소드===== */

/**
 * ## 1. 메소드 (Method)란
 * 객체는 데이터(속성)뿐만 아니라 기능(동작)도 가질 수 있다.
 * 이때 객체의 property 값으로 할당된 함수를 특별히 '메소드'라고 부른다.
 * 즉, 메소드는 '객체에 소속된 함수'이다..
 */
let greetings = {
  sayHello: function () {
    console.log('Hello!');
  },
  sayHi: function (name) {
    console.log(`Hi!, ${name}`);
  },
  sayBye: function () {
    console.log('Bye!');
  },
};

/**
 * ## 2. 메소드 호출하기
 * 객체의 property에 접근하는 방식(점/대괄호 표기법)과 동일하지만,
   함수이므로 마지막에 소괄호()를 붙여 실행한다.
 *
 * tip: 우리가 흔히 사용하는 console.log()도 사실은
 *      'console'이라는 객체의 'log'라는 메소드를 호출하는 것
 */
// 점 표기법
greetings.sayHello();
greetings.sayHi('청아');

// 대괄호 표기법
greetings['sayBye']();
greetings['sayHi']('지원');

/**
 * ## 3. 메소드를 사용하는 이유와 'this'
 * 메소드는 객체의 고유한 데이터(property)를 사용하여 동작을 수행하기 위해 사용된다.
 * 이때 메소드 안에서 '객체 자신'을 가리키는 특별한 키워드가 바로 'this'이다.
 */
let rectAngle = {
  width: 30,
  height: 50,
  getArea: function () {
    return this.width * this.height;
  },
};

let triAngle = {
  width: 15,
  height: 40,
  getArea: function () {
    return (this.width * this.height) / 2;
  },
};
console.log(rectAngle.getArea()); // 1500
console.log(triAngle.getArea()); // 300

/**
 * ### 왜 'this'를 사용할까?
 * 'rectAngel.width'처럼 객체 이름을 직접 쓰면, 만약 객체를 담은 변수 이름이 'let ret1 = rectAngle;'처럼
   바뀔 경우 코드가 동작하지 않는 문제가 발생한다.
 * 
 * 'this'를 사용하면 메소드가 소속된 객체를 동적으로 가리키므로,
   변수 이름이 바뀌어도 안전하고 재사용 가능한 코드를 만들 수 있다.
 *  
 * ### ES6 메소드 축약형
 * 현대 JavaScript에서는 'function' 키워드를 생략하고 더 간결하게 메소드를 선언할 수 있다.
 */
const user = {
  name: '현사',
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  },
};
user.sayHi();
