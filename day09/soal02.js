/** 
SOAL 2
Buatlah angka genap dari 1 - 50 dalam sebuah array dengan looping
    
    DRIVER CODE
    loopingAngkaGenap(1,50) // [2,4,6,,8]
 */

/**
 * 
 * @param {number} min 
 * @param {number} max
 * @returns {Array} angka 
 */

function LoopingAngkaGenap(min, max) {
    var Angka = [];

    for (i = min; i <= max; i++) {
        if (i % 2 == 0)
            Angka.push(i);
    }
    return Angka;
}

console.log(LoopingAngkaGenap(1, 50))