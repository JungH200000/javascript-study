/* =====06. 이자 계산기===== */
/**
 * 2년 만기 적금
 * 이자율 4.3%
 * 매월 80만원 저축
 */

function interestCalculator(rate, payment, term) {
  let interest = Number(((((payment * term * (term + 1)) / 2) * rate) / 12).toFixed(1));
  console.log(interest);
}

interestCalculator(0.043, 800000, 24);
interestCalculator(0.043, 600000, 24);
