// 03-07. 줄임말 대잔치

function firstWords() {
  //arguments[0]으로 잘라서 붙이기
  let words = '';

  for (const arg of arguments) {
    words = words + arg[0];
  }
  console.log(words);
}

firstWords('나만', '없어', '고양이');
firstWords('아니', '바나나말고', '라면먹어');
firstWords('만두', '반으로', '잘라먹네', '부지런하다');
firstWords('결국', '자바스크립트가', '해피한', '지름길');
firstWords('빨간색', '주황색', '노란색', '초록색', '파란색', '남색', '보라색');
