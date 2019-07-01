// SOAL 
// Diberikan sebuah function yang menerima satu parameter berupa angka. 
// Function akan me-return true jika angka tersebut adalah bilangan prima. 
// Jika tidak, return false.

function isPrime(number) {
    var result = true;
    for (var i = 2; i < number; i++) {
        if (number % i === 0) result = false;
    }
    return result;
}

// TEST CASES
console.log(isPrime(3)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false