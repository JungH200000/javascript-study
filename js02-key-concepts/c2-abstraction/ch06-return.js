/* =====06. return문 제대로 이해하기 ===== */
/**
 * 함수에서 return 문은 어떤 값을 되돌려 주는 output의 역할을 하고,
 * 함수 내부에서 return 문이 나오면 함수의 실행은 해당 지점에서 종료된다.
 */
// 함수 선언
function square(x) {
  console.log('retrun 전');
  return x * x;
  console.log('return 후'); // 실행되지 않는 코드(Dead Code)
}

/**
 * 함수에서 return 문은 두 가지 핵심적인 역할을 수행한다.
 * 
 * ## 1. 값의 반환
 * 함수가 계산한 결과 값을 함수를 호출한 곳으로 돌려주는(반환하는) 출력(output) 창구
 * ex) 'square(3)'을 호출하면 'return x * x'가 실행되어 
        그 결과인 9가 함수가 호출된 자리로 돌아온다.
 * 
 * ## 2. 함수 실행 종료
 * 함수 내부의 코드는 return 문을 만나는 즉시 실행을 멈추고 종료된다.
 * 이 때문에 return 문 뒤에 오는 코드는 절대 실행될 수 없으며, 이를 'Dead Code'라고 부른다.
 */

console.log('함수 호출 전');
// 함수 호출: 'square(3)'이 실행되고, 그 반환 값인 9가 console.log()에 전달된다.
console.log(square(3));
console.log('함수 호출 후');
