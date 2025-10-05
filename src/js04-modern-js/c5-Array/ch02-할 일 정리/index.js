function createTodo(value, order) {
  // value: 할 일에 대한 데이터를 받음
  // order: 할 일 목록의 순서를 받아 화면에 추가
  const list = document.querySelector('.list'); // '.list' 클래스를 가진 요소를 찾아 'list' 변수에 저장
  const node = document.createElement('li'); // 새로운 '<li>' 요소를 만듦
  if (value.isClear) {
    node.classList.add('item', 'done'); // '<li>'에 'item'과 'done' 클래스 한 번에 추가
  } else {
    node.classList.add('item'); // '<li>'에 'item' 클래스 추가
  }
  node.textContent = `${order}. ${value.title}`; // <li>의 텍스트 내용을 설정
  list.appendChild(node); // 생성한 <li>를 '.list' 요소의 마지막 자식으로 추가 -> 실제 화면에 보임
}

const data = [
  {
    title: '자바스크립트 공부하기',
    isClear: true,
  },
  {
    title: '쓰레기 분리수거',
    isClear: false,
  },
  {
    title: '고양이 밥주기',
    isClear: true,
  },
  {
    title: '독서하기',
    isClear: false,
  },
  {
    title: '영어 공부하기',
    isClear: false,
  },
];

data.forEach((data, i) => {
  createTodo(data, i + 1);
});
