/*

Buat variabel nama dengan value andre, password dengan value 123,
dan isLogin dengan value false. user diminta untuk memasukan nama, password dan role (gunakan prompt).

Jika nama dan password  sesuai maka ubah isLogin menjadi true,
keluarkan pesan (boleh dengan console.log atau alert) bahwa user berhasil jika gagal keluarkan pesan anda gagal login.

jika berhasil login makan user kembali diminta rolenya sebagai apa.
jika role adalah admin atau superadmin maka tampilkan pesan "You have all access as (role)"
jika selain admin atau superadmin maka tampilkan pesan "you have restricted access as (role)"

PSUEDOCODE

SET user = andre
SET password = 123
set isLogin = false

SAVE AND READ nama
SAVE AND READ katakunci

IF nama == user dan katakunci == password
    tampilkan "berhasil login"
    SAVE AND READ role
    IF role == admin ATAU superadmin
        tampilkan " You have all access as role"
    ELSE
        tampilkan "you have resticted access as role"
ELSE
    tampilkan "gagal login"

*/

var user = "andre";
var password = 123;
var isLogin = false;

nama = prompt("masukan nama anda :");
kataKunci = prompt("masukan password:");

if (nama == user && kataKunci == password) {
    isLogin = true;
    alert("anda berhasil login");
    //console.log("anda berhasil login");
    role = prompt("masukan role anda");
    if (role === "admin" || role === "superadmin") {
        console.log("You have all access as " + role)
    } else {
        console.log("you have restricted access as " + role)
    }
    console.log("login " + isLogin)

} else {
    alert("anda gagal login");
    console.log("login " + isLogin);
}