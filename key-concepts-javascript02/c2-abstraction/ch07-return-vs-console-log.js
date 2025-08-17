/* =====07. return과 console.log의 차이===== */

// console.log: 값을 console 창에 '보여주는' 기능만 할 뿐, 함수가 결과 값을 가지게 하지는 않는다.
function printSquare(x) {
  console.log(x * x);
}

// return: 함수가 특정 값을 '반환하게' 만들어, 그 결과 값을 다른 곳에서 사용할 수 있게 한다.
function getSquare(x) {
  return x * x;
}

// 실행 분석

// 1. getSquare(3) 호출
console.log(getSquare(3));
// getSquare(3)이 9라는 '값'이 되고, console.log에 의해 9가 출력된다.

// 2. console.log(printSquare(3)); 호출
console.log(printSquare(3));
/**
 * 위 코드는 아래 순서로 실행된다.
 * (1) printSquare(3) 함수가 먼저 실행된다.
 * (2) 함수 내의 console.log(3 * 3)에 의해 console에 9가 출력된다.
 * (3) printSquare 함수는 return 문이 없으므로, 기본값인 'undefined'를 반환한다.
 * (4) 반환된 'undefined' 값이 바깥의 console.log에 의해 출력된다.
 */
