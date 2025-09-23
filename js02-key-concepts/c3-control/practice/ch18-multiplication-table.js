/* =====18. 구구단 만들기===== */

// for문
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// while문
let i = 1;

while (i < 10) {
  let j = 1;
  while (j < 10) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}
