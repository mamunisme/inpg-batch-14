//SOAL
//var numbers = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ]

// Dari array numbers di atas, buatlah program JavaScript untuk mencari modus (mode) / nilai yang paling sering muncul di dalam array tersebut.
// Expected output: 1
// Good luck! 🔥

//cara 1

var numbers = [10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7]

function cariModus(arr) {
    var arrModus = [],
        isSame = false;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                isSame = true;
                arrModus.push(arr[i]);
            } else {
                isSame = false;
            }
        }
    }

    return (arrModus[0] === undefined || isSame) ? -1 : arrModus[0];
}

console.log(cariModus(numbers))

//====== cara 2 ================

function cariModus(arr) {


    //check kalo nomor cuman ada satu(tidak di hitung sebagai modus)
    //slice dipake soalnya kalo nga pake array ke sort
    //console.log(arr.sort(function(a,b){return a-b}));
    //console.log(arr.sort(function(a,b){return b-a}));
    if (arr.slice(0).sort(function (a, b) {
            return a - b
        })[0] === (arr.slice(0).sort(function (a, b) {
            return b - a
        }))[0]) {
        return -1;
    } else {
        var newArr = [];
        for (var x = 0; x <= arr.length - 1; x++) {
            for (var i = 0; i <= arr.length - 1; i++) {
                if (x !== i && arr[x] === arr[i]) {
                    console.log(arr[i]);
                    newArr.push(arr[i]);
                }
            }
        }
        if (newArr[0] === undefined) {
            return -1;
        } else {
            return newArr[0];
        }
    }


}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

//------- cara ketiga --------------//