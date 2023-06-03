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
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama}, Selamat Makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama}, Selamat Main!`);
  },
  tidur: function (porsi) {
    this.energi += porsi * 2;
    console.log(`Hallo ${this.nama}, Selamat Tidur!`);
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);

  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.makan = methodMahasiswa.makan;
  mahasiswa.main = methodMahasiswa.main;

  return mahasiswa;
}
let sandhika = Mahasiswa("Sandika", 15);
let doddy = Mahasiswa("Sandika", 25);
let naufal = Mahasiswa("Sandika", 10);
