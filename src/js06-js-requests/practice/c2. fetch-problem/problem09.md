# API 오류 메시지 보여주기

request는 성공했지만 response의 상태 코드가 실패를 나타낼 경우 오류를 throw하도록 createAvatar() 함수를 수정했습니다.

```js
// api.js
export async function createAvatar(avatarData) {
  const res = await fetch('https://learn.codeit.kr/api/avatars', {
    method: 'POST',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const message = // 여기에 코드를 작성하세요.
      throw new Error(message);
  }

  const data = await res.json();
  return data;
}
```

Avatar API는 오류가 발생했을 경우 오류 메시지를 바디에 전달합니다. 이 오류 메시지는 JSON이 아닌 일반 문자열이기 때문에 res.json() 대신 res.text()를 사용해야 하는데요. 이때res.text()도 결과를 Promise에 담아 줍니다. 이걸 활용해서 오류 메시지를 message 변수에 할당해 주세요. 그러면 상황에 맞는 자세한 오류 메시지를 보여 줄 수 있습니다.

```js
// src/js06-js-requests/practice/main.js
// https://learn.codeit.kr/api/avatars
import { getAvatars, getAvatar, createAvatar, patchAvatar, deleteAvatar } from './api.js';

try {
  const newAvatar = await createAvatar({
    hairColor: 'brown',
    skin: 'tone200',
    clothes: 'hoodie',
    accessories: 'earbuds',
  });
  console.log(newAvatar);
} catch (error) {
  console.log(error.message);
}

try {
} catch (error) {
  const newAvatar = await createAvatar({
    hairType: 'short2',
    hairColor: 'green',
    skin: 'tone200',
    clothes: 'hoodie',
    accessories: 'earbuds',
  });
  console.log(newAvatar);
  console.log(error.message);
}
```

첫 번째 리퀘스트는 필수 필드인 hairType이 없고 두 번째 리퀘스트는 hairColor를 유효하지 않은 값인 green으로 설정하고 있습니다. 오류 메시지를 에러 객체에 잘 전달했다면 아래와 같은 결과가 출력돼야 합니다.

```terminal
Field 'hairType' is required
Value for 'hairColor' must be one of black,brown,blonde
```

## 답안

```js
// src/js06-js-requests/practice/api.js
// https://learn.codeit.kr/api/avatars
...
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
```

```js
// src/js06-js-requests/practice/main.js
// https://learn.codeit.kr/api/avatars
import { getAvatars, getAvatar, createAvatar, patchAvatar, deleteAvatar } from './api.js';

try {
  const newAvatar = await createAvatar({
    hairColor: 'brown',
    skin: 'tone200',
    clothes: 'hoodie',
    accessories: 'earbuds',
  });
  console.log(newAvatar);
} catch (error) {
  console.log(error.message);
}

try {
  const newAvatar = await createAvatar({
    hairType: 'short2',
    hairColor: 'green',
    skin: 'tone200',
    clothes: 'hoodie',
    accessories: 'earbuds',
  });
  console.log(newAvatar);
} catch (error) {
  console.log(error.message);
}
```
