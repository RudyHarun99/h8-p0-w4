/*
Logic Challenge - Digit Perkalian Minimum
Problem
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka.
Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor
angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24,
2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit
adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.
*/

function digitPerkalianMinimum(angka) {
    var faktor = [], min = 0;

    // membuat array yang berisi nilai2 faktor dari tiap elemen
    for (var i = 1; i <= angka; i++) {
        var modulo = angka % i;
        var panjang = 0;
        // menghitung panjang karakter dari nilai faktor tsb
        if (modulo == 0) {
            panjang = (i.toString() + (angka / i).toString()).length;
            faktor.push(panjang);
        }
    }
    
    // mengurutkan nilai2 faktor dari yang terkecil
    for (var i = faktor.length; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (faktor[j] > faktor[j + 1]) {
                y = faktor[j + 1];
                faktor[j + 1] = faktor[j];
                faktor[j] = y;
            }
        }
    }
    // mengambil nilai faktor terkecil di index 0
    min = faktor[0];
    return min;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2