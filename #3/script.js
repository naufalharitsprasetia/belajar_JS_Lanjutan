// Cara untuk membuat Object pada Javascript
// 1. Object Literal
// Problem => Tidak Efisien jika object nya banyak dan besar
// let mahasiswa = {
//   nama: "Sandhika",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat Makan!`);
//   },
// };

// 2. Function Declaration

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat Makan!`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama}, Selamat Main!`);
//   },
//   tidur: function (porsi) {
//     this.energi += porsi * 2;
//     console.log(`Hallo ${this.nama}, Selamat Tidur!`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);

//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;

//   return mahasiswa;
// }
// let sandhika = Mahasiswa("Sandika", 15);
// let doddy = Mahasiswa("Sandika", 25);
// let naufal = Mahasiswa("Sandika", 10);

// 3. Constructor Function
// Keyword New
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat Makan!`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama}, Selamat Main!`);
//   };
// }
// let sandhika = new Mahasiswa("Sandhika", 10);

// 4. Object.create

// Versi obeject inheritance prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, Selamat Makan!`;
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, Selamat Main!`;
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += porsi * 2;
//   return `Halo ${this.nama}, Selamat Tidur!`;
// };

// let sandhika = new Mahasiswa("Sandhika", 10);

// Versi Class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }
//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, Selamat Makan!`;
//   }
//   main(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, Selamat Main!`;
//   }
//   tidur(jam) {
//     this.energi += porsi * 2;
//     return `Halo ${this.nama}, Selamat Tidur!`;
//   }
// }

// let sandhika = new Mahasiswa("Sandhika", 10);
// let doddy = new Mahasiswa("Doddy", 20);

// Semua punya Prototype nya masing2
// Array

let angka = [3, 2, 1];

// let angka = new Array() // Memanggil fungsii Array
// function Array() {
//   let this = Object.create(Array.prototype);
// }
