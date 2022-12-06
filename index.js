function isPalindrome(word) {
  // Write your algorithm here

  //Get the middle index N and round down to nearest Integer
  const N = Math.floor(word.length / 2)
  if(N===0) {
    return true
  }
  return N%2==0 ? word.slice(0,N).split("").reverse().join("") === word.slice(N) : word.slice(0, N).split("").reverse().join("") === word.slice(N+1)
}

/* 
  Add your pseudocode here
  L = Length of word
  N = Round down (L/2)

  if N is EVEN:
    if reverse of first half of word is equal to second half:
      return TRUE
    else:
    return FALSE
  else:
    if substring before character at index N equal substring after character at index N:
      return TRUE
    else:
      return FALSE
*/

/*
  Add written explanation of your solution here
  Add your pseudocode here
  1. Get length of the string, L
  2. Get index of middle character by dividing length by 2, N = (L/2),
     and round down to the nearest whole number
  3. If N is EVEN
      slice the string into two equal halves
      reverse the first and compare to the other half
      If both are equal:
        return TRUE
      else:
        return FALSE
  3. If index is ODD
      Extract characters from zero upto N - 1 as a string and reverse
      then compare that value to the string gotten after extracting characters from
      the index (N - 1) upto L-1
      If both are equal:
        return TRUE
      else:
        return FALSE
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
