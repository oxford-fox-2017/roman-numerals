# roman-numerals

/*

Bikin array 2D dengan angka dan romawinya
Bikin array baru
For berulang untuk mencari angka yg kurang dari angka romawi
Push romawi ke array baru
i = -1 agar dapat berulang lagi dari awal untuk mencari romawi
return array baru dengan join

*/

function romanNumerals(number){
  
    var roman = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
    ];
    
    var arr=[];
    
    for(let i=0; i<roman.length; i++){
      if(roman[i][0]<=number){
        arr.push(roman[i][1]);
        number=number-(roman[i][0]);
        i=-1;
      }
    }
    
    return arr.join('');
  }
  
  console.log(romanNumerals(476));