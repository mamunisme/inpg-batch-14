/*

tampilkan 1-100 namun tampilkan angka ganjil dan genap disebelah angkanya

gunakan while dan for loop

contoh 

1- angka ganjil
2- angka genap
3- angka ganjil 
dan seterusnya

*/


for (var angka = 1; angka <= 50; angka++) {
    if (angka % 2 == 0) {
        console.log(angka + " - angka Genap")
    } else {
        console.log(angka + " - angka Ganjil")
    }

}

// while loop

var angka = 0;
while (angka < 50) {
    angka++;

    if (angka % 2 == 0) {
        console.log(angka + " - angka Genap")
    } else {
        console.log(angka + " - angka Ganjil")
    }
}