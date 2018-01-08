function to_roman(num){
  let obj = {
    1 : 'I',
    4 : 'IV',
    5 : 'V',
    9 : 'IX',
    10 : 'X',
    40 : 'XL',
    50 : 'L',
    90 : 'LC',
    100 : 'C',
    400 : 'CD',
    500 : 'D',
    900 : 'DM',
    1000 : 'M'
  }
  let result = ''
    for (var i = Object.keys(obj).length-1; i >= 0; i--) {
        while(num >= Object.keys(obj)[i]){
          result += obj[Object.keys(obj)[i]];
          num-= Object.keys(obj)[i]
        }
    }
  return result
}

console.log(to_roman(1002));
