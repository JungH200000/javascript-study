/* =====07. switch문 vs if문===== */

/**
 * 모든 'switch'문은 'if...else if...else' 구조로 바꿀 수 있다.
 * 하지만 두 문법은 각각 더 적합한 상황이 있어, 용도에 맞게 사용하는 것이 좋다.
 */

// 아래의 switch문과 if문은 동일한 동작을 한다.

let myChoice = 5;

// switch문: myChoice의 '값'에 따라 분기
switch (myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  case 5:
    console.log('무시한다는 것을 선택한 당신, 참으로 냉정하시군요.');
    break;
  default:
    console.log('1에서 5사이의 숫자를 선택해 주세요.');
}

// if문: 각 조건식을 독립적으로 평가
if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else if (myChoice === 5) {
  console.log('무시한다는 것을 선택한 당신, 참으로 냉정하시군요.');
} else {
  console.log('1에서 5사이의 숫자를 선택해 주세요.');
}

/**
 * ## 언제 무엇을 사용해야 할까??
 *
 * ### switch문이 더 효과적인 경우
 * 하나의 변수를 여러 개의 '특정 값'과 비교할 때 사용한다.
 * 코드가 명확해지고, "이 변수의 상태에 따라 다른 동작을 한다"라는 의도를 파악하기 쉽다.
 *
 * ### if문이 더 효과적인 경우
 * '범위'를 비교하거나, 여러 변수를 조합하는 등 '복잡한 조건'을 확인할 때 사용
 * 'switch'문은 값의 일치 여부만 확인하지만, 'if'문은 훨씬 유연한 조건식을 만들 수 있다.
 */
