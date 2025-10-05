const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];

const answer = quiz.map((word, i) => {
  return word[i];
});

//const answer = quiz.map((word, i) => word[i]);

console.log(answer);
