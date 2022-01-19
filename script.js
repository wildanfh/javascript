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
var p = prompt("pilih gajah, orang, / semut");
// menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.random();
var tanya = true;
while (tanya) {
  if (comp <= 0.34) {
    comp = "gajah";
  } else if (comp > 0.34 && comp <= 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "Seri";
  } else if (p == "gajah") {
    // if (comp == "orang") {
    //   hasil = "Menang";
    // } else {
    //   hasil = "kalah";
    // }
    hasil = comp == "orang" ? "menang" : "kalah";
  } else if (p == "orang") {
    hasil = comp == "semut" ? "menang" : "kalah";
  } else if (p == "semut") {
    hasil = comp == "gajah" ? "menang" : "kalah";
  } else {
    hasil = "memasukkan pilihan yang salah";
  }
  // tampilkan hasilnya
  alert("anda memilih " + p + " computer memilih " + comp + ", maka anda " + hasil);
  tanya = confirm("lagi");
}
alert("terima kasih sudah bermain");
