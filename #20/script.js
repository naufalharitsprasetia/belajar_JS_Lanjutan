// Callback 
// Synchronous Callback
// function halo(nama){
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const mhs = [
//     {
//         "nama" : "Naufal Harits P",
//         "nim" : "432022510141",
//         'email' : "naufal@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "idDosenWali" : 1
//     },
//     {
//         "nama" : "Naufal",
//         "nim" : "432022542521",
//         'email' : "naufal@gmail.com",
//         "jurusan" : "Teknik Mesin",
//         "idDosenWali" : 2
//     },
//     {
//         "nama" : "Harits Prasetia",
//         "nim" : "43202251013331",
//         'email' : "hartisras@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "idDosenWali" : 3
//     },
//     {
//         "nama" : "Prasetia",
//         "nim" : "4320225101311",
//         'email' : "prasetia@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "idDosenWali" : 4
//     }
// ]; 
// console.log("mulai");
// mhs.forEach(m => {
//     for(let i =0;i<1000000000;i++){
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log("selesai");


// Asynchronous Callback
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response);
//             } else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }
// console.log('mulai');

// getDataMahasiswa('data/mahasiswa.json', results =>{
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// },() => {

// });

// console.log('selesai');


// JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m =>console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});

console.log('selesai');