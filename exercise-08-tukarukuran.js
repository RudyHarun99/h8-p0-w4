/*
Logic Challenge - Tukar Besar Kecil
Problem
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter
berupa string. Function akan me-return string tersebut dengan menukar karakter
yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.
*/

function tukarBesarKecil(kalimat) {
    // membuat kamus low dan up utk semua abjad
    var low = 'abcdefghijklmnopqrstuvwxyz';
    var up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var hasil = '';
    
    for (var i = 0; i < kalimat.length; i++) {
        // cek apakah elemen karakter ada dlm kamus
        var cek = false;
        for (var j = 0; j < low.length; j++) {
            // jika low, ganti jadi up, cek berubah jadi true
            if (kalimat[i] == low[j]) {
                hasil += up[j];
                cek = true;
            // jika up, ganti jadi low, cek berubah jadi true
            } else if (kalimat[i] == up[j]) {
                hasil += low[j];
                cek = true;
            }
        }
        // jika elemen kalimat tidak ada dlm kamus
        if (cek == false) {
            hasil += kalimat[i];
        }
    }
    
    return hasil;    
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"