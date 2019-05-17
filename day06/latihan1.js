/* 

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

// for - loop

var sisaOrang = 0,
    mejaTerpakai = 0;

for (orang = 3; orang < 50; orang += 3) {
    mejaTerpakai++;
    sisaOrang = 50 - orang;
    // console.log("jumlah meja " + mejaTerpakai);
    // console.log("sisa orang tidak duduk " + sisaOrang);
}
console.log("jumlah meja " + mejaTerpakai);
console.log("sisa orang tidak duduk " + sisaOrang);


// while - loop

var sisaOrang = 0,
    mejaTerpakai = 0,
    orang = 3;

while (orang < 50) {
    sisaOrang = 50 - orang;
    orang += 3;
    mejaTerpakai++;

    // console.log("jumlah meja " + mejaTerpakai);
    // console.log("sisa orang tidak duduk " + sisaOrang);
}
console.log("jumlah meja " + mejaTerpakai);
console.log("sisa orang tidak duduk " + sisaOrang);