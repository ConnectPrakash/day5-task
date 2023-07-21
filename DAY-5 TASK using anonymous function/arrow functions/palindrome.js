const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
  const findPalindromesInArray = (arr) => arr.filter((item) => isPalindrome(String(item)));
  
  
  const words = ['level', 'hello', 'racecar', 'world', 'deified'];
  const palindromes = findPalindromesInArray(words);
  console.log(palindromes); // Output: ['level', 'racecar', 'deified']
  