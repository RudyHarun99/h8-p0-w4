/*
Logic Challenge - Naik Angkot
Problem
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter
berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap
melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{
    penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000
}]
*/

function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var ongkos = 2000, naik = 0, turun = 0, jarak = 0, tarif = 0;
  var hasil = [];

  for (var i = 0; i < arrPenumpang.length; i++) {
    if (arrPenumpang.length == 0) {
      hasil = [];
    } else {
      // mencari nilai index naik dan turun
      for (var j = 0; j < rute.length; j++) {
        if (arrPenumpang[i][1] == rute[j]) {
          naik = j;
        }
        if (arrPenumpang[i][2] == rute[j]) {
          turun = j;
        }
      }
      // menghitung jarak dan tarif
      jarak = turun - naik;
      tarif = ongkos * jarak;
      // membuat objek
      var obj = {};
      obj.penumpang = arrPenumpang[i][0];
      obj.naikDari = arrPenumpang[i][1];
      obj.tujuan = arrPenumpang[i][2];
      obj.bayar = tarif;
      hasil.push(obj);
    }
  }
  
  return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]