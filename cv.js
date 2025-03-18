document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleMode");
    const body = document.body;

    // Pastikan tombol ditemukan sebelum lanjut
    if (!toggleButton) {
        console.error("Elemen #toggleMode tidak ditemukan di HTML!");
        return;
    }

    // Cek mode terakhir dari localStorage
    let darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Mode Terang";
    }

    // Event untuk tombol mode
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleButton.textContent = "☀️ Mode Terang";
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleButton.textContent = "🌙 Mode Gelap";
        }
    });
});
