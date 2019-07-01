function sortByCharacter(text) {
    var t = text.split('');
    var arr = []
    var hasil = []

    // buat referensi huruf
    var huruf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    //mendapatkan nilai index huruf dari text yang dimasukan
    for (i = 0; i < t.length; i++) {
        var letak = huruf.indexOf(t[i])
        arr.push(letak)
    }

    // mengurutkan (sort) hasil dari index
    for (y = 0; y < arr.length; y++) {

        for (z = y; z < arr.length; z++) {
            if (arr[y] > arr[z]) {
                var swap = arr[y];
                arr[y] = arr[z];
                arr[z] = swap
            }
        }
    }

    //merubah hasil sort menjadi referensi huruf
    for (j = 0; j < arr.length; j++) {
        hasil.push(huruf[arr[j]])

    }
    return hasil.join('')
}


// TEST CASES
console.log(sortByCharacter('hello')); // 'ehllo'
console.log(sortByCharacter('truncate')); // 'acenrttu'
console.log(sortByCharacter('developer')); // 'deeeloprv'
console.log(sortByCharacter('software')); // 'aeforstw'
console.log(sortByCharacter('aegis')); // 'aegis'