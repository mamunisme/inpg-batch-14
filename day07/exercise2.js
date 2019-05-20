/*

SOAL 2

add up all numbers from 1 to num.

for example: if the input is 4 then your program should return 10 because 1+2+3+4 = 10
for the test case, the parameter num will be any number from 1 to 1000


*/


var max = prompt("masukan angka : (1-1000)");
max = Number(max);

if (max >= 1 && max <= 1000) {
    total = 0
    for (i = max; i > 0; i--) {
        total += i;
    }
    console.log("total penjumlahan angka 1 sampai " + max + " adalah " + total);

} else {
    console.log("masukan angka yang benar (1 - 1000)");
}