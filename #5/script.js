// function init() {
//   // let nama = "Sandhika";
//   return function (nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("Sandhika");

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("Sandhika");
// selamatSiang("Galih");
// selamatMalam("Naufal");

// console.dir(selamatMalam("Sandhika"));

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.dir(add);
console.log(add());
console.log(add());
console.log(add());
