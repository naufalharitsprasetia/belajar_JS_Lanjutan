// Template Literal / Template String
// const nama = "Sandhika";
// const umur = 33;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur}, tahun.`);
// console.log("Halo, nama saya " + nama + ", dan saya " + umur + " tahun.");

// Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert("Hallo")}`);
// const x = 10;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragments
const mhs = {
  nama: "Sandhika Galih",
  umur: 33,
  nrp: "432022611515",
  email: "sandhika@gmail.com",
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;
console.log(el);
