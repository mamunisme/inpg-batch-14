/*


SOAL 6
add up all numbers from 1 to num.

for example: if the input is 4 then your program should return 10 because 1+2+3+4 = 10
for the test case, the parameter num will be any number from 1 to 1000


*/

function tambahDeret(num) {

    var i, total;
    num = Number(num)

    if (num >= 1 && num <= 1000) {
        total = 0;

        for (i = num; i > 0; i--) {

            total += i;
        }
        return `total penjumlahan angka 1 sampai ${num} adalah ` + total;

    } else {
        return `masukan angka yang benar (1 - 1000)`;
    }
}

var num = prompt("masukan angka: ")
console.log(tambahDeret(num));