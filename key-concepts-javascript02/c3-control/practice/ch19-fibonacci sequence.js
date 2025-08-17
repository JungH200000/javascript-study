/* =====19. 피보나치 수열===== */
let previous = 0;
let current = 1; // 현재 항

for (let phraseCount = 1; phraseCount <= 50; phraseCount++) {
  console.log(current);

  let temp = current;
  current = current + previous;

  previous = temp;
}
