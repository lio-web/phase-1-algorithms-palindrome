function isPalindrome(word) {
  // Write your algorithm here
}//use if so as to describe your problem and the output required

/* 
  Add your pseudocode here
// */


function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

/*
  Add written explanation of your solution here
*/
//it will return true if the input given is a palindrome and false if the input given is not a palindrome
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
