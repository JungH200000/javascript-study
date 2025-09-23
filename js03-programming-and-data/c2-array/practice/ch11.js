/* =====11. 투표 집계하기===== */

// prettier-ignore : prettier 무시하는 방법
// prettier-ignore
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];
let voteCounter = {};

for (let name of votes) {
  if (name in voteCounter) {
    voteCounter[name]++;
  } else {
    voteCounter[name] = 1;
  }
}
console.log(voteCounter);
