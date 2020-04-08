
/*

Logic Challenge - Faktor Persekutuan Terbesar
Problem
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka.
Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar).
FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat
membagi habis kedua bilangan tersebut.
*/

function fpb(angka1, angka2) {
    // buat list untuk faktor dari angka1
    var faktor1 = [];
    for (var i = 1; i <= angka1; i++) {
      if (angka1 % i == 0) {
        faktor1.push(i);
      }
    }
  
    // buat list untuk faktor dari angka2
    var faktor2 = [];
    for (var i = 1; i <= angka2; i++) {
      if (angka2 % i == 0) {
        faktor2.push(i);
      }
    }

    // buat list untuk faktor dari angka1 dan angka2 yang sama
    var sama = [];
    for (var i = 0; i < faktor1.length; i++) {
      for (var j = 0; j < faktor2.length; j++) {
        if (faktor1[i] == faktor2[j]) {
          sama.push(faktor1[i]);
          break;
        }
      }
    }
    
    // mencari nilai terbesar dari list sama
    var max = 0;
    for (var i = 0; i < sama.length; i++) {
      if (sama[i] > max) {
        max = sama[i];
      }
    }
    
    return hasil = max;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1