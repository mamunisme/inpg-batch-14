/*
SOAL 5
Seseorang pengunjung bar direpresentasikan oleh JavaScript dengan memiliki variable name, age, dan money. 
Ia masuk ke bar untuk memesan minuman, namun bar memiliki kondisi sebagai berikut:

Step 1. Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai. 
Jika name tidak kosong, lanjut ke step ke 2.

Step 2. Jika age dari si pengunjung dibawah 17 tahun, maka ia hanya boleh memesan juice. 
Jika age 17 tahun keatas, ia hanya boleh memesan anggur.

Step 3. Juice memiliki harga 50000, sedangkan anggur memiliki harga 300000. 
Sesuai dengan pilihan minuman di step 2, maka pengunjung ini harus membayar sesuai harga minuman.

Jika money / uang yang ia miliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Anda harus pulang.". 
Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: ...", 
dan ganti ... dengan sisa uang yang telah dikurangi oleh harga minuman.
*/

function pengunjungBar(name, age, money) {

    var output, harga, minum;

    if (name != "") {

        if (age < 17) {
            minum = "juice";
            harga = 50000;

        } else {
            minum = "anggur";
            harga = 300000;
        }
        output = alert("anda hanya bisa memesan " + minum + " seharga " + harga);


        total = money - harga;
        if (total < 0) {
            output = console.log("Uang Tidak Cukup. anda harus pulang")
        } else {
            output = console.log(" anda bisa pesan minum " + minum + ". sisa uang anda: " + total);
        }

    } else {
        output = console.log("Anda tidak boleh masuk!");
    }

}

name = prompt("masukan nama anda: ");
age = prompt("masukan Umur");
money = prompt("masukan pembayaran anda? ");

console.log(pengunjungBar(name, age, money));