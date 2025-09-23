/* =====10. 옵셔널 파라미터===== */

// parameter(매개변수)가 있는 함수에 argument(인자)를 전달하지 않으면,
// 해당 매개변수는 'undefined'가 된다.
function sayHello(name) {
  console.log(`안녕하세요, ${name}님!`);
}
sayHello('청아'); // 안녕하세요, 청아님!
sayHello(); // 안녕하세요, undefined님!

console.log('');

/** 
 * ## 기본 매개변수 (Default Parameter)
 * 
 * parameter에 전달된 argument가 없거나 'undefined'일 경우,
   지정된 기본값으로 자동 설정하는 기능
 * 흔히, 옵셔널 파라미터(Optinal Parameter)라고 부른다.
 */
function introduce(name, age, nationality = '한국') {
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}

// 1) 모든 argument를 전달하는 경우 (기본값이 사용되지 않음)
introduce('청아', 24, '영국');
console.log('');

// 2) nationality argument를 생략한 경우 (기본값 '한국'이 사용됨)
introduce('현사', 14);
console.log('');

/**
 * ## 주의: 기본 parameter의 위치
 *
 * 기본 paramter는 가급적 parameter 목록의 "가장 뒤에 배치"하는 것이 좋다.
 * 중간에 위치하면, 그 값을 생략하고 싶을 때 혼란이 발생하기 때문
 */
