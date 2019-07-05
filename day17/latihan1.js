// Diberikan sebuah function yang menerima 1 parameter berupa string yang berisi value dan dipisahkan dengan koma (Comma Separated Values). 
// Implementasikan function ini supaya bisa mengembalikan value object literal. Sesuaikan dengan format di atas.

function csvToObject(text) {
    // Your code here
    var hasil = {}


    //mmen-split berdasarkan koma
    var res = text.split(',')

    // memasukan nilai hasil split kedalam objek
    hasil.name = res[0];
    hasil.email = res[1];
    hasil.gender = res[2];

    return hasil
}

// TEST CASES
console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
// { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }

console.log(csvToObject('Icha,icha@mail.com,female'));
// { name: 'Icha', email: 'icha@mail.com', gender: 'female' }

console.log(csvToObject('Dhani,dhani@mail.com,male'));
// { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }