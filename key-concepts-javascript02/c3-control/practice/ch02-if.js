/* =====02. 롤러코스터, 탈 수 있을까?===== */
function checkHeight(height) {
  const LIMIT_HEIGHT = 140;
  let passMessage = '탑승이 가능합니다.';
  let failMessage = '탑승이 불가능합니다.';

  if (height >= LIMIT_HEIGHT) {
    console.log(passMessage);
  } else {
    console.log(failMessage);
  }
}

checkHeight(140);
checkHeight(135);
checkHeight(170);
