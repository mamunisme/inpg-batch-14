// Diberikan sebuah function yang menerima parameter array multidimensi, 
// buatlah sebuah program JavaScript untuk mengubah input menjadi format array of objects seperti di contoh.


function convert(data) {
    var result = [];


    for (var i = 0; i < data.length; i++) {

        var result1 = {
            id: data[i][0],
            firstName: data[i][1],
            lastName: data[i][2],
            email: data[i][3]
        };

        //console.log(result1)
        result.push(result1)
    }
    return result
}

console.log(convert([
    [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
    [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
  { id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
*/

console.log(convert([]));
// []