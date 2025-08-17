/* =====12. Date 객체===== */

/**
 * ## 1. Date 객체란?
 * 'Date' 객체는 JavaScript 내장 객체(Standard built-in objects)로,
 * 날짜와 시간 정보를 다루기 위해 사용된다.
 * 'new Date()' 생성자를 통해 특정 시점의 날짜와 시간 정보를 가진 객체를 만들 수 있다.
 */

/**
 * ## 2. Date 객체 생성하기
 * 'new Date()' 생성자는 여러 가지 방법으로 호출할 수 있다.
 *
 * 참고 사이트: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

// 1). 인수 없음: 현재 시각
const now = new Date(); // 영국과 9시간 시차로 +09:00:00
console.log(now);

// 2). new Date(milliseconds)
// 1970년 1월 1일 00:00:00 UTC(에포크 타임)로부터 경과한 밀리초(ms)
const epochTime = new Date(1000); // 에포크 타임 + 1초
console.log(epochTime);

// 3). new Date(dateString)
const stringDate = new Date('2025-08-05T12:30:00');
console.log(stringDate);

// 4). new Date(year, month, day, hours, minutes, seconds, ms)
// month는 0(1월)부터 시작
const specificDate = new Date(2030, 0, 21, 13, 40, 49);
console.log(specificDate);

/**
 * ## 3. 날짜 정보 가져오기
 */
const date = new Date();
console.log('연도:', date.getFullYear());
console.log('월 (0-11):', date.getMonth()); // 7 (8월)
console.log('일:', date.getDate()); // 5
console.log('요일 (0-6):', date.getDay()); // 2 (화요일)
console.log('시간:', date.getHours());
console.log('타임스탬프:', date.getTime()); // '타임스탬프'라고 부름

/**
 * ## 4. 날짜 정보 수정하기 (Setter 메소드)
 */
date.setFullYear(2027);
date.setMonth(11); // 12월
console.log('수정된 날짜:', date);

/**
 * ## 5. 특별한 기능 및 주의사항
 *
 * ### 날짜 자동 보정
 * 존재하지 않는 날짜를 입력하면, 자동으로 계산하여 다음 날짜로 넘겨줌
 */
const autoCorrectedDate = new Date(1988, 0, 33);
console.log(autoCorrectedDate);

/**
 * ### Date.now() vs .getTime()
 * 'Date.now()'는 new Date() 객체를 생상하지 않고, '현재 시점의 타임스탬프를 바로 반환'하는 정적(static) 메소드
 * '.getTime()'은 이미 생성된 Date 객체의 타임스탬프를 반환하는 인스턴스 메소드
 */
let myDate = new Date();
console.log('Date.now:', Date.now());
console.log('.getTime():', myDate.getTime());
// 'myDate' 생성 시점과 'Date.now()' 호출 시점 사이에는 미세한 시간 차이가 있으므로 둘은 다름
console.log(Date.now() === myDate.getTime()); // false

/**
 * ### 형 변환 및 연산
 * Date 객체는 다른 타입으로 자연스럽게 변환됨
 *
 * - Number : 타임스탬프(ms)로 변환
 * - String : 사람이 읽을 수 있는 날짜 문자열로 변환
 *
 * 이 특징 때문에 Date 객체끼리 사칙연산(특히 뺄셈)이 가능
 */
console.log(typeof myDate);
console.log(Number(myDate));
console.log(String(myDate));

let date1 = new Date(2025, 7, 5); // 8월 5일
let date2 = new Date(2025, 9, 3); // 10월 3일

const timeDiff = date2 - date1; // Number(date2) - Number(date1)
console.log(`${timeDiff} ms`);
console.log(`${timeDiff / 1000 / 60}`); // minutes
console.log(`${timeDiff / 1000 / 60 / 60}`); // hours
console.log(`${timeDiff / 1000 / 60 / 60 / 24}`); // day

/**
 * ### 지역화된 날짜/시간 출력
 * 사용자의 컴퓨터에 설정된 국가 및 언어 형식에 맞는 날짜 정보 문자열로 만들어주는 기능
 */
// const myDate = new Date();

// 한국 형식(ko-KR)의 예시
console.log(myDate.toLocaleDateString()); // "2025. 8. 5."
console.log(myDate.toLocaleTimeString()); // "오후 2:13:02"
console.log(myDate.toLocaleString()); // "2025. 8. 5. 오후 2:13:02"

/**
 * ### 다양한 형식의 날짜 문자열 사용하기
 * new Date()는 국제 표준 형식(YYYY-MM-DD) 외에도 여러 형식의 날짜 문자열을 인식할 수 있다.
 *
 * 다만, 브라우저나 JavaScript 엔진마다 미세하게 동작이 다를 수 있어서,
 * 숫자를 직접 입력하는 new Date(1999, 11, 15)를 사용하는 것이 가장 안전하다.
 */
// 모두 '1999년 12월 15일 오전 5시 25분 30초'를 의미
let date3 = new Date('12/15/1999 05:25:30'); // 한국 시간 +09:00:00
let date4 = new Date('December 15, 1999 05:25:30');
let date5 = new Date('Dec 15 1999 05:25:30');

console.log(date3);
console.log(date4);
console.log(date5);
