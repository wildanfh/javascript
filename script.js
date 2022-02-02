// var x = 10;
// if (x >= 10) {
//   console.log("hello world");
// }

// var brea = 10;

// console.log(brea);

// var nama = "wildan",
//   umur = 16,
//   lulus = true;

// if (lulus) {
//   console.log(nama, umur);
// }

// var x = "hello world";
// console.log("isi daro variabel x adalah " + x);

// video 16 (popup box)

// var klik = confirm("klik ok / cancel");

// if (klik === true) {
//   alert("anda benar");
// } else {
//   alert("anda salah");
// }

// alert("selamat datang");
// var lagi = true;

// while (lagi) {
//   var nama = prompt("masukkan nama :");
//   alert("halo " + nama + " !");

//   lagi = confirm("lagi?");
// }

// alert("terima kasih");

// video 17 -control flow-

// var angka = Number;
// var lagi = true;
// while (lagi) {
//   var input = prompt("masukkan angka :");
//   if (angka === true) {
//     alert("angka yang anda masukkan adalah : " + input);
//   } else {
//     alert(input + " bukan angka!!");
//   }
//   lagi = confirm("lagi?");
// }

// var x = "wildan";
// alert("mulai");
// for (var i = 0; i < 5; i++) {
//   console.log(x);
// }
// alert("selesai");

// var x = prompt("masukkan angka :");

// if (x % 2 === 0) {
//   alert(x + " merupakan bilangan Genap");
// } else {
//   alert(x + " merupakan bilangan Ganjil");
// }

// video 18 -pengulangan (while);

// dihentikan oleh user
// var lagi = true;
// while (lagi) {
//   console.log("halo");
//   lagi = confirm("lagi?");
// }

// dihentikan program
// var nilai = 1;
// while (nilai <= 10) {
//   console.log("Hello World");
//   nilai++;
// }

// membuatnya berurutan
// var nilai = 1;
// while (nilai <= 1000) {
//   console.log("Hello World " + nilai + "x");
//   nilai++;
// }

// video 19 - tabel penelusuran -
// latihan angkot 1
// var jmlAngkot = 10;

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
// }

// video 20 - pengulangan (for) -
// latihan angkot 2
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// while (noAngkot <= angkotBeroperasi) {
//   console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
//   noAngkot++;
// }

// for (var noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//   console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
// }

// video 21 - pengondisian (if else) -
// var angka = prompt("masukkan angka");
// if (angka % 2 === 1) {
//   alert("kamu memasukkan angka ganjil");
// } else {
//   alert("kamu memasukkan angka genap");
// }

