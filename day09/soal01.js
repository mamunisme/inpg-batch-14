/** 

SOAL 1

Buatlah angka 1 - 50 ditampung dalam sebuah array dengan looping

DRIVER CODE
LoopingAngka(1,50) // [1,2,3,4,5,... 48,49,50]

*/

/**
 * 
 * @param {number} min 
 * @param {number} max
 * @return {array}Angka 
 */

function LoopingAngka(min, max) {
    var Angka = [];

    for (i = min; i <= max; i++) {
        Angka.push(i);
    }
    return Angka;
}

console.log(LoopingAngka(1, 50))