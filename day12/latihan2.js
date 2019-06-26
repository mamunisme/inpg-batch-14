//var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';

//Dari variabel di atas, buatlah sebuah program JavaScript untuk membuat array baru seperti contoh di bawah:

// hasil = [
//     ['dimitri', 'dimitri@mail.com', 'male'],
//     ['icha', 'icha@mail.com', 'female'],
//     ['windi', 'windi@mail.com', 'female']
// ]

var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';

var splittedText = text.split(',')
panjang = splittedText.length
hasil = []

for (var i = 0; i < panjang; i++) {
    splitAgain = splittedText[i].split(':')
    hasil.push(splitAgain)
}

console.log(hasil)