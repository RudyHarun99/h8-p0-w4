/*
Logic Challenge: Highest Score
Implementasikan function highestScore untuk mendapatkan student dengan nilai
tertinggi dari setiap class:

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> }
}
*/

function highestScore (students) {
  var hasil = {};

  if (students.length == 0) {
    hasil = {};
  } else {
    // membuat array berisi nama kelas, tanpa nama ganda
    var kelas = [];
    for (var i in students) {
      var cek = 0;
      for (var j in kelas) {
        if (students[i].class == kelas[j]) {
          cek = 1;
        }
      }
      if (cek == 0) {
        kelas.push(students[i].class)
      }
    }
      
    for (var i in kelas) {
      var best = 0;
      for (var j in students) {
        // mengambil nama kelas yang sama
        if (kelas[i] == students[j].class) {
          // membandingkan score dari students dalam class yg sama
          if (students[j].score > best) {
            best = students[j].score;
            // dari nilai tertinggi di kelas, diambil name dan score saja
            var champ = {};
            champ.name = students[j].name;
            champ.score = students[j].score;
          }
        }
      }
      // masukkan objek champ ke objek hasil
      hasil[kelas[i]] = champ;
    }
  }

  return hasil;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}