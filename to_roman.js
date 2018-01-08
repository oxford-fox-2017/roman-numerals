function to_roman(num) {
    let tampung = '';
    const rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const alfa = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; i < alfa.length - 1; i++) {
        while (num >= alfa[i]) {
            tampung += rom[i];
            num -= alfa[i];
        }
    }
    return tampung;
}

console.log(to_roman(120))