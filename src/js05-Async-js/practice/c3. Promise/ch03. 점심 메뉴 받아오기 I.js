// 다양한 음식 메뉴가 있는 사이트: https://learn.codeit.kr/api/menus

const response = await fetch('https://learn.codeit.kr/api/menus');
const data = await response.json();

console.log(data);
