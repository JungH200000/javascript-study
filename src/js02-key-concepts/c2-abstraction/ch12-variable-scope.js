/* =====12. 변수의 유효 범위, scope===== */
/**
 * ## 스코프(Scope)란?
 * 스코프(scope)는 범위, 영역이라는 뜻으로, 변수나 함수에 접근할 수 있는 '유효 범위'를 말한다.
 * 코드는 중괄호({ })나 함수등으로 스코프를 만드는데,
 * 변수는 자신이 선언된 스코프 내에서만 사용할 수 있다.
 * 변수의 유효 범위에 대해 살펴보자
 */

/**
 * ## 1. 스코프의 종류
 * JavaScript의 스코프는 세 가지로 나뉜다.
 *
 * - 글로벌(전역) 스코프(Global Scope)
 * 코드의 가장 바깥 영역. 어디서든 접근할 수 있다.
 *
 * - 함수 스코프(Function Scope)
 * 함수에 의해 만들어지는 영역. 함수 내부에서만 접근할 수 있다.
 *
 * - 블록 스코프(Block Scope)
 * if, for, function 등 중괄호({ })에 의해 만들어지는 영역
 * 블록문(Block Statement)라고도 한다.
 * 'let', 'const'로 선언된 변수는 이 규칙을 따른다.
 */

/**
 * ## 2. 전역 변수와 지역 변수
 */

/**
 * ## 글로벌(전역) 변수(Global Variable)
 * 전역 스코프에 선언되어 어디서든 사용 가능
 */
let globalVar = '글로벌 변수';

function myFunction() {
  // 블록(함수) 스코프에 선언된 지역 변수
  let localVar = '지역 변수';
  console.log(globalVar); // 글로벌 변수는 어디서든 접근 가능
  console.log(localVar); // 지역 변수는 자기 스코프 안에서 접근 가능
}

myFunction();
// console.log(localVar); // Error: lovalVar is not defined
// 지역 변수는 스코프 밖에서는 접근할 수 없어 오류가 발생한다.
console.log('');

/**
 * ## 3. 스코프 섀도잉(Scope Shadowing)
 * 내부 스코프에서 외부 스코프와 똑같은 이름의 변수를 선언하면,
   내부 스코프에서는 더 이상 외부 변수에 접근할 수 없게 된다.
   마치 내부 변수가 외부 변수를 가리는(shadowing) 것과 같다.
 */
let x = 12; // 글로벌 변수 x
function myFunction2() {
  let x = 20; // 로컬 변수 x => 글로벌 변수 x를 가림
  console.log(x); // 가장 가까운 x, 즉 로컬 변수 20이 출력됨
}

myFunction2(); // 로컬 변수 y => 20
console.log(x); // 글로별 변수 y => 12
