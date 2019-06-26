// SOAL
// Buatlah sebuah program untuk membuat enkripsi password yang di-input user agar tidak bisa dimengerti oleh orang lain dengan aturan sebagai berikut:
// Hilangkan semua spasi yang ada di dalam input

// Reverse input

// Ganti huruf vokal menjadi satu huruf setelahnya (A menjadi B, I menjadi H dan seterusnya)

// Best practice-nya, kamu bisa buat 3 function untuk masalah di atas. 
// Jadi setiap step masalah akan diselesaikan dengan 1 function. Bisa saja kita membuat satu function untuk menyelesaikan semuanya, 
// tapi akan lebih sulit untuk di-debug (mencari kesalahan logika/code).

function removeSpaces(text) {
    var t = text.split('')
    var arr = []
    for (i = 0; i < t.length; i++) {
        if (t[i] != " ") {
            arr.push(t[i])
        }
    }
    return arr.join('');
}

function reverseText(text) {
    var result = ''
    for (i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return result
}


function updateVowels(text) {
    var t = text.split('');
    var arr = []

    var vowel = ['a', 'i', 'u', 'e', 'o'];
    var vowel1 = ['b', 'j', 'v', 'f', 'p'];

    for (i = 0; i < text.length; i++) {
        a = t[i]
        for (y = 0; y < vowel.length; y++) {
            if (t[i] === vowel[y]) {
                a = vowel1[y]
            }
        }
        arr.push(a)
    }
    return arr.join('')
}

var password = 'muchammad mamun';
var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);


console.log(noSpaces)
console.log(reversed)
console.log(encryptedPassword);