function to_roman(angka){
    let roman = ['M', 'CM', 'CD', 'D', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let arabic = [1000, 900, 400, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let temp = '';
    for ( var i = 0; i < arabic.length; i++){
        while( angka >= arabic[i]){
            temp += roman[i];
            angka -= arabic[i];
        }
    }
    return temp;
}

console.log(to_roman(4));

