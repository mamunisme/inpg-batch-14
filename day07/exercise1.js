/*

EXERCISE 01

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

Ketentuan
Diberikan variable name, age, dan money. Dipersilahkan mengganti nilai dari 3 variable tersebut, 
sesuai data type yang cocok, namun dilarang mengganti nama variable.

*/

var name;
var age;
var money;

name = prompt("masukan nama anda : ");


if (name != "") {
    age = prompt("masukan umur anda : ");

    if (age < 17) {
        minum = "juice";
        harga = 50000;

    } else {
        minum = "anggur";
        harga = 300000;
    }
    alert("anda hanya bisa memesan " + minum + " seharga " + harga);

    money = prompt("masukan uang pembayaran anda : ");
    total = money - harga;
    if (total < 0) {
        console.log("Uang Tidak Cukup. anda harus pulang")
    } else {
        console.log(" anda bisa pesan minum " + minum + ". sisa uang anda: " + total);
    }

} else {
    console.log("Anda tidak boleh masuk!");
}