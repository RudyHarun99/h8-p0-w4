/*
Logic Challenge - Check AB
Problem
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat
karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
Jika tidak ditemukan sama sekali, kembalikan nilai false.
Jarak bisa dari a ke b, atau b ke a.
*/

function checkAB(num) {
    var indexA = [], indexB = [];
    // membuat array berisi index dari karakter 'a' dan 'b'
    for (var i = 0; i < num.length; i++) {
        if (num[i] == 'a') {
            indexA.push(i);
        }
        if (num[i] == 'b') {
            indexB.push(i);
        }
    }
    
    // membuat array berisi selisih dari karakter 'a' dan 'b'
    var selisih = [];
    var kurang = 0;
    for (var i of indexA) {
        for (var j of indexB) {
            kurang = Math.abs(i - j) - 1;
            selisih.push(kurang);
        }
    }
    
    // mencari nilai sama dengan 3 dari array selisih
    var cek = false;
    for (var i of selisih) {
        if (i == 3) {
            cek = true;
            break;
        }
    }
    
    return cek;
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false