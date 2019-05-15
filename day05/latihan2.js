/*
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

var x = prompt("Jumlah Penumpang :");
var kurangKecepatan;
var kecepatan = 20;

if (x <= 4) {
    if (x == 4) {
        kurangKecepatan = "7";

    } else if (x > 2) {
        kurangKecepatan = "5";

    } else {
        kurangKecepatan = "2";

    }

    kecepatanNow = kecepatan - kurangKecepatan;
    console.log(kecepatanNow);

} else {
    alert("penumpang maksimal 4");
}