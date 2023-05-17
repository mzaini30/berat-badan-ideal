export default function hitungBeratBadanIdeal(tinggi, jenisKelamin) {
  var beratBadanIdeal;

  if (jenisKelamin === "pria") {
    beratBadanIdeal = tinggi - 100 - ((tinggi - 100) * 10) / 100;
  } else if (jenisKelamin === "wanita") {
    beratBadanIdeal = tinggi - 100 - ((tinggi - 100) * 15) / 100;
  } else {
    return "Jenis kelamin tidak valid. Silakan masukkan 'pria' atau 'wanita'.";
  }

  return beratBadanIdeal;
}

// Contoh penggunaan fungsi
// var tinggi = 170; // Tinggi dalam cm
// var jenisKelamin = "pria";

// var beratBadanIdeal = hitungBeratBadanIdeal(tinggi, jenisKelamin);
// console.log("Berat badan ideal: " + beratBadanIdeal.toFixed(2) + " kg");
