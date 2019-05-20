var num1, num2, total1, jumlah

num1 = prompt("masukan angka ke satu  : ");
num2 = prompt("masukan angka ke dua   : ");
total1 = 0;
total = num1 * 2;
jumlah = 0

for (i = 1; i <= num2; i++) {

    if (i % 2 == 0) {
        total1 += total;
        x = total1 - 1;

    } else {
        total1 += total;
        x = total1;

    }

    console.log(x)
    jumlah += x;

}
console.log("Jumlah Total Keseluruhan : " + jumlah)