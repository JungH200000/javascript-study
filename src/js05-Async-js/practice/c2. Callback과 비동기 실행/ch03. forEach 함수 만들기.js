function forEach(array, func) {
  for (let word_js of array) {
    func(word_js);
  }
}

const words = ['JavaScript', 'Java', 'Python'];

forEach(words, (word) => {
  console.log(word);
});

forEach(words, (word) => {
  console.log(word.toUpperCase());
});
