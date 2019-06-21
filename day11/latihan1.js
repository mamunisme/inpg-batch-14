//array 1

function ArrayMultiDimensi(a, b) {
    var arr = []
    var isi = 0;
    for (let i = 0; i < b; i++) {
        arr.push([])

        for (let y = 0; y < a; y++) {
            isi++;
            arr[i].push(isi)
        }

    }
    return arr
}

console.log(ArrayMultiDimensi(5, 3)) // [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]]
console.log(ArrayMultiDimensi(2, 6)) // [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12]]



// array 2
function ArrayMultiDimensi1(a, b) {
    var arr = []

    for (let i = 0; i < b; i++) {
        arr.push([])
        var isi = 0;

        for (let y = 0; y < a; y++) {
            isi++;
            arr[i].push(isi)
        }

    }
    return arr
}

console.log(ArrayMultiDimensi1(5, 3)) // [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
console.log(ArrayMultiDimensi1(2, 6)) // [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2]]