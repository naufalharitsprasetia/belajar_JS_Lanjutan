// Cara untuk membuat Object pada Javascript
// 1. Object Literal

// let mahasiswa = {
//   nama: "Sandhika",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat Makan!`);
//   },
// };

// 2. Function Declaration]

// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat Makan!`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energi - +jam;
//     console.log(`Hallo ${this.nama}, Selamat Main!`);
//   };
//   return mahasiswa;
// }
// let sandhika = Mahasiswa("Sandika", 15);
// let doddy = Mahasiswa("Sandika", 25);
// let naufal = Mahasiswa("Sandika", 10);

// 3. Constructor Function
// Keyword New
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama}, Selamat Makan!`);
  };
  this.main = function (jam) {
    this.energi - +jam;
    console.log(`Hallo ${this.nama}, Selamat Main!`);
  };
}
let sandhika = new Mahasiswa("Sandhika", 10);

// 4. Object.create
