// Diberikan sebuah function bernama numberIterator yang merupakan sebuah function 
// yang menerima satu parameter berupa number. 
// Buatlah dengan metode rekursif iterasi angka tersebut dari 0 sampai num.

function numberIterator(num) {
    // only code here
    //1. set stoper kalau num sampai dengan 0
    //2. set decrement menggunakan rekursif sampai kondisi terpenuhi

    if (num > 0) {
        console.log(num)
        return numberIterator(num - 1);

    } else {
        return num

    }
}


// TEST CASES
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
// console.log(numberIterator(0)); // '0'