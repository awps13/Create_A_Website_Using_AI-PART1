// login.js

// Fungsi untuk melakukan login
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const notification = document.getElementById("notification");

    // Reset pesan notifikasi dan kelas styling
    notification.textContent = "";
    notification.classList.remove("success", "error");

    // Validasi input kosong
    if (!username || !password) {
        notification.textContent = "Please enter username and password";
        notification.classList.add("error");
        return;
    }

    // Jika username dan password benar, tampilkan pesan sukses
    if (username === "admin" && password === "admin") { // Contoh login valid
        notification.textContent = "Login successfully";
        notification.classList.add("success");

        // Setelah 2 detik, arahkan ke dashboard
        setTimeout(function() {
            window.location.href = "dashboard.html";
        }, 2000); // 2000 ms = 2 detik
    } else {
        // Jika salah, tampilkan pesan error
        notification.textContent = "Invalid username or password";
        notification.classList.add("error");
    }
}

// Event listener untuk tombol "Login"
document.getElementById("loginButton").addEventListener("click", login);

// Event listener untuk mendeteksi tombol "Enter"
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        login();
    }
});
