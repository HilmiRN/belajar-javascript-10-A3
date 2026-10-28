// looping

// for
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let a = 10; a >= 1; a--) {
  console.log(a);
}

// studi case

// mobil grab 1-10 dalam keaddan baik
// for (let b = 1; b <= 10; b++) {
//   if (b === 9) {
//     console.log("mobil grab ke " + b + " sedang di bengkel");
//   } else {
//     console.log("mobil grab ke " + b + " Dalam keadaan baik");
//   }
// }
for (let b = 1; b <= 10; b++) {
  if (b === 3) {
    console.log("mobil grab ke " + b + " rusak");
  } else if (b === 2) {
    console.log("mobil grab ke " + b + " dicuri");
  } else {
    console.log("mobil grab ke " + b + " Dalam keadaan baik");
  }
}
for (let angka = 1; angka <= 10; angka++) {
  if (angka % 2 === 1) {
    console.log("angka " + angka + " adalah angka ganjil");
  }
}

// while
let bus = 1;
while (bus <= 10) {
  if (bus == 7) {
    console.log("bus ke-" + bus + " dalam keadaan rusak/dicuri");
  } else {
    console.log("bus ke-" + bus + " dalam keadaan baik");
  }
  bus++;
}
let kapal = 11;
do {
  console.log("kapal " + kapal + " dalam keadaan baik");
} while (kapal <= 10);//tetap muncul walaupun 1 kali
