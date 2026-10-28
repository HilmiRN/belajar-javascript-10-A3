// konversi tipe data
let angka = 100;
let konfersiAngka = angka.toString();

console.log(konfersiAngka + konfersiAngka);
console.log(typeof konfersiAngka);

let tahun = "2026";
let konfersiTahun = Number(tahun);

console.log(konfersiTahun + 4);

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean("hilmi"));

// oprator

// oprator aritmatika
let a = 10;
let b = 5;
// penjumlahan
console.log("Penjumlahan : " + (a + b));
// pengurangan
console.log("Pengurangan : " + (a - b));
// perkalian
console.log("Perkalian : " + a * b);
// pembagian
console.log("Pembagian : " + a / b);
// modulus (sisa dari pembagian)
console.log("Modulus : " + (a % b));
// pangkat
console.log("Pangkat : " + a ** b);

// oprator Penugasan

let x = 10;
console.log("nilai x awal : " + x);
x += 5;
console.log("hasil setelah penugasan:  " + x);

x -= 5;
console.log("hasil setelah penugasan:  " + x);

x *= 5;
console.log("hasil setelah penugasan:  " + x);

x /= 5;
console.log("hasil setelah penugasan:  " + x);

x %= 5;
console.log("hasil setelah penugasan:  " + x);

x **= 5;
console.log("hasil setelah penugasan:  " + x);

// opreator perbandingan

let c = 10;
let d = 5;
let e = "10";

// lebih dari
console.log("lebih dari : " + (c > d));
// kurang dari
console.log("Kurang dari : " + (c < d));
// == oprator
console.log("Sama Dengan (==) : " + (c == e));
// === oprator
console.log("Sama Dengan (===) : " + (c === e));
// != oprator
console.log("Tidak Sama Dengan (!=) : " + (c != e));
// !== oprator
console.log("Tidak Sama Dengan (!==) : " + (c !== e));
