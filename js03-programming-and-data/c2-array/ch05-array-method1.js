/* =====05. 배열 메소드 I===== */

let members = ['청아', '지원', 'Jam', 'GIO', 'last member'];

console.log(members);
delete members[members.length - 1];
console.log(members);

/**
 * ## 1. splice
 * 빈 공간 없이 배열(Array)의 요스(Element)를 삭제하는 메소드(Method)
 *
 * ### 배열이름.splice(startIndex);
 * 삭제하기로 지정한 인덱스 이후의 모든 요소를 삭제함
 */
members.splice(members.length - 1);
console.log(members);

members.splice(2);
console.log(members); // 2번 인덱스부터 끝까지 삭제됨

/**
 * ### 배열이름.splice(startIndex, deleteCount);
 * 지정한 개수의 인덱스만 삭제함
 */
let members2 = ['청아', '지원', 'Jam', 'GIO', 'last member'];

members2.splice(2, 2); // 2번 인덱스부터 2개의 인덱스 삭제
console.log(members2);

/**
 * ### 배열이름.splice(startIndex, deleteCount, item);
 * 삭제한 요소 자리에 요소(item) 추가됨
 * deleteCount의 개수만큼 item을 입력하면 배열을 수정하는 것과 같음
 */
let members3 = ['청아', '지원', 'Jam', 'GIO', 'last member'];
members3.splice(2, 2, 'Han', 'Zou');
console.log(members3);

/**
 * ### 배열이름.splice(startIndex, 0, item);
 * deleteCount parameter를 0으로 만들면 startIndex 자리에 item을 요소로 추가할 수 있다.
 */
let members4 = ['청아', '지원', 'Jam', 'GIO', 'last member'];
members4.splice(2, 0, 'HHHhh');
console.log(members4);
