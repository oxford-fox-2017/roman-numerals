// 1. Membuat array nomor
// 2. Membuat array huruf roman
// 3. Membuat string yang kosong
// 4. Loop array nomor
// 4.1 Dalam loop bikin loop dengan kondisi kalo ketemu array nomor lebih kecil
// dari pada arguement- Minus arguement dengan index nomor. Tambah index roman
// ke string kosong
// 5. End loop
// 6. Return String
       

function toRoman(num){
  
var number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5 ,4 ,1];
var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
var result = '';

for(var i=0; i<number.length; i++){
  // console.log(number[i]);
  while(number[i] <= num){
    result += roman[i];
    num -= number[i];
  }
}
return result;
}
console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('______|__________|_______');
console.log('4     |IV        |', toRoman(4));
console.log('9     |IX        |', toRoman(9));
console.log('23    |XXIII     |', toRoman(23));
console.log('1453  |MCDLIII   |', toRoman(1453));
console.log('1646  |MCDXLVI   |', toRoman(1646));