function kalikanDua(angka) {
    return angka * 2
}

var number = prompt("masukan angka?")
var result = kalikanDua(number)

alert(`${number} * 2 = ${result}`)

// untuk men-set nilai default 
// function kalikanDua(angka =2)

// di javascript ES6 penulisan fungsi vusa diganti

var kalikanTiga = angka => angka * 3
// bentuk lain

/*
SOAL I

Kalkulasi Grade A, B, C, D, E tergantung nilai murid
jika Nilai 100 - 85 grade A
            84 - 75 grade B
            74 - 65 grade C
            64 - 55 grade D
            54 - 0  grade E
Buat Function dengan nama getGrade            

SOAL 2





*/