// latihan angkot 3
// var noAngkot;
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi) {
//     console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//   } else {
//     console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
//   }
// }

// video 22 - pengondisian (else if) -
// var angka = prompt("masukkan angka");
// if (angka % 2 === 1) {
//   alert("kamu memasukkan angka ganjil");
// } else if (angka % 2 === 0) {
//   alert("kamu memasukkan angka genap");
// } else {
//   alert("yang anda masukkan bukan angka");
// }

// latihan angkot 4
// var noAngkot;
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi) {
//     console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//   } else if (noAngkot === 8) {
//     console.log("angkot No. " + noAngkot + " sedang lembur.");
//   } else {
//     console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
//   }
// }

// video 23 - latihan pengondisian -
// latihan angkot 5
// var noAngkot;
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi) {
//     console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//   } else if (noAngkot === 8 || noAngkot === 10) {
//     console.log("angkot No. " + noAngkot + " sedang lembur.");
//   } else {
//     console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
//   }
// }

// latihan angkot 6
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
//     console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
//   } else if (noAngkot === 7 || noAngkot === 10 || noAngkot === 5) {
//     console.log("Angkot No. " + noAngkot + " sedang lembur.");
//   } else {
//     console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
//   }
// }

// video 24 - pengondisian (switch) -
// case 1
// var angka = prompt("masukkan angka :");

// switch (angka) {
//   case "1":
//     alert("anda memasukkan angka 1");
//     break;
//   case "2":
//     alert("anda memasukkan angka 2");
//     break;
//   case "3":
//     alert("anda memasukkan angka 3");
//     break;
//   default:
//     alert("anda memasukkan angka yang salah");
// }

// case 2
// var item = prompt("masukkan salah satu nama makanan berikut \n (nasi,daging,susu,burger,softdrink)");

// switch (item) {
//   case "nasi":
//   case "daging":
//   case "susu":
//     alert("makanan / minuman sehat");
//     break;
//   case "burger":
//   case "softdrink":
//     alert("makanan / minuman tidak sehat");
//     break;
//   default:
//     alert("anda memasukkan nama makanan/minuman yang salah");
// }

// video 25 - pengulangan pengondisian bersarang -
// var s = "";
// for (var i = 10; i > 0; i--) {
//   for (var e = 0; e < i; e++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// var x = "";
// for (var y = 0; y < 5; y++) {
//   for (var z = 0; z < 5; z++) {
//     if (y % 2 === 0) {
//       x += " #";
//     } else {
//       x += "# ";
//     }
//   }
//   x += "\n";
// }
// console.log(x);

// var x = "";
// for (var y = 10; y > 0; y--) {
//   for (var z = 0; z < y; z++) {
//     x += "#";
//   }
//   x += "\n";
// }
// console.log(x);

// video 26 - membuat game suit jawa -

// menangkap pilihan player
// var p = prompt("pilih gajah, orang, / semut");
// // menangkap pilihan computer
// // membangkitkan bilangan random
// var comp = Math.random();
// var tanya = true;
// while (tanya) {
//   if (comp <= 0.34) {
//     comp = "gajah";
//   } else if (comp > 0.34 && comp <= 0.67) {
//     comp = "orang";
//   } else {
//     comp = "semut";
//   }
//   var hasil = "";
//   // menentukan rules
//   if (p == comp) {
//     hasil = "Seri";
//   } else if (p == "gajah") {
//     // if (comp == "orang") {
//     //   hasil = "Menang";
//     // } else {
//     //   hasil = "kalah";
//     // }
//     hasil = comp == "orang" ? "menang" : "kalah";
//   } else if (p == "orang") {
//     hasil = comp == "semut" ? "menang" : "kalah";
//   } else if (p == "semut") {
//     hasil = comp == "gajah" ? "menang" : "kalah";
//   } else {
//     hasil = "memasukkan pilihan yang salah";
//   }
//   // tampilkan hasilnya
//   alert("anda memilih " + p + " computer memilih " + comp + ", maka anda " + hasil);
//   tanya = confirm("lagi");
// }
// alert("terima kasih sudah bermain");

// // membangkitkan pilihan player
// var p = prompt("tebak angka antara 1-10");
// // membangkitkan pilihan computer
// var comp = Math.floor(Math.random() * 10 + 1);
// console.log(comp);

// // menentukan rules

// let limit = 3;
// const tes = () => {
//   limit--;
//   const data = prompt("angka :");
//   if (limit == 0) {
//     alert("you lose");
//   } else {
//     cek(p);
//   }
// };
// const cek = (data) => {
//   if (data == comp) {
//     alert("you win");
//   } else {
//     tes();
//   }
// };
// // menampilkan hasil
// tes();

// // video 27 - function (intro) -
// function tambah(a, b) {
//   var plus;
//   plus = a + b;

//   return plus;
// }

// console.log(tambah(10, 8));

// video 28 - function (membuat dan menjalankan function) -
// function volDuKub(a, b) {
//   var kubusA;
//   var kubusB;
//   kubusA = a * a * a;
//   kubusB = b * b * b;
//   ab = kubusA + kubusB;

//   return ab;
// }

// console.log(volDuKub(3, 8));

// video 29 - function (parameter dan argument) -
// function jmlDuaBil(a, b) {
//   return a + b;
// }
// var a = parseInt(prompt("masukkan nilai 1 :"));
// var b = parseInt(prompt("masukkan nilai 2 :"));
// var hasil = jmlDuaBil(a, b);
// alert(hasil);

// function jmlDuaBil(a, b) {
//   return a + b;
// }

// function kaliDuaBil(a, b) {
//   return a * b;
// }

// var hasil = kaliDuaBil(jmlDuaBil(6, 3), jmlDuaBil(2, 4));
// // var hasil = jmlDuaBil(20, 10, 30);
// console.log(hasil);

// function tambah() {
//   return arguments;
// }

// console.log(tambah(1, 2, 3, "ok", true));

// function tambah() {
//   var hasil = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }

// var x = tambah(1, 2, 3, 4, 5, 6, 7, 9, 8, 8);
// console.log(x);

// video 30 - function (refactoring) -
// function volDuKub(a, b) {
//   return a * a * a + b * b * b;
// }
// alert(volDuKub(5, 7));
// video 31 - function (variabel scope) -
// // global scope / window scope
// var x = 1;
// // variabel yang bisa diakses dimana saja

// // function scope
// function satu() {
//   var x = 2;
//   console.log(x);
// }
// satu(x);
// // variabel yang hanya bisa dipanggil dalam function tersebut.

// video 32 - function (rekursif) -
// function x() {
//   return x();
// }
// x();

// function cetakAngka(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   cetakAngka(n - 1);
// }
// cetakAngka(10);

// function faktorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   console.log(n);
//   return n *= faktorial(n - 1);
// }

// faktorial(5);

// video 33 - function (decaration vs expression) -
// function declaration
// function halo() {
//   var nama = prompt("masukkan nama");
//   alert("halo " + nama);

//   return nama;
// }

// halo();

// function expression
// var halo = function () {
//   var nama = prompt("masukkan nama");
//   alert("halo " + nama);

//   return nama;
// };

// halo();

// video 34 - array (intro) -

// contoh array
// var hari = ["senin", "selasa", "rabu", "kamis", "jum'at", "sabtu", "minggu"];
// console.log(hari.length);

// yang bisa dimasukkan kedalam array
// var promp = false;
// function halo() {
//   var nama = prompt("masukkan nama");
//   alert("halo " + nama);

//   return nama;
// }
// var arr = ["senin", true, 8, promp, halo, [1, 2, 3]];
// console.log(arr);

// video 35 - array (manipulasi array) -
// menambah isi array
// var arr = [];

// arr[0] = ["wildan"];
// arr[1] = ["firdaus"];
// arr[2] = ["al"];
// arr[4] = ["ok"];

// console.log(arr);

// menghapus isi array

// var arr = ["senin", true, 8, [1, 2, 3]];
// arr[1] = undefined;
// console.log(arr);

// menampilkan isi array

// var hari = ["minggu", "senin", "selasa", "rabu", "kamis", "jum'at", "sabtu"];

// for (var i = 0; i < hari.length; i++) {
//   console.log("hari ke - " + (i + 1) + " adalah hari " + hari[i]);
// }

// method pada array

// 1. join
// var santri = ["wildan", "hudza", "aziz", "zuhdy", "adib"];
// console.log(santri.join(" - "));

// 2. push
// var santri = ["wildan", "hudza", "aziz", "zuhdy", "adib"];
// santri.push("naufal", "fayyaz");
// console.log(santri.join(" - "));

// 3.pop
// var santri = ["wildan", "hudza", "aziz", "zuhdy", "adib"];
// santri.pop();
// santri.pop();
// console.log(santri.join(" - "));

// 4. unshift
// var santri = ["wildan", "hudza", "aziz", "zuhdy", "adib"];
// santri.unshift("naufal", "fayyaz");
// console.log(santri.join(" - "));

// 5. shift
// var santri = ["wildan", "hudza", "aziz", "zuhdy", "adib"];
// santri.shift();
// santri.shift();
// console.log(santri.join(" - "));

// video 36 - slice & splice -
// 6. slice
// slice(=awal,<akhir)
// var santri = ["wildan", "hudza", "aziz", "zuhdy", "adib"];
// var santri2 = santri.slice(3, 5);
// console.log(santri.join(" - "));
// console.log(santri2.join(" - "));

// 7. splice
// splice(mulaiElemenBerapa, mauDihapusYangMana opt, elemenBaru1, elemenBaru2, ... opt)
// var santri = ["wildan", "hudza", "aziz", "zuhdy", "adib"];
// santri.splice(2, 0, "cimin");
// console.log(santri.join(" - "));

// video 37 - foreach, map, sort -
// 8. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }
// function cetak(e) {
//   console.log(e);
// }
// angka.forEach(function (e) {
//   console.log(e);
// });
// var santri = ["wildan", "hudza", "aziz", "zuhdy", "adib"];
// santri.forEach(function (e, i) {
//   console.log("santri ke - " + (i + 1) + " bernama " + e);
// });

// 9. map
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });

