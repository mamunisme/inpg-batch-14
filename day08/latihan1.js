/**
 * 
 * @param {number} nilai
 * @return {String} nama 
 */

/*
SOAL I

Kalkulasi Grade A, B, C, D, E tergantung nilai murid
jika Nilai 100 - 85 grade A
            84 - 75 grade B
            74 - 65 grade C
            64 - 55 grade D
            54 - 0  grade E
Buat Function dengan nama getGrade            

*/


function getGrade(nilai) {
    var grade;
    if (nilai < 100 && nilai >= 85) {
        grade = "A";
    } else if (nilai <= 84 && nilai >= 75) {
        grade = "B";
    } else if (nilai <= 74 && nilai >= 65) {
        grade = "C";
    } else if (nilai <= 64 && nilai >= 55) {
        grade = "D";
    } else if (nilai <= 54) {
        grade = "E";
    } else {
        grade = "nilai tidak valid!! (0-100)";
    }
    return grade
}

var score = prompt("nilai anda :");
var skor = getGrade(score);
console.log(skor);

// console.log(getGrade(score))