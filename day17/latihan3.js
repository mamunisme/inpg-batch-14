// Implementasikan function di atas agar mengembalikan object baru sesuai dengan pattern yang diberikan di test cases

function complexConversion(text) {
    var hasil = {}

    var res = text.split(',');
    for (var i = 0; i < res.length; i++) {

        var result = res[i].split(':');
        var kunci = result[0]
        var nilai = result[1]
        //console.log(i);
        //console.log(kunci);
        //console.log(nilai);

        hasil[kunci] = nilai;

    }
    return hasil
}

// TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(complexConversion('name:Erwin,gender:male,age:21'));
// { name: 'Erwin', gender: 'male', age: '21' }

console.log(complexConversion('city:Surabaya,province:East Java'));
// { city: 'Surabaya', province: 'East Java' }