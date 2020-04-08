/*
Logic Challenge - Mencari Median
Problem
Diberikan sebuah function cariMedian(arr) yang menerima sebuah array angka.
Function akan me-return median dari deret angka tersebut. Median adalah nilai
tengah dari sebuah deret bilangan. Contoh, median atau dari [1, 2, 3, 4, 5]
adalah 3 yang merupakan nilai yang ada di posisi tengah dari deret tersebut.
Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah.
Contoh, median dari [1, 2, 3, 4] adalah 2.5, karena (2 + 3 / 2).
*/

function cariMedian(arr) {
    var panjang = arr.length;
    var bagi = panjang / 2;
    var tengah = 0, median = 0;

    // mengurutkan nilai dari yang terkecil
    for (var i = panjang; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          y = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = y;
        }
      }
    }

    // mendapatkan index tengah
    tengah = Math.round(bagi) - 1;
  
    // mencari median
    if (panjang % 2 !== 0) {
      median = arr[tengah];
    } else {
      var mid1 = arr[tengah];
      var mid2 = arr[tengah + 1];
      median = (mid1 + mid2) / 2; 
    }

    return median;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7 ==> ini harusnya 6 krn diurut dulu
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
  console.log(cariMedian([1, 2, 3, 4])); // 2.5