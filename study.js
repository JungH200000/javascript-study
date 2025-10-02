const CUT_OFF = 80;

function passChecker(score) {
  //return score > CUT_OFF ? '합격!' : '불합격!';
  if (score > CUT_OFF) {
    const msg = '합격!';
    return msg;
  } else {
    for (let i = 0; i < 3; i++) {
      console.log(i);
    }
    return '불합격!';
  }
}

console.log(passChecker(70));
