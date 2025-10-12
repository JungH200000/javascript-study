# axios 오류 처리하기

`axios`는 request 자체가 실패하거나 response의 상태 코드가 실패(4XX, 5XX)를 나타날 때 모두 Promise를 reject합니다. 그리고 두 번째 경우 돌아온 response를 에러 객체에 전달합니다.

`main.js` 파일에 있는 `catch`문 안에서 response의 상태 코드와 바디 내용을 출력해 보세요.

```js
// src/js06-js-requests/practice/main.js
// https://learn.codeit.kr/api/avatars
import { createAvatar } from './api.js';

try {
  const data = await createAvatar({
    hairType: 'long5',
    hairColor: 'black',
    skin: 'tone100',
    clothes: 'hoodie',
    accessories: 'none',
  });
  console.log(data);
} catch (e) {
  if (e.response) {
    // 여기에 코드를 작성하세요.
  }
}
```

```terminal
400
Value for 'hairType' must be one of none,short1,short2,short3,long1,long2,long3
```