// console.log(angka2.join(" - "));

// 10. sort
// var angka = [1, 3, 7, 6, 2, 4, 8];
// angka.sort();
// console.log(angka.join(" - "));

// jika terdapat angka puluhan
// var angka = [1, 3, 7, 6, 2, 4, 8, 10, 15, 20];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

// video 38 - array (filter & find) -
// 11. filter
// var angka = [1, 3, 7, 6, 2, 4, 8, 10, 15, 20];
// var fil = angka.filter(function (x) {
//   return x > 7;
// });
// console.log(fil.join(" - "));

// 12. find
// var angka = [1, 3, 7, 6, 2, 4, 8, 10, 15, 20];
// var fin = angka.find(function (y) {
//   return y === 3;
// });
// console.log(fin);

// video 39 & 40 - array (membuat program pengelolaan penumpang) -
// var penumpang = [];
// var tambahPenumpang = function (namaPenumpang, penumpang) {
//   // jika angkot kosong
//   if (penumpang.length == 0) {
//     // tambah penumpang di awal array
//     penumpang.push(namaPenumpang);
//     // kembalikan isi array dan keluar dari function
//     return penumpang;
//   } else {
//     //   telusuri seluruh kursi dari awal
//     for (var i = 0; i < penumpang.length; i++) {
//       // jika ada kursi kosong
//       if (penumpang[i] == undefined) {
//         //   tambah penumpang di kursi tersebut
//         penumpang[i] = namaPenumpang;
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//         // jika sudah ada nama yang sama
//       } else if (penumpang[i] == namaPenumpang) {
//         //   tampilkan pesan kesalahannya
//         console.log(namaPenumpang + " sudah ada didalam");
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//         // jika seluruh kursi terisi
//       } else if (i == penumpang.length - 1) {
//         //   tambah penumpang di akhir array
//         penumpang.push(namaPenumpang);
//         // kembalikan nilai array dan keluar dari function
//         return penumpang;
//       }
//     }
//   }
// };

