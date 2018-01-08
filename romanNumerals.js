//PSEUDOCODE
/*
INITIALIZE var result string kosong
INITIALIZE var decimal (untuk menampung kelipatan decimal yang berdasarkan angka romawi)
penambahan var decimal 900, 400, 90, 40, 9, 4 (karena apabila angka2 ini tidak ditambahkan maka untuk angka romawi yang bersifat substraction akan menampilkan angka romawi yang salah, e.g = 9 menjadi VIIII namun seharusnya IX dimana X dikurangi I)

FOR dari var i=0 hingga decimal.length, i++
  WHILE num%decimal[i] < num
    result = result + roman[i]
    num = num - decimal
  END WHILE
END FOR
*/


function to_roman(num) {
  var result = "";
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  
  for(var i = 0; i <= decimal.length; i++) {
    while(num%decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }
  console.log(result);
}

to_roman(4);
to_roman(9);
to_roman(23);
to_roman(1453);
to_roman(1646);