function showTips() {
  alert("Tips: Booking jauh hari & jangan lupa bawa kamera underwater!");
}

function validateBooking() {
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const paket = document.getElementById('paket').value;

  if (!nama || !email || !paket) {
    alert("Mohon isi semua kolom!");
    return false;
  }

  alert(`Terima kasih, ${nama}! Booking Anda untuk paket ${paket} telah diterima.`);
  return true;
}
