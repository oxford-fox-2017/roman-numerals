function to_roman (angka){

    var hasil = []

    var kamusRoman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    var kamusAngka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    var hasil = ""


    for(var i = angka; i>=0; i--){
        for(var x = 0; x<= kamusAngka.length - 1;x++){
            if(angka >= kamusAngka[x]){
                hasil += kamusRoman[x]
                angka -= kamusAngka[x]
                x = 0
                break;
            }
        }
        
        if(angka === 0 ){
            break;
        }
    }
    return hasil

}

console.log(to_roman(4))
console.log(to_roman(9))
console.log(to_roman(23))
console.log(to_roman(1453))
console.log(to_roman(1646))
