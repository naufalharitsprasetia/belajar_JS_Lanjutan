// Destructuring Variable / Assigment

// Destructuring Array
// const perkenalan = ["Halo", "nama", "saya", "Sandhika Galih"];

// const [salam, satu, dua, nama] = perkenalan;

//Skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);
// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// Return value pada function
// function coba() {
//   return [1, 2];
// }
// const a = coba();
// console.log(a);

// Rest paramater
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructing Object
// const mhs = {
//   nama: "Sandhika Galih",
//   umur: 33,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// Assigment tanpa deklarasi object

// ({ nama, umur } = { nama: "Sandhika Galih", umur: 33 });
// console.log(nama);

// Assign ke Variabe baru
// const mhs = {
//   nama: "Sandhika Galih",
//   umur: 33,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);
// console.log(u);

// Memberikan Default Value
// const mhs = {
//   nama: "Sandhika Galih",
//   umur: 33,
//   email: "naufalharisprawsra@gamfil.com",
// };

// const { nama, umur, email = "naufal@gmail.com" } = mhs;
// console.log(email);

// Memberi Nilai Default + Assign ke variabel baru
// const mhs = {
//   nama: "Sandhika Galih",
//   umur: 33,
//   email: "naufalharisprasetia@gmail.com",
// };

// const { nama: n, umur: u, email: e = "naufal@gmail.com" } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//   nama: "Sandhika Galih",
//   umur: 33,
//   email: "naufalharisprasetia@gmail.com",
// };

// const { nama, ...value } = mhs;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Sandhika Galih",
  umur: 33,
  email: "naufalharisprasetia@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
