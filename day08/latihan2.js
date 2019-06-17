/**
 * 
 * @param {number} orang 
 * @param {number} speed 
 * @returns {string} kecepatanNow
 */

/*
SOAL 2

Sebuah becak ketika dikayuh oleh pemiliknya yang tidak membawa penumpang memiliki kecepatan 20 km/jam. 
Jumlah penumpang yang bisa dibawa oleh becak tersebut bervariasi (maksimal 4 orang) 
dan kecepatan ketika becak itu dikayuh mengalami penurunun:

Lebih dari 2 orang kecepatan becak berkurang 5 km/jam
Maksimal penumpang kecepatan becak berkurang 7 km/jam
Selain itu kecepatan becak hanya berkurang 2 km/jam

Tampilkan kecepatan becak sekarang jika membawa x penumpang

Note: x bisa di isi nilai berapa saja (maksimal 4)
*/

function kecepatanBecak(orang, speed = 20) {
    var kurang;
    if (orang <= 4) {
        if (orang == 4) {
            kurang = "7";
        } else if (orang > 2) {
            kurang = "5";
        } else {
            kurang = "2";
        }
        kecepatanNow = speed - kurang;
        return `kecepatan becak : ${kecepatanNow} km/jam`;

    } else {
        return "penumpang maksimal 4";
    }
}

var penumpang = prompt("jumlah penumpang");
kecepatan = kecepatanBecak(penumpang)
console.log(kecepatan);