/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();

  const cleanStr = str.replace(/[^a-z0-9]/gi, '');

  const reverse = cleanStr.split('').reverse().join('');
   
  if (reverse === cleanStr) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
