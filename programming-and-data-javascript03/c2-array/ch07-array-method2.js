/* =====07. 배열 메소드 II===== */

let members = ['청아', '지원', 'Jam', 'GIO', '청아', 'last member'];
/**
 * ## 1. 배열의 양 끝 요소 추가/삭제 : shift, pop, unshift, push
 * 배열의 양 끝의 요소를 추가/삭제하는 경우
   'splice' 메소드(Method)보다 더 간결하고 직관적으로 작성할 수 있는 메소드
 */

// shift(): 배열의 첫 요소를 삭제 (반환 값: 삭제된 요소)
let shiftedmember = members.shift();
console.log('shift 후: ', members);
console.log('shift로 삭제된 요소: ', shiftedmember);

// pop() : 배열의 끝 요소 삭제
let popedmembers = members.pop();
console.log('pop 후: ', members);
console.log('pop로 삭제된 요소: ', popedmembers);

// unshift(item) : 배열의 앞에 요소 추가
members.unshift('예아');
console.log('unshift 후: ', members);

// push(item) : 배열의 끝에 요소 추가
members.push('현아');
console.log('push 후: ', members);

console.log('');

/**
 * ## 2. 요소 탐색 및 확인
 *
 * ### 1) indexOf(item) / lastIndexOf(item)
 * 'indexOf' : 앞에서부터 요소를 찾아 첫 번째로 발견한 인덱스를 반환
 * 'lastIndexOf' : 뒤에서부터 요소를 찾아 첫 번째로 발견한 인덱스를 반환
 * 공통점 : 찾는 요소가 없으면 '-1'을 반환
 */
let members2 = ['청아', '지원', 'Jam', 'GIO', '청아', 'last member'];
console.log(members2.indexOf('청아')); // 0
console.log(members2.lastIndexOf('청아')); // 4
console.log(members2.indexOf('a')); // -1

/**
 * ### 2) includes(item)
 * 배열 안의 특정 요소가 포함되어 있는지 true/false로 확인
 * 
 * Tip: 단순히 요소의 존재만 궁금하다면, 
       'indexOf/lastIndexOf'보다 'includes'를 사용하는 것이 코드가 더 간결하고 의도가 명확하다.
 */
console.log(members2.includes('Jam')); // true
console.log(members2.includes('A')); // false

/**
 * ## 3. 배열의 순서 변경
 *
 * ### reverse()
 * 배열의 순서를 거꾸로 뒤집는 메소드
 *
 * 주의 : 이 메소드는 원본 배열을 직접 수정한다.
 */
console.log('reverse 전: ', members2);
members2.reverse();
console.log('reverse 후: ', members2);

/**
 * tip: 더 다양한 배열 메소드는 MDN 문서 참고
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
