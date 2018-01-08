function convert(num) {
    var result = "";
    var rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];//indeks romawi
    var ara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];//index arabic

    for (var i = 0; i < rom.length; i++){
        while (num >= ara[i]) {
            result += rom[i]; //result akan menampung nilai yang memenuhi kondisi while.
            num -= ara[i]; //selama num lebih besar dari arabic index ke i maka nilai num akan terus dikurang.
        }
    }
    return result;
}

console.log(convert(4));
console.log(convert(9));
console.log(convert(23));
console.log(convert(1453));
console.log(convert(1646));