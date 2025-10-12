# axios 문법 익히기

`api.js` 파일에서 `fetch()` 대신 `axios`를 사용하도록 코드를 바꿔 보세요. `axios` instance를 사용하면 중복되는 코드를 많이 줄일 수 있습니다.

```js
// src/js06-js-requests/practice/api.js
// https://learn.codeit.kr/api/avatars

// GET /api/avatars
export async function getAvatars(params = {}) {
  const url = new URL('https://learn.codeit.kr/api/avatars');
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

// GET /api/avatars/:id
export async function getAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`);
  const data = await res.json();

  return data;
}

// POST /api/avatars
export async function createAvatar(avatarData) {
  const res = await fetch('https://learn.codeit.kr/api/avatars', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(avatarData),
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }
  const data = res.json();

  return data;
}

// PATCH /api/avatars/:id
export async function patchAvatar(id, avatarData) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(avatarData),
  });
  const data = res.json();

  return data;
}

// DELETE /api/avatar/:id
export async function deleteAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();

  return data;
}
```

```js
// src/js06-js-requests/practice/main.js
// https://learn.codeit.kr/api/avatars
import { getAvatars, getAvatar, createAvatar, patchAvatar, deleteAvatar } from './api.js';

const data1 = await getAvatars();
console.log(data1);

const data2 = await getAvatar(12);
console.log(data2);

const data3 = await createAvatar({
  hairType: 'long1',
  hairColor: 'black',
  skin: 'tone100',
  clothes: 'hoodie',
  accessories: 'none',
});
console.log(data3);

const data4 = await patchAvatar(7, {
  clothes: 'tshirtBasic',
  accessories: 'headset',
});
console.log(data4);
```
