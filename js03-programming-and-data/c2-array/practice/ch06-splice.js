/* =====06. splice 연습하기===== */

let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

fruits.splice(1, 1, '사과', '청포도');
fruits.splice(0, 1);
// console.log(fruits);

ages.splice(ages.length - 1, 1);
ages.splice(2, 2, 26, 28);
// console.log(ages);

numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);
// console.log(numbers);

/* let i = 0;
while (i < numbers.length) {
  if (numbers[i] % 2 !== 0) {
    numbers.splice(i, 1);
    continue;
  }
  i++;
}
console.log(numbers); */

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    numbers.splice(i, 1);
    i--;
  }
}
console.log(numbers);
