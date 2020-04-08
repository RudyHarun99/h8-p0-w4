/*
Logic Challenge - Change Me!
Problem
Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array
multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan)
First Name, Last Name, Gender dan Birth Year. Fungsi ini akan menampilkan object
literal yang memiliki property firstName, lastName, gender dan age. Nilai age
didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi
atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi
'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995],
['John', 'Doe', 'male', 2000]] maka output:

1. Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
2. John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
*/

function changeMe(arr) {
  var depan = '', belakang = '', kelamin = '', usia = '', myObj = {};
  
  if (arr.length == 0) {
    console.log('');
  } else {
    for (var i = 0; i < arr.length; i++) {
      depan = arr[i][0], belakang = arr[i][1], kelamin = arr[i][2];
      if (arr[i][3] !== undefined) {
        usia = 2020 - arr[i][3];
      } else {
        usia = 'Invalid Birth Year';
      }
      
      myObj = {firstName: depan, lastName: belakang, gender: kelamin, age: usia};
      console.log(`${i + 1}. ${depan} ${belakang}:`);
      console.log(myObj);
    }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""