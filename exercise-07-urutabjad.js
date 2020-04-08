/*
Logic Challenge - Mengurutkan Abjad
Problem
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter
berupa string. Function tersebut akan mengembalikan string baru yang telah
diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo.
Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
*/

function urutkanAbjad(str) {
    // membuat array yang berisi karakter dari str
    var pisah = [];
    for (var i = 0; i < str.length; i++) {
      pisah.push(str[i]);
    }
    
    // mengurutkan isi array pisah mulai dari alfabet terkecil
    for (var i = pisah.length; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (pisah[j] > pisah[j + 1]) {
          y = pisah[j + 1];
          pisah[j + 1] = pisah[j];
          pisah[j] = y;
        }
      }
    }

    // membuat string gabung yang berisi gabungan elemen array pisah
    var gabung = '';
    for (var i = 0; i < pisah.length; i++) {
      gabung += pisah[i];
    }

    return gabung;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
  console.log(urutkanAbjad('halo')); // 'ahlo'