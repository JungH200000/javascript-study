/* =====14. while 반복문 실습 I===== */

// 방법1
let i = 1;

while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

console.log('');

// 방법2
let j = 1;

while (j <= 50) {
  console.log(j * 2 - 1);
  j += 1;
}

console.log('');

// 방법3
let k = 1;
while (k <= 100) {
  console.log(k);
  k += 2;
}
