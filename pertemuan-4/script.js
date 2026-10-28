// menghitung total biaya parkir secara otomatis
let jenisKendaraan = prompt(
  "Pilih jenis kendaraan:\n 1. Motor\n 2. Mobil\n 3. Bus",
);
let durasiParkir = Number(prompt("Masukkan durasi parkir (dalam jam):"));

switch (jenisKendaraan) {
  case "Motor":
    alert(5000 * durasiParkir);
    break;
  case "Mobil":
    alert(10000 * durasiParkir);
    break;
  case "Bus":
    alert(15000 * durasiParkir);
    break;

  default:
    alert("Error, Silahkan hubungi petugas");
    break;
}
// looping

// for
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
