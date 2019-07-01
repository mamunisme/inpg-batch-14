function isArithmeticProgression(numbers) {
    var angka = numbers

    //mencari hasil 
    deret = angka[1] - angka[0]

    if (deret >= 0) {
        var flag = 0
        for (var i = angka[0]; i <= angka[angka.length - 1]; i += deret) {

            if (angka[flag] != i) {
                return false
            }

            flag++
        }
    } else {
        for (var i = angka[0]; i <= angka[angka.length - 1]; i -= Math.abs(deret)) {

            if (angka[flag] != i) {
                return false
            }

            flag++
        }
    }

    return true
}
// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false