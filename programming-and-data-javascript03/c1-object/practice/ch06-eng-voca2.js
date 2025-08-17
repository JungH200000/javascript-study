/* =====06. 영어 단어장 II===== */

let myVoca = {
  function: '함수',
  variable: '변수',
  constant: '상수',
  local: '지역의',
  global: '전반적인',
};

// 단어 삭제
delete myVoca.function;
delete myVoca.constant;
delete myVoca.local;

console.log(myVoca);
console.log(myVoca.constant);

// 단어 추가
myVoca.extend = '확장하다';
myVoca.export = '내보내다';
myVoca.import = '불러오다';
myVoca['default value'] = '기본값';

console.log(myVoca);
console.log(myVoca.export);

console.log(myVoca['default value']);
