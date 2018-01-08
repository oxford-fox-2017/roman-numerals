/*
1. buat sebuah fungsi to_roman yang menerima 1 parameter 'angka'
2. buat variabel 'roman' yang bernilai array huruf romawi
3. buat variabel 'arabic' yang bernilai array angka arabic
4. buat variabel 'result' yang bernilai string kosong
5. buat perulangan dari panjang array 'arabic' sampai dengan 0
6. selama nilai index array 'arabic' lebih kecil sama dengan 'angka'
  - tambahkan index array 'arabic'
  - kurangkan angka dengan index array 'arabic'
7. kembalikan nilai result
*/

function to_roman(angka){
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  var arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var result='';
  
  for (var i=arabic.length; i>=0; i--){
     while(arabic[i]<=angka){
       result+=roman[i]
       angka-=arabic[i]
    }
  }
  return result
}
 
  console.log('My Totally sweet testing script\n')
  console.log('input  | expected | actual')
  console.log('_______|__________|________')
  console.log('4      | IV       |', to_roman(4))
  console.log('9      | IX       |', to_roman(9))
  console.log('23     | XXIII    |', to_roman(23))
  console.log('1453   | MCDLIII  |', to_roman(1453))
  console.log('1646   | MDCXLVI  |', to_roman(1646))

