// script.js

function validateForm() {
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var message = document.getElementById("message").value;

    if (name == "" || dob == "" || gender == null || message == "") {
        alert("Harap isi semua kolom.");
        return false;
    }

    // Tampilkan nilai-nilai yang di-submit dalam popup
    var submitValues = "Nama: " + name + "\n" +
                       "Tanggal Lahir: " + dob + "\n" +
                       "Jenis Kelamin: " + gender.value + "\n" +
                       "Pesan: " + message;
    alert("Formulir Terkirim:\n\n" + submitValues);

    // Mengembalikan nilai false agar formulir tidak dikirim
    return false;
}


// Fungsi ini akan dipanggil saat halaman dimuat
window.onload = function() {
    // Tampilkan prompt saat halaman dimuat dan simpan input pengguna ke dalam variabel "name"
    var name = prompt("Welcome! Please enter your name:");

    // Tampilkan alert dengan pesan yang menyertakan nama yang dimasukkan pengguna
    alert("Hello, " + name + "! Welcome to our website!");
}