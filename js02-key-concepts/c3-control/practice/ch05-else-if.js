/* =====05. 서열 정리===== */
function whatShouldICallYou(yourAge, yourGender) {
  let myAge = 26;
  let myGender = 'male';

  let callOrderBrother = '형';
  let callOrderSister = '누나';
  let callFriend = '친구';
  let callYoungerBrother = '남동생';
  let callYoungerSister = '여동생';

  if (yourAge === myAge) {
    return callFriend;
  } else if (yourAge < myAge) {
    if (yourGender === 'male') {
      return callYoungerBrother;
    } else if (yourGender === 'female') {
      return callYoungerSister;
    }
  } else if (yourAge > myAge) {
    if (yourGender === 'male') {
      return callOrderBrother;
    } else if (yourGender === 'female') {
      return callOrderSister;
    }
  }
}

let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
