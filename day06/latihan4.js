/*

Buat Looping angka 0 - 30 dengan incremental +3

jika angka habis dibagi 15 tampilkan HACKFOX
jika angka habis dibagi 6 tampilkan HACK
jika angka habis dibagi 3 tampilkan FOX


*/

// for loop

for (var i = 0; i <= 30; i += 3) {
    if (i > 0) {
        if (i % 15 == 0) {
            console.log(i + " HACKFOX");
        } else if (i % 6 == 0) {
            console.log(i + " HACK");
        } else if (i % 3 == 0) {
            console.log(i + " FOX");
        } else {
            console.log(i);
        }
    }
}

// while loop

var i = 0;
while (i <= 30) {
    i += 3;
    if (i > 0) {
        if (i % 15 == 0) {
            console.log(i + " HACKFOX");
        } else if (i % 6 == 0) {
            console.log(i + " HACK");
        } else if (i % 3 == 0) {
            console.log(i + " FOX");
        } else {
            console.log(i);
        }
    }
}