// 1. Bikin array nomor
// 2. Bikin array huruf roman
// 3. Bikin String kosong
// 4. Loop array nomor
//   4.1 Dalam loop bikin loop dengan kondisi kalo ketemu array nomor lebih kecil
//       dari pada arguement- Minus arguement dengan index nomor. Tambah index roman
//       ke string kosong
// 5. End loop
// 6. Return String


function to_roman(num){

var normal= [1000,900,500,400,100,90,50,40,10,9,5,4,1];
var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
var word='';

for(var x=0; x<normal.length; x++){
  // console.log(normal[x]);
  while(normal[x] <=num){
    word+=roman[x];
    num-=normal[x];
  }
}
return word;
}
console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('______|__________|_______');
console.log('4     |IV        |', to_roman(4));
console.log('9     |IX        |', to_roman(9));
console.log('23    |XXIII     |', to_roman(23));
console.log('1453  |MCDLIII   |', to_roman(1453));
console.log('1646  |MCDXLVI   |', to_roman(1646));
