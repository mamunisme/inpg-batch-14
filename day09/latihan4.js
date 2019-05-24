/**
 * 
 * @param {number} angkaMin 
 * @param {number} angkaMax 
 */

/*
SOAL 4
tampilkan angka ganjil atau genap disebelah angka

gunakan while atau loop

contoh:
1- angka ganjil
2- angka genap
3- angka ganjil
4- angka genap
.
.
.
50 - angka genap
*/

function loopingGanjilGenap(angkaMin, angkaMax) {
    var angka = 0;

    for (var angka = angkaMin; angka <= angkaMax; angka++) {

        if (angka % 2 == 0) {
            hasil = console.log(` ${angka} - angka Genap`);
        } else {
            hasil = console.log(` ${angka} - angka Genap`);
        }

    }
    return hasil;
}

angkaMin = prompt("masukan angka min:");
angkaMax = prompt("masukan angka max:");

console.log(loopingGanjilGenap(angkaMin, angkaMax))