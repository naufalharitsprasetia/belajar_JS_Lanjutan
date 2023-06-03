// Desctructuring

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const jumlah = penjumlahanPerkalian(2, 3)[1];
// console.log(jumlah);

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2, 3);
// console.log(tambah);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }
// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);

// Destructuring function arguments
const mhs1 = {
  nama: "Sandhika Galih",
  umur: 33,
  email: "sandhikagalih@unpas.ac.id",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};
// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));
