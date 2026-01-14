// Tetapkan target tanggal dan waktu (Rabu, 6 November 2024, pukul 00:00:00)
const targetDate = new Date("Januari 23, 2026 00:00:00").getTime();

// Function hitung mundur
function updateCountdown() {
  const now = new Date().getTime(); // Waktu sekarang
  const difference = targetDate - now; // Selisih waktu

  // Perhitungan waktu untuk hari, jam, menit, dan detik
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Menampilkan hasil ke elemen HTML
  document.getElementById("hari").innerText = days;
  document.getElementById("jam").innerText = hours;
  document.getElementById("menit").innerText = minutes;
  document.getElementById("detik").innerText = seconds;

  // Jika waktu hitung mundur habis
  if (difference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("hari").innerText = "0";
    document.getElementById("jam").innerText = "0";
    document.getElementById("menit").innerText = "0";
    document.getElementById("detik").innerText = "0";
  }
}

// Memperbarui hitungan setiap detik
const countdownInterval = setInterval(updateCountdown, 1000);
