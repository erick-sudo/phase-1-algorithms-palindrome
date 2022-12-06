function isPalindrome(word) {
  // Write your algorithm here
  
  return word.split("").reverse().join("") === word
}

/* 
  Add your pseudocode here
  reverse the word
  if reversed word equal original word:
    return true
  else:
    return false
*/

/*
  Add written explanation of your solution here
  1. Reverse the word
  2. Compare the reversed word to the original word
  3. Return true if reversed word is equal to the original word
  4. Elese return false
*/

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
