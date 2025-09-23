/* =====13. 팀 나누기===== */

let groups = [
  ['영준', '캡틴'],
  ['태순', '우재'],
  ['재훈', '지웅'],
  ['윤형', '동욱'],
  ['규식', '소원'],
];

let teams = [
  [
    /* 이긴 사람 */
  ],
  [
    /* 진 사람 */
  ],
];

let i = 0;
while (i < groups.length) {
  for (let names of groups) {
    let winner = names[0];
    let loser = names[1];

    teams[0][i] = winner;
    teams[1][i] = loser;
    i++;
  }
}
console.log(teams);

console.log('');

// 방법2
let groups2 = [
  ['영준', '캡틴'],
  ['태순', '우재'],
  ['재훈', '지웅'],
  ['윤형', '동욱'],
  ['규식', '소원'],
];

let teams2 = [
  [
    /* 이긴 사람 */
  ],
  [
    /* 진 사람 */
  ],
];
/**
 * groups[0][0] = teams[0][0]
 * groups[0][1] = teams[1][0]
 * groups[1][0] = teams[0][1]
 * groups[1][1] = teams[1][1]
 * groups[2][0] = teams[0][2]
 * groups[2][1] = teams[1][2]
 *
 * groups의 각 인덱스를 뒤집어서 teams에 할당하면 될 것
 */
for (let i = 0; i < groups2.length; i++) {
  for (let j = 0; j < groups2[i].length; j++) {
    teams2[j][i] = groups2[i][j];
  }
}
console.log(teams2);
