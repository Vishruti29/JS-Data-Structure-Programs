//3. Extend the Prime Factorization Program to store all the Prime Factors of a
//number n into an array and finally display the output.

// function to check if a number is prime
function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // function to get all prime factors of a number and store them in an array
  function getPrimeFactors(num) {
    let factors = [];
    let divisor = 2;
  
    while(num > 2) {
      if(num % divisor === 0 && isPrime(divisor)) {
        factors.push(divisor);
        num /= divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }
  
  // get input from user
  const prompt = require('prompt-sync')(); // require prompt-sync module
  let num = perseInt(prompt("Enter a number:"));
  
  // get all prime factors of the number and store them in an array
  let primeFactors = getPrimeFactors(num);
  
  // display the output
  console.log("Prime factors of " + num + " are: " + primeFactors);
  