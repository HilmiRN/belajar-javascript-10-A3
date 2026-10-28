// string

let myName = "Hilmi";
let address = "Jl.Merdeka";
let a = 5;
let b = 6;
console.log(myName);
console.log(a + b);
a = "5";
b = "6";
console.log(a + b);
console.log(a * b);
console.log(`nama saya ${myName} dan alamat saya ${address}`);

const text = "baris pertama \nbaris ke 2";
const tabulasi = "kolom 1 \tkolom 2 \tkolom 3";
const kutipanTunggal = "hari ini jum'at";
const kutipanGanda = 'Dia berkata, "halo!"';
const backslash = "Karakter ini disebut backslash \\";
console.log(text);
console.log(tabulasi);
console.log(kutipanTunggal);
console.log(kutipanGanda);
console.log(backslash);

// number
let z = 10 ** 4;
console.log(typeof z);
// boolean
let isTrue = true;
console.log(typeof isTrue);
// null and undefined

// array
const array = ["Spagetti", "Ayam Geprek", "Telur Dadar"];
console.log(array);
console.log(array[1]);
array.push("Nasi Goreng");
array.push("Nasi Uduk");
array.push("1"); //untuk menambah data pada array
array.pop(); //untuk menghapus data terakhir di array
array.shift(); //untuk menghapus data pertama di array
array.unshift("spagetti"); //menambahkan data ke awal array
console.log(array);
console.log(
  `Nama saya ${myName}, Alamat saya ${address}, dan makanan favorit saya ${array[0]}`,
);

// let myData = {
//   nama: "Hilmi",
//   address: "jl.merdeka",
//   age: "16",
//   food: ["ayam geprek", "spagetti", "nasi goreng"],
// };
// myData.hobi("ngaji");
// console.log(myData);

// let tugas = {
//   nama: "hilmi",
//   umur: 15,
//   sekolah: "Pondok Tahfizh Plus Abudzar",
//   kelas: 10,
//   hobi: "Membaca Buku",
//   citaCita: "Programer",
//   alamat: "Jakarta timur"
// };

// document.write(
//   `Hallo, nama saya ${tugas.nama}, umur saya ${tugas.umur}, saya sekolah di ${tugas.sekolah}, sekarang saya kelas ${tugas.kelas}, hobi saya ${tugas.hobi}, cita-cita saya menjadi ${tugas.citaCita}, dan saya tinggal di ${tugas.alamat}.`
// );
console.log(5 * undefined); // output NaN
let angka = parseInt(prompt("masukkan angka 1-10"));
alert(typeof angka);

// tugas
// tuliskan Variabel dengan 5 data di simpan di array dan tampilkan data tersebut seolah olah carita yang berkaitan dari data itu menggunakan document.write()

// const car = [
//   "Hilmi",
//   "Rolls-Royce La Rose Noire Droptail",
//   "True Love",
//   "Malam Hari",
//   "Bahagia",
// ];
// document.write(
//   `${car[0]} mengendarai ${car[1]} yang berwarna ${car[2]} di ${car[3]} dengan perasaan ${car[4]}.`,
// );
