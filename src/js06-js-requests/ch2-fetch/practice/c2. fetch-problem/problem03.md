# 아바타 정보 가져오기

`fetch()` 함수를 이용해서 Avatar API에 request를 보낼 것입니다.

> 참고1: [Avatar API Document](https://www.codeit.kr/tutorials/74/avatar-api-documentation)
>
> 참고2: `https://learn.codeit.kr/api/avatars/:id`라는 URL이 있습니다. 이 URL의 `:id` 부분에는 다양한 id 값이 들어갈 수 있다는 것을 의미합니다.

---

## `main.js` 파일의 설명대로 request를 보내고 각 response body를 출력하세요

```js
/* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. */
const res1 = // 여기에 코드를 작성하세요.

/* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. 쿼리 파라미터로 offset을 5, limit을 10으로 설정하세요. */
const res2 = // 여기에 코드를 작성하세요.

/* https://learn.codeit.kr/api/avatars/:id에 GET 리퀘스트를 보내세요. id를 7로 설정하세요. */
const res3 = // 여기에 코드를 작성하세요.
```

---

## 답안

```js
// src/js06-js-requests/practice/main03.js

/* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. */
const res1 = await fetch('https://learn.codeit.kr/api/avatars');
const data1 = await res1.json();

console.log(data1);

/* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. 쿼리 파라미터로 offset을 5, limit을 10으로 설정하세요. */
// 첫 번째 방법
const res2 = await fetch('https://learn.codeit.kr/api/avatars?offset=5&limit=10');
const data2 = await res2.json();

// 두 번째 방법
/* const url = new URL('https://learn.codeit.kr/api/avatars');
url.searchParams.append('offset', 5);
url.searchParams.append('limit', 10);

const res2 = await fetch(url);
const data2 = await res2.json(); */

console.log(data2);

/* https://learn.codeit.kr/api/avatars/:id에 GET 리퀘스트를 보내세요. id를 7로 설정하세요. */
const res3 = await fetch('https://learn.codeit.kr/api/avatars/7');
const data3 = await res3.json();

console.log(data3);
```
