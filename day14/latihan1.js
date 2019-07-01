function compareNumbers(firstNumber, secondNumber) {
    var x = firstNumber
    var y = secondNumber
    if (x === y) {
        return -1
    } else {
        return y >= x
    }

}

// TEST CASES
console.log(compareNumbers(5, 8)); // true
console.log(compareNumbers(5, 3)); // false
console.log(compareNumbers(4, 4)); // -1
console.log(compareNumbers(3, 3)); // -1
console.log(compareNumbers(17, 2)); // false