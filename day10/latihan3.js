/*

Diberikan sebuah function numberProcessing(numberArr) yang menerima satu parameter berupa array yang berisikan angka. 
Tentukan nilai minimum, maksimum, rata-rata (genapkan ke bilangan terdekat), bilangan ganjil dan bilangan genap.

*/

function numberProcessing(numberArr) {
    var hasil

    numberUrut = numberArr.sort((a, b) => a > b ? 1 : -1);
    panjang = numberArr.length - 1;

    min = numberArr[0];
    max = numberArr[panjang];
    jumlah = 1

    for (let i = 0; i < numberArr.length; i++) {
        jumlah += numberArr[i]
    }

    mean = Math.round(jumlah / numberArr.length);

    odds = numberArr.filter(item => item % 2 !== 0);
    evens = numberArr.filter(item => item % 2 === 0);

    hasil = 'min :' + min + 'max:' + max + ' mean:' + mean + ' odds: ' + odds.join("-") + ' evens: ' + evens.join("-")

    return hasil
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"