/**

buat array angkaMinimal - angkaMaksimal menggunakan function kaskus(angkaMinimal, angkaMaksimal)
jika angka habis dibagi 3 mengembalikan "KAS"
Jika angka habis dibagi 6 mengembalikan "KUS"
Jika angka habis dibagi 15 mengembalikan "KASKUS"

DRIVER CODE
kaskus(1,15) ??[{1,2,"KAS",4,5,"KUS",7,8,"KAS",10,11,"KUS",13,14,"KASKUS"}]

 */


function kaskus(angkaMinimal, angkaMaksimal) {
    var angka = [];

    for (i = angkaMinimal; i <= angkaMaksimal; i++) {
        if (i % 15 == 0) {
            angka.push("KASKUS")
        } else if (i % 6 == 0) {
            angka.push("KUS")
        } else if (i % 3 == 0) {
            angka.push("KAS")
        } else {
            angka.push(i)
        }
    }
    return angka;
}

console.log(kaskus(1, 30))