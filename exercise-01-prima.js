/*
Logic Challenge - Angka Prima
Problem
Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka.
Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak,
return false.
*/

function angkaPrima(angka) {
    // 1 tidak termasuk bilangan prima
    if (angka > 1) {
      var count = 0;
      // mencari jumlah faktor dari angka
      for (var i = 1; i <= angka; i++) {
        if (angka % i == 0) {
          count++;
        }
      }
      // jika jumlah faktor sama dengan 2, maka prima, jika tidak, bukan prima
      count == 2 ? prima = true : prima = false;
    } else {
      prima = false;
    }
    
    return prima;
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false