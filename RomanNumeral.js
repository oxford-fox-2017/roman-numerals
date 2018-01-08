/*
1. bikin dictionary buat roman dan numbernya 
2. scan bagian indexnya untuk melihat parameter num ada di index yang mana 
3. jika num nya >= index [number],  maka ganti numnya menjadi index[roman]
4. setelah itu kurangi num - index[number], sisa num nya
5. kembali lagi scan ke awal , dilanjutkan dengan parameter num yang tersisa , sampai abis  
*/
function romanNumeral(num) {
 const index = [[1000,'M'],[900,'DM'],[500,'D'],[400,'CD'],[100,'C'],[90,'LC'],
    [50,'L'],[40,'XL'],[10,'X'],[9,'VX'],[5,'V'],[4,'IV'],[1,'I']]
 let result = ''
 
 for (let i = 0 ; i < index.length ; i++ ){
     if(num >= index[i][0]){
         result += index[i][1]
         num -= index[i][0]
         i = -1
     }
 }
 return result
}
  
  console.log(romanNumeral(3000));