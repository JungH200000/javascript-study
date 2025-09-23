/* =====11. for 반복문 실습 I===== */
// 방법1
for (let i = 1; i <= 50; i++) {
  console.log(i * 2);
}

console.log('');

// 방법2
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log('');

// 방법3
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}
