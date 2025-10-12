# 아바타 생성하기

POST request를 보내서 새로운 아바타를 생성해 봅시다.

```js
const avatarData = {
  hairType: 'short2',
  hairColor: 'brown',
  skin: 'tone200',
  clothes: 'hoodie',
  accessories: 'earbuds',
};
```

https://learn.codeit.kr/api/avatars에 POST request를 보내고 위 데이터를 request body에 포함해 주세요. 그리고 response로 돌아오는 결과를 출력하세요.

## 답안

```js
// src/js06-js-requests/practice/main.js
// https://learn.codeit.kr/api/avatars

const avatarData = {
  hairType: 'short2',
  hairColor: 'brown',
  skin: 'tone200',
  clothes: 'hoodie',
  accessories: 'earbuds',
};

const res = await fetch('https://learn.codeit.kr/api/avatars', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(avatarData),
});

const data = await res.json();

console.log(data);
```
