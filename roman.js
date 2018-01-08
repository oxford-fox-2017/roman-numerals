const to_roman = num => {
    let roman = ""
    const dictionary = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC : 90,
        L : 50,
        XL: 40,
        X :10,
        IX :9,
        V :5,
        IV :4,
        I : 1,
    }
    if (num > 3000) return 'Angka yang kamu masukkan terlalu besar, angka maksimal adalah 3000';
    else {
        while (num > 0) {
        for (let i in dictionary) {
            if (num >= dictionary[i]) {
                num -= dictionary[i];
                roman += i;
                break;
            }
        }
    }

    }
    return roman;
}


console.log(to_roman(4)); // IV
console.log(to_roman(9)); // IX
console.log(to_roman(23)); // XXIII
console.log(to_roman(1453)); // MCDLIII
console.log(to_roman(1646)); // MDCXLVI

/*
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
*/