/* =====03. else if문===== */

let temperature = 150;

// if문과 else문
if (temperature <= 0) {
  console.log('물이 업니다.');
} else {
  if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.');
  } else {
    if (temperature < 150) {
      console.log('물이 끓습니다.');
    } else {
      console.log('물이 모두 수증기가 되었습니다.');
    }
  }
}

// else if문
if (temperature <= 0) {
  console.log('물이 업니다.');
} else if (temperature < 100) {
  console.log('물이 얼지도 끓지도 않습니다.');
} else if (temperature < 150) {
  console.log('물이 끓습니다.');
} else {
  console.log('물이 모두 수증기가 되었습니다.');
}
