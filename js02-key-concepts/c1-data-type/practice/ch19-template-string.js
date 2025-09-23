/* =====19. 템플릿 문자열 실습===== */
function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`);
}

calcWage('김윤식', 208, 11340);
