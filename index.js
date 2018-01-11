const satuan = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
const puluhan = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const ratusan = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const ribuan = ['', 'M', 'MM', 'MMM'];


function to_roman(angka){
    var arrAngka = (String(angka)).split('');

    if(arrAngka.length == 1){
        return satuan[arrAngka[0]];
    }
    else if(arrAngka.length == 2){
        return puluhan[arrAngka[0]]+satuan[arrAngka[1]];
    }
    else if(arrAngka.length == 3){
        return ratusan[arrAngka[0]]+puluhan[arrAngka[1]]+satuan[arrAngka[2]];
    }
    else if(arrAngka.length == 4){
        return ribuan[arrAngka[0]]+ratusan[arrAngka[1]]+puluhan[arrAngka[2]]+satuan[arrAngka[3]];
    }
    else{
        return "";
    }
}

console.log(to_roman(4));
console.log(to_roman(9));
console.log(to_roman(23));
console.log(to_roman(1453));
console.log(to_roman(1646));