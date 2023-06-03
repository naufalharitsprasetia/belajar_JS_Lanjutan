// Fungsi Expression
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("Sandhika"));

// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("Doddy Ferdiansyah"));

// const tampilNama = (nama, waktu) => {
//   return `Halo ${nama}, Selamat ${waktu}`;
// };
// console.log(tampilNama("Doddy Ferdiansyah", "Malam"));

// Implisit Return
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log(tampilNama("Sandhika Galih"));

// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

let mahasiswa = ["Sandhika Galih", "Doddy Ferdiansyah", "Erik"];

let jumlahHuruf = mahasiswa.map(function (nama) {
  return nama.length;
});

console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama,
//   jmlHuruf: nama.length,
// }));
// console.table(jumlahHuruf);
