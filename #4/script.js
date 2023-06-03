// 2.1 Execution Context, Hoisting & Scope

// console.log(nama);
// var nama = "Sandhika";

// Creation Phase pada Global Context
// Nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// Execution Phase

// var nama = "Sandhika";
// var umur = 33;
// console.log(sayHello());

// function sayHello() {
//   return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = "Sandhika Galih";
// var username = "@sandhikagahlih";

// function cetakURL() {
//   console.log(arguments);
//   var instagramURL = "https://www.instagram.com/";
//   return instagramURL + username;
// }

// console.log(cetakURL("@doddyferdiansyah", "@naufalharisprasetia"));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini C");
//     }
//     c();
//   }
//   b();
// }
// a();

function satu() {
  var nama = "Sandhika Galih";
  console.log(nama);
}
function dua() {
  console.log(nama);
}
console.log(nama);
var nama = "Erik";
satu();
dua("Doddy");
console.log(nama);
