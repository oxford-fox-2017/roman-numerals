
function to_roman(num){
    let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let temp = '';
    for(let i = 0; i < arabic.length; i++){
        while(num >= arabic[i]){
            temp += roman[i]
            num -= arabic[i] 
        }
        
    }
    return temp
}

console.log(`My tottaly sweet testing script`)
console.log(`input | expected | actual`)
console.log(`------|----------|-------`)
console.log(`4     |IV        |`, to_roman(4))
console.log(`9     |IX        |`, to_roman(9))
console.log(`23    |XXIII     |`, to_roman(23))
console.log(`1453  |MCDLIII   |`, to_roman(1453))
console.log(`1646  |MDCXLVI   |`, to_roman(1646))