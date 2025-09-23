/* =====18. 템플릿 문자열===== */
/**템플릿 문자열(Template Literals(Strings))
 * 특정한 형식을 가진 문자열
 * template : 일정한 틀, 형식
 */
let year = 2000;
let month = 10;
let day = 29;

console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 입니다.');

/**템플릿 문자열을 사용하면
 * 코드를 가독성 있고, 쉽게 작성할 수 있다.
 */

/**템플릿 문자열을 만드는 방법
 * ``(백틱)과 ${}을 사용
 * 위의 예시를 템플릿 문자열을 사용해서 표현하면
 */
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

// 예시
let myNumber = 3;

function getTwice(x) {
  return x * 2;
}

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`);
