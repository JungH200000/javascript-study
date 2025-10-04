// js03-09-1세대는 거르는게 답?

function ignoreFirst(first, ...others) {
  for (const other of others) {
    console.log(other);
  }
}

ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);

// 또는

function ignoreFirst(first, ...others) {
  // 첫 번째 요소 제거
  others.shift();

  for (const other of others) {
    console.log(other);
  }
}

ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);
