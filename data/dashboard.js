// dashboard.js

// Contoh interaksi sederhana: Notifikasi logout
document.querySelector(".sidebar ul li a[href='login.html']").addEventListener("click", function(event) {
    event.preventDefault();
    location.reload();
});
