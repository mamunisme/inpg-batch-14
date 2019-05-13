/*

STORE "full level" with 0

WHILE "full level" < 5
  ADD "full level" by 1

DISPLAY "I'm full!"

*/

var fullLevel = 0;

while (fullLevel < 5) {
    fullLevel = fullLevel + 1
    console.log(fullLevel)
    // fullLevel += 1
    // fullLevel++
}
console.log("i`m Full")

/*

Seorang anak SD sedang belajar angka genap dan ganjil. 
Dia ditugaskan oleh ibu guru untuk menghitung angka dari 1 sampai 10 dengan menyebut angka tersebut
dan untuk setiap angka ganjil, ia harus menyebut "ODD!" 
dan sebaliknya jika genap, ia harus menyebut "EVEN!".

PSUEDOCODE

1. SET angka dengan angka 0
2. lakukan perulangan angka hinggal 10
3. var angka ditambah 1
4. hitung modulo dari angka
5. jika hasil modulo 1 tampilkan angkat dan bilangan ganjil
6. selain itu tampilkan angka dan bilangan genap

*/

var angka = 0;

while (angka < 10) {
    angka++
    //console.log(angka)
    if (angka % 2 === 1) {
        console.log(angka + " = Bilangan Ganjil")
    } else {
        console.log(angka + " = Bilangan Genap")
    }
}
/*
Tampilkan grade siswa sesuai nilai yang didapat

Buatlah PSUEDOCODE

1. read and save nilai
2. set nilai menjadi number
3. jika nilai lebih besar 85 set grade A
4. jika nilai diantara 75 dan 84 set grade B
5. jika nilai diantara 65 dan 74 set grade C
6. selain itu set grade D
7. tampilkan grade siswa

STORE "nilai" with any value
set nilai to Number
iF nilai >= 85
    SET grade = "grade A"
ELSE IF nilai >=75 and < 85
    SET grade = "grade B"
ELSE IF nilai >=65 and < 75
    SET grade = "grade C"
ELSE SET grade = "grade D"
DISPLAY grade
*/

var score = prompt("nilai anda :")
var skor = Number(score)

if (skor >= 85) {
    grade = "A"
} else if (skor >= 75 && skor < 85) {
    grade = "B"
} else if (skor >= 65 && skor < 75) {
    grade = "C"
} else {
    grade = "D"
}

console.log(grade)

/*
SOAL 2

sebuah restoran dapat menampung 50 orang
setiap meja hanya dapat menampung 3 orang

tugas:
hitung sisa orang yang tidak duduk dan berapa meja yang terpakai?

-- PSEUDOCODE --

SET orang = 3
SET sisaOrang tanpa value
SET mejaTerpakai dengan 0

WHILE
    CALCULATE orang +3
    CALCULATE mejaTerpakai++

CALCULATE sisaOrang
TAMPILKAN sisaOrang DAN mejaTerpakai


*/

/*
SOAL 3 

Sebuah becak ketika dikayuh oleh pemiliknya yang tidak membawa penumpang memiliki kecepatan 20 km/jam. 
Jumlah penumpang yang bisa dibawa oleh becak tersebut bervariasi (maksimal 4 orang) dan kecepatan ketika becak itu dikayuh mengalami penurunun:

Lebih dari 2 orang kecepatan becak berkurang 5 km/jam
Maksimal penumpang kecepatan becak berkurang 7 km/jam
Selain itu kecepatan becak hanya berkurang 2 km/jam

Tampilkan kecepatan becak sekarang jika membawa x penumpang

Note: x bisa di isi nilai berapa saja (maksimal 4)

PSUEDOCODE 

STORE nilai x
SET kurangKecepatan = 0
SET kecepatan = 20km/jam

IF x <= 4
    IF x = 4
    set kurangkecepatan 7
    ELSE IF x > 2
    set kurangkecepatan 5
    ELSE 
    SET kurangKecepatan 2
ELSE 
    ALERT x masimal 4
CALCULATE kecepatan - kurangKecepatan
TAMPILKAN kecepatan

*/