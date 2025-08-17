/*=====12. 여러 개의 파라미터=====*/
/** multi parameter
 * function 함수이름(parameter1, parameter2, ...) {
 *   ...
 * }
 */

// 1. 예시1
// 함수 선언
function printSum(num1, num2) {
  console.log(num1 + num2);
}

// 함수 호출
printSum(10, 5);
printSum(100, 503);
printSum(3023, 1394);

// 2. 예시2 - 프로필을 입력받고 출력하는 함수
function introduce(name, birth, nationality, job) {
  console.log('안녕하세요! 반갑습니다.');
  console.log('제 이름은 ' + name + ' 입니다. ');
  console.log('생년월일은 ' + birth + ' 이고,');
  console.log('국적은 ' + nationality + ' 입니다');
  console.log('직업은 ' + job + ' 입니다.');
  console.log('잘 부탁드립니다!');
}

introduce('이청아', '78-12-10', '한국', 'AI 엔지니어');