// var hapusPenumpang = function (namaPenumpang, penumpang) {
//   // jika nagkot kosong
//   if (penumpang.length == 0) {
//     // tampilkan pesan bahwa angkot kosong
//     console.log("angkot masih kosong");
//     // kembalikan nilai array dan keluar dari function
//     return penumpang;
//     // jika ada penumpang yang namanya sesuai
//   } else {
//     for (var i = 0; i < penumpang.length; i++) {
//       if (penumpang[i] == namaPenumpang) {
//         // hapus nama penumpanng
//         // ganti dengan nilai undefined
//         penumpang[i] = undefined;
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//         // jika tidak ada yang namanya sesuai
//       } else if (i == penumpang.length - 1) {
//         // tampilkan pesan kesalahannya
//         console.log("tidak ada penumpang dengan nama " + namaPenumpang);
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//       }
//     }
//   }
// };

// video 41 - object (intro) -
// var santri = {
//   nama: "wildan",
//   lulus: true,
//   IPSemester: [3.1, 3.4, 3.2, 3.9, 2.9, 3.5],
//   IPKumulatif: function () {
//     var total = 0;
//     var ips = this.IPSemester;
//     for (var i = 0; i < ips.length; i++) {
//       total += ips[i];
//     }
//     return total / ips.length;
//   },
// };
// console.log(santri.IPKumulatif());

// var orang = {
//   nama: "wildan",
//   umur: 17,
//   pekerjaan: "siswa",
//   alamat: {
//     kota: "salatiga",
//     provinsi: "jawa tengah",
//   },
//   sapa: function () {
//     return "halo nama saya " + this.nama + " umur saya " + this.umur + " dan saya adalah seorang " + this.pekerjaan + ".";
//   },
// };
// alert(orang.sapa());

// video 42 - object (membuat object) -

// object literal

// var mhs = {
//   nama: "wildan",
//   nrp: 0873487372,
//   email: "wildan@gmail.com",
//   jurusan: "teknik informatika",
// };

// // function declaration

// function objectMhs(nama, nrp, email, jurusan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nrp = nrp;
//   mhs.email = email;
//   mhs.jurusan = jurusan;

//   return mhs;
// }

// var mhs2 = objectMhs("wildan", 0873473897, "wildan@gmail.com", "teknik informatika");

// // constructor function

// function Mhs(nama, nrp, email, jurusan) {
//   // var this = {};
//   this.nama = nama;
//   this.nrp = nrp;
//   this.email = email;
//   this.jurusan = jurusan;
//   //   return this;
// }

// var mhs3 = new Mhs("hudza", 08763632732, "hudza@gmail.com", "desain grafis");

// video 43 - object (this) -
// sebuah keyword spesial yang selalu didefinisikan disetiap function namun memiliki konteks yang berbeda di setiap cara membuat function

// console.log(this);
// console.log(window === this);
// var a = 20;
// console.log(this.a);

// // function declaration
// var halo = function () {
//   console.log(this);
//   console.log("halo");
// };
// this.halo();
// // this pada function declaration mengembalikan nilai global

// // object literal
// var obj = { nama: "wildan", umur: "17" };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };
// obj.halo();
// // this pada object literal mengembalikan object yang bersangkutan

// // constructor function
// function Obj() {
//   console.log(this);
//   console.log("halo");
// }

// new Obj();
// // mengembalikan object yang baru dibuat

// video 44 - object (latihan) -
function Latihan(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
}
