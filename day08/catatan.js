function kalikanDua(angka) {
    return angka * 2
}

var number = prompt("masukan angka?")
var result = kalikanDua(number)

alert(`${number} * 2 = ${result}`)

// untuk men-set nilai default 
// function kalikanDua(angka =2)

// di javascript ES6 penulisan fungsi vusa diganti

var kalikanTiga = angka => angka * 3
// bentuk lain

/*
SOAL I

Kalkulasi Grade A, B, C, D, E tergantung nilai murid
jika Nilai 100 - 85 grade A
            84 - 75 grade B
            74 - 65 grade C
            64 - 55 grade D
            54 - 0  grade E
Buat Function dengan nama getGrade            

SOAL 2

Sebuah becak ketika dikayuh oleh pemiliknya yang tidak membawa penumpang memiliki kecepatan 20 km/jam. 
Jumlah penumpang yang bisa dibawa oleh becak tersebut bervariasi (maksimal 4 orang) 
dan kecepatan ketika becak itu dikayuh mengalami penurunun:

Lebih dari 2 orang kecepatan becak berkurang 5 km/jam
Maksimal penumpang kecepatan becak berkurang 7 km/jam
Selain itu kecepatan becak hanya berkurang 2 km/jam

Tampilkan kecepatan becak sekarang jika membawa x penumpang

Note: x bisa di isi nilai berapa saja (maksimal 4)

SOAL 3
Buat variabel nama dengan value andre, password dengan value 123,
dan isLogin dengan value false. user diminta untuk memasukan nama, password dan role (gunakan prompt).

Jika nama dan password  sesuai maka ubah isLogin menjadi true,
keluarkan pesan (boleh dengan console.log atau alert) bahwa user berhasil jika gagal keluarkan pesan anda gagal login.

jika berhasil login makan user kembali diminta rolenya sebagai apa.
jika role adalah admin atau superadmin maka tampilkan pesan "You have all access as (role)"
jika selain admin atau superadmin maka tampilkan pesan "you have restricted access as (role)"


SOAL 4
tampilkan angka ganjil atau genap disebelah angka

gunakan while atau loop

contoh:
1- angka ganjil
2- angka genap
3- angka ganjil
4- angka genap
.
.
.
50 - angka genap

buat function loopingGanjilGenap(angkaMin, angkaMax)

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

SOAL 6
add up all numbers from 1 to num.

for example: if the input is 4 then your program should return 10 because 1+2+3+4 = 10
for the test case, the parameter num will be any number from 1 to 1000


*/