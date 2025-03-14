// Reverse string function
function reverseString(str) {
  return str.split('').reverse().join('');
}

//Counting characters in a given string
function countCharacters(str) {
  return str.length;
}

// Capitalize words
function capitalizeWords(sentence) {
  return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Max and min in array
function findMaximum(arr) {
  return Math.max(...arr);
}

function findMinimum(arr) {
  return Math.min(...arr);
}

// sum of array elements
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

//filter an array using a given condition
function filterArray(arr, condition) {
  return arr.filter(condition);
}

//Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Prime number
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

//Fibonacci sequence
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

