/*=====06. 작명 가이드=====*/
// 변수를 만들 때 이름을 아무렇게나 지으면 안된다.
// 변수의 이름을 지을 때는 아래의 몇 가지 규칙을 따르면 좋다.

/** 1. 꼭 지켜야 하는 규칙
 * 이 규칙들은 지키지 않으면 오류가 발생한다.
 * 
 * 1) JavaScript 식별자는 '문자(a-z, A-Z)', '밑줄(_)', '달러 기호($)'로 시작해야 한다.
       두 번째 글자부터는 '숫자(0-9)'도 가능하다

 * 2) '대문자'와 '소문자'를 구별해야 한다.
       ex) myname과 myName은 다른 이름이다.

 * 3) '예약어'는 사용하면 안 된다.
       ex) if, for, let 등 */

/** 2. 지키면 좋은 약속
 * 이 약속들을 지키지 않아도 오류가 발생하지는 않지만, 프로그래밍은 혼자 하는 게 아니기 때문에
   여러 사람과 협력하고, 소통을 원할히 하기 위해서는 아래와 같은 약속들을 지키는 것이 좋다.
 
 * 1) 의미 없는 이름은 좋지 않다. => 적절한 이름을 짓자.
       ex) let a, b, d;
 *     복잡한 프로그램을 만들 때 변수와 함수를 적절히 활용해야 하는데, 예시처럼 의미 없이 설정되어 있다면
       나중에 작성한 코드를 볼 때, 공동 작업할 때 매우 불편한 상황이 발생한다.

 * 2) 너무 추상적인 이름은 좋지 않다. => 구체적인 이름을 짓자.
       ex) let name;
       상황에 따라 그냥 name이라는 변수명이 적합한 상황이 있을 수도 있지만, 
       프로그램을 만들다보면 다양한 이름들이 있기 때문에 name이라는 이름은 너무 추상적일 수 있다.

 * 3) 모든 변수 이름은 'camelCase'로 작성하는 것이 좋다.
       변수 명에는 띄어쓰기가 불가능하기 때문에, 띄어쓰기 역할을 대신할 방법이 필요하다.
       그 중 하나가 'camelCase'이다
      
    > camelCase란
       첫 번째 글자는 소문자로 하고, 띄어쓰기가 있는 각 단어의 첫 문자를 대문자로 표기하는 방식이다.
       ex) let badVariableName 등 */

/** 그 외 더 좋은 코드 스타일을 위한 다양한 약속들이 존재한다.
 * 이러한 약속들을 '스타일 가이드' 또는 '코딩 컨벤션'이라고 부른다.
 * 아래에는 몇몇 유명한 그룹에서 JavaScript 코드를 쓸 때 추천하는 방식을 정리해 놓은 링크이다.
 *
 * > Airbnb의 JavaScript 스타일 가이드
 * https://github.com/airbnb/javascript?tab=readme-ov-file#type-casting--coercion
 * > w3schools 스타일 가이드
 * https://www.w3schools.com/js/js_conventions.asp
 * > StandardJS 스타일 가이드
 * https://standardjs.com/rules-kokr.html
 * > Idiomatic.JS 스타일 가이드
 * https://github.com/rwaldron/idiomatic.js/tree/master/translations/ko_KR
 *
 *
 */
