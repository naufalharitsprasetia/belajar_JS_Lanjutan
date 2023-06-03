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

// let mahasiswa = ["Sandhika Galih", "Doddy Ferdiansyah", "Erik"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama,
//   jmlHuruf: nama.length,
// }));
// console.table(jumlahHuruf);

// Konsep This pada Arrow Function

// Constructor Function
// const Mahasiswa = function () {
//   this.nama = "Sandhika";
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`Halo , nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const sandhika = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//   this.nama = "Sandhika";
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`Halo , nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const sandhika = new Mahasiswa();

// Object Literal
// const mhs1 = {
//   nama: "Sandhika",
//   umur: 33,
//   sayHello: () => {
//     console.log(`Halo , nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     console.log(this);
//   },
// };

// const Mahasiswa = function () {
//   this.nama = "Sandhika";
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`Halo , nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };
// const sandhika = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
    console.log(this);
  }, 600);
});
