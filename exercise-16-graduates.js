/*
Logic Challenge: Graduates
Implementasikan function graduates untuk mendapatkan daftar student yang lulus
dengan aturan:

- Student dapat dinyatakan lulus apabila score lebih besar dari 75.
- Masukkan name dan score dari student ke class yang dia ikuti.
- Student yang tidak lulus tidak perlu ditampilkan.

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}
*/

function graduates (students) {
  var hasil = {};
  
  for (var i in students) {
    if (students.length == 0) {
      hasil = {};
    } else {
      // membuat obj dengan key kelas
      if (!hasil[students[i].class]) {
        // key kelas berisi array kosong
        hasil[students[i].class] = [];
      }
      
      // membandingkan nilai student dengan nilai minimal 75
      if (students[i].score > 75) {
        // buat obj untuk menampung data siswa
        var obj = {};
        obj.name = students[i].name;
        obj.score = students[i].score;
        // obj data siswa push ke array kelas
        hasil[students[i].class].push(obj);
      }
    }
  } 

  return hasil;
}

// TEST CASE
console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])); //{}

// jika tidak ada yang lulus di kelas, semuanya di bawah standar
console.log(graduates([
  {
    name: 'Alexander',
    score: 75,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 75,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 75,
    class: 'tigers'
  }
]));
// { foxes: [], wolves: [], tigers: [] }