/**
 * 
 * @param {string} username 
 * @param {number} password 
 * @param {string} role
 * 
 */

/*

Buat variabel nama dengan value andre, password dengan value 123,
dan isLogin dengan value false. user diminta untuk memasukan nama, password dan role (gunakan prompt).

Jika nama dan password  sesuai maka ubah isLogin menjadi true,
keluarkan pesan (boleh dengan console.log atau alert) bahwa user berhasil jika gagal keluarkan pesan anda gagal login.

jika berhasil login makan user kembali diminta rolenya sebagai apa.
jika role adalah admin atau superadmin maka tampilkan pesan "You have all access as (role)"
jika selain admin atau superadmin maka tampilkan pesan "you have restricted access as (role)"

*/

function cekLogin(username, password, role) {
    var isLogin = false;
    var nama = "andre";
    var kataKunci = 123;

    if (nama == username && kataKunci == password) {
        isLogin = true;
        message = `hai ${username} anda berhasil login`;

        if (role === "admin" || role === "superadmin") {
            message1 = `You have all access as  ${role}`;
        } else {
            message1 = `you have restricted access as ${role}`;
        }

    } else {
        message = "anda gagal login";
        message1 = "silahkan coba lagi!!";
    }
    return `${message} \n ${message1} \n (isLogin = ${isLogin})`;
}

username = prompt("masukan nama anda : ");
password = prompt("masukan password anda :");
role = prompt("masukan role anda : ");

alert(cekLogin(username, password, role));