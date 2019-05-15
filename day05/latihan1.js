/*

KALKULASI GRADE A, B, C, D, E tergantung nilai murid

Jika nilai 100 - 85 grade A
            84 - 75 grade B
            74 - 65 grade C
            64 - 55 grade D
            54 - 0 grade E



PSUEDOCODE

STORE "nilai" with any value
set nilai to Number
iF nilai 100 - 85
    SET grade = "grade A"
ELSE IF nilai <= 84 and >= 75
    SET grade = "grade B"
ELSE IF nilai <= 74 and >= 65
    SET grade = "grade C"
ELSE IF nilai <= 64 and >= 55
    SET grade = "grade D"
ELSE IF nilai <= 54
    SET grade = "grade E"
ELSE 
    set grade ="nilai tidak valid"
DISPLAY grade
*/

var score = prompt("nilai anda :");
var skor = Number(score);

if (skor < 100 && skor >= 85) {
    grade = "A";
} else if (skor <= 84 && skor >= 75) {
    grade = "B";
} else if (skor <= 74 && skor >= 65) {
    grade = "C";
} else if (skor <= 64 && skor >= 55) {
    grade = "D";
} else if (skor <= 54) {
    grade = "E";
} else {
    grade = "nilai tidak valid!! (0-100)";
}

console.log(grade);