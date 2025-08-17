/* =====08. 영어 단어장 III===== */

// parameter로 다른 변수에 담긴 값을 가져올 때는 대괄호 표기법을 사용해야 한다.

let myVoca = {
  addVoca(word, meaning) {
    myVoca[word] = meaning;
  },
  deleteVoca(word) {
    delete myVoca[word];
  },
  printVoca(word) {
    console.log(`"${word}"의 뜻은 "${myVoca[word]}"입니다.`);
  },
};

myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

myVoca.printVoca('property');
