let isprime = (number) => {
    if (number <= 1) return false;
    if (number <= 3) return true;
  
    if (number % 2 === 0 || number % 3 === 0) return false;
  
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  function getPrimeNumbersFromArray(arr) {
    return arr.filter((number) => isPrime(number));
  }
  

  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbersArray = getPrimeNumbersFromArray(numbersArray);
  
  console.log(primeNumbersArray); 
  