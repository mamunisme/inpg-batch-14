/**
 * 
 * @param {number} orang 
 * @param {number} speed 
 * @returns {string} kecepatanNow
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