/* =====02. DOM (문서 객체 모델)===== */
// ch02-dom.js

/**
 * ## 1. DOM (Document Object Model)이란?
 *
 * DOM은 브라우저가 HTML 문서를 해석하고, JavaScript가 조작할 수 있도록
 * 약속된 규칙(표준)에 따라 객체들의 트리 구조로 만들어 놓은 '모델'을 말합니다.
 *
 * 이 거대한 모델(혹은 표준 인터페이스)은 Document, Element, Node 등
 * 웹 페이지를 구성하는 모든 요소를 어떻게 객체로 표현할지를 정의하는 '설계도'와 같습니다.
 * 

 * =>이로 인해 웹 페이지의 태그들을 객체로 다룰 수 있다.
 */

/**
 * ## 2. `document` 객체
 *
 * `document` 객체는 DOM이라는 거대한 설계도로 만들어진 웹 페이지를
 * JavaScript가 실제로 조작할 수 있도록, 브라우저가 제공하는 '리모컨' 같은 존재입니다.
 *
 * 이 객체는 DOM 구조에 접근하는 유일한 시작점(Entry Point) 역할을 하며,
 * 웹 페이지를 대표하는 공식적인 '대리인'이라고 할 수 있습니다.
 * `document`는 DOM이라는 더 큰 시스템의 일부이지만, 우리가 직접 사용하는 핵심 인터페이스입니다.
 */

/**
 * ## 3. DOM 살펴보기
 *
 * DOM 요소를 콘솔에서 확인하는 대표적인 두 가지 방법입니다.
 */
// 1. console.log(): DOM 객체를 HTML과 유사한 형태로 보여줍니다.
// 구조를 파악하기에는 편리하지만, 객체가 가진 모든 속성과 기능을 보기는 어렵습니다.
console.log(document);
console.log(typeof document); // object

// 2. console.dir(): DOM 객체를 모든 속성(property)과 메서드(method)를 포함한 완전한 객체 형태로 보여줍니다.
console.dir(document);

// #title 요소가 어떤 속성과 메서드를 가진 객체인지 직접 확인 가능하다.
const title = document.querySelector('#title');
console.dir(title);
