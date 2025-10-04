/* =====15. 1년 뒤엔 얼마나 받을까?===== */
// 이자 금액(원) = 맡긴 금액(원, amount) * 맡기는 기간(년, term) * 이자율(%, rate) / 100
function interestCalculator(amount, term, rate) {
  return (amount * term * rate) / 100;
}

let myMoney = 3650000; // 맡긴 금액(원)
let saveTerm = 1; // 맡기는 기간(년)
let interestRate = 4; // 이자율(%)

// 실제 수령액
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totlaMoney = myMoney + myInterest;

console.log('맡긴 금액은 ' + myMoney + '원  입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totlaMoney + '원 입니다.');
