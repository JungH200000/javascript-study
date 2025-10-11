# 아바타 수정, 삭제하기

API를 호출하는 함수들을 `api.js` 파일에 모아 놨습니다. 아바타를 수정하는 `patchAvatar()` 함수와 아바타를 삭제하는 `deleteAvatar()` 함수를 완성해 주세요.

`patchAvatar()` 함수는 `https://learn.codeit.kr/api/avatars/:id`에 PATCH 리퀘스트를 보내고 수정할 데이터를 리퀘스트 바디로 전달합니다. 이때 :id 부분에는 id 값이 들어갑니다. 리퀘스트가 성공하면 수정된 아바타 객체를 돌려줍니다.

`deleteAvatar()` 함수는 `https://learn.codeit.kr/api/avatars/:id`에 DELETE 리퀘스트를 보내고 바디로는 아무 내용도 전달하지 않습니다. 리퀘스트가 성공하면 삭제된 아바타 객체를 돌려줍니다.

## 답안

```js
// src/js06-js-requests/practice/api.js

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

let avatar = await createAvatar({
  hairType: 'long1',
  hairColor: 'black',
  skin: 'tone300',
  clothes: 'collarBasic',
  accessories: 'headset',
});
avatar = await patchAvatar(avatar.id, {
  hairType: 'short3',
  hairColor: 'blonde',
});

console.log(avatar);

await deleteAvatar(avatar.id);
```
