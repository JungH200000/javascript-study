/* =====16. break와 continue===== */

/**
 * 'break'와 'continue'는 반복문 안에서 실행 흐름을 제어하는 특별한 키워드
 */

/**
 * ## 1. break
 * 'break'는 반복문을 즉시 강제로 종료시킨다.
 * 재생 중인 플레이리스트에서 '정지' 버튼을 누르는 것과 같다.
 * 'break'가 실행되면, 반복문의 조건이 여전히 참이어도 더 이상 반복하지 않고 반복분 밖으로 빠져나온다.
 */

// while문
let i = 1;

while (i <= 10) {
  console.log(i);

  if (i === 5) {
    break;
  }
  i++;
}
console.log('');

// for문
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}
console.log('');

/**
 * ## 2. continue
 * 'continue'는 현재 진행 중인 반복을 즉시 멈추고, 다음 반복으로 건너뛴다.
 * 플레이리스트에서 '다음 곡' 버튼을 누르는 것과 같다.
 */

// for문
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
console.log('');

/**
 * ### while 문에서 continue 사용 시 주의사항
 * 'continue'는 증감문(j++)까지 건너뛸 수 있어 무한 루프에 빠질 위험이 있다.
 * 따라서 'continue'를 실행하기 전에 증감 처리를 먼저 해주는 것이 안전하다.
 */
// while문
let j = 0;

while (j <= 10) {
  j++;
  if (j % 2 === 0) {
    continue;
  }
  console.log(j);
}
