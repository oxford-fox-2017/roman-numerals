/*
buat function to_roman isi parameter dengan 'integer'
set num isi angka yg mewakili roman num
set romawi isi dengan roman num dengan urutan yang sama dengan num
looping num
jika integer lebih besar atau sama dengan num i maka masukan nilai romawi i ke hasil
kurangi nilai integer dengan nilai num i 
return hasilnya
*/
function to_roman(integers){
const num = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

const romawi = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
let hasil ='';
for(let i =0; i<num.length;i++){
    // console.log(num[i]);
    // console.log(romawi[i]);
    while(integers >= num[i]){
        // console.log(integers);
        hasil += romawi[i];
        // console.log(hasil);
        integers -= num[i];
        // console.log(integers);
    }
}
return hasil;
}
// console.log('1 | I|', to_roman(1));
 console.log('4 | IV|', to_roman(4));
 console.log('9 | IX|', to_roman(9));
console.log('23 | XXIII|', to_roman(23));
console.log('120 | CXX|', to_roman(120));
console.log('1450 | MCDL|', to_roman(1450));