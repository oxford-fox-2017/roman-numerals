function roman_numerals(num) {

    var result ="";
  
    var number = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  
  
    for(i=0;i<number.length;i++){
      if(num>=number[i]){
        if(5<=num && num<=8){
            num -= 5;
        }else if(1<=num && num<=3){
            num -= 1;
        }else{
            num -= number[i];
        }
        result += roman[i];
        i--;
      }
    }
  
  
   return result;
  }
  
  console.log(roman_numerals(10000));