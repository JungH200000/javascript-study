/*=====13. 나의 체질량 지수는?=====*/
// 체중(kg), 신장(cm), 체질량지수=체중/(신장*신장/10000)
function bmiCalculator(name, weight, height) {
  let bmi = weight / ((height * height) / 10000);

  console.log(name + '님의 체질량지수는 ' + bmi + '입니다.');
}

bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);
