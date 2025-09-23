/* =====03. 팰린드롬 (Palindrome)===== */

/* function isPalindrome(word) {
  reverseWord = '';
  for (let i = 0; i <= word.length - 1; i++) {
    reverseWord = reverseWord + word[word.length - 1 - i];
  }
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
} */

function isPalindrome(word) {
  for (let i = 0; i < (word.length - 1) / 2; i++) {
    straightWord = word[i];
    reverseWord = word[word.length - 1 - i];

    if (straightWord !== reverseWord) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('stars'));
console.log(isPalindrome('기러기'));
console.log(isPalindrome('123321'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('kayak'));
