/*
Logic Challenge - Ubah Huruf
Problem
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan
dengan huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi
d, k menjadi l, dan z menjadi a.
*/

function ubahHuruf(kata) {
    // membuat kamus abjad
    var abjad = 'abcdefghijklmnopqrstuvwxyz', kata1 = '', index = 0;

    // mencari nilai index kata dalam kamus abjad
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < abjad.length; j++) {
            if (kata[i] == abjad[j]) {
                index = j;
            }
        }
        // menambahkan nilai index dengan 1
        kata1 += abjad[index + 1];
    }
    
    return kata1;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu