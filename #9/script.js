// 4.2 Filter , Map & Reduce
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari Angka >= 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// Filter
// const newAngka = angka.filter((a) => a >= 3);
// console.table(newAngka);

// Map
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a + 2);
// console.table(angka);
// console.table(newAngka);

// Reduce
// jumlahkan seluruh elemen pada array
// ada Nilai awal , defeault nya 0
// const newAngka = angka.reduce((acc, cur) => acc + cur, 4);
// console.log(newAngka);

// Method Berantai
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka
  .filter((a) => a > 5) // 8,9,9
  .map((a) => a * 3) // 24, 27, 27
  .reduce((acc, cur) => acc + cur); // 78

console.log(hasil);
