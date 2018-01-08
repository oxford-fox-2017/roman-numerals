/*

PSEUDOCODE :

1. Membuat karakter hasil dengan nama 'temp'
2. Buat array dalam kamus baik itu value dan pasangan arabics
3. Lakukan perulangan sebanyak panjang value / arabis
4. dalam perulangan tsb, lakukan perulangan lagi untuk mengecheck dan melakukan hitungan dengan value yg mendekati dan menambah variable 'temp' dengan arabics sampai looping selesai


*/

function to_roman(num) {

    let temp = '';
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let arabics = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    for (let i = 0; i < arabics.length; i++) {

        while (num >= values[i]) {
            temp += arabics[i];
            num -= values[i]
        }

    }

    return temp
}

console.log('My totally sweet testing sricpt');
console.log('input | expected | actual');
console.log('______|__________|_______|');
console.log('4     | IV       |', to_roman(4));
console.log('9     | IX       |', to_roman(9));
console.log('23    | XXIII    |', to_roman(23));
console.log('1453  | MCDLIII  |', to_roman(1453));
console.log('1646  | MDCXLVI  |', to_roman(1646));