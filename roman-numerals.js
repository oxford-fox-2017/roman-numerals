buat variabel tampung
buat kamus untuk angka romawi
buat kamus angka yang cocok posisi arraynya dengan kamus romawi
buat pengulangan untuk mengecek kamus kamusAngka
jika nilai pengecekan pada kamusAngka masih kurang dari angka yang akan diubah
push nilai romawi ke tampung lalu kurangi angka dengan nilai di kamusAngka yang sesuai dengan angka romawi yang dipush
reset counter untuk kamus angka lalu lakukan looping lagi
hasil pada tampung di join





function to_roman(angka){
	var tampung = []
	var kamusRoman = ['M','XM','D','CD','C','XC','L','XL','X','IX','V','VI','I']
	var kamusAngka = [1000,900,500,400,100,90,50,40,10,9,5,1]
		for(var i = 0;i<kamusAngka.length;i++){
			if(kamusAngka[i]<=angka){
				tampung.push(kamusRoman[i])
				angka = angka - kamusAngka [i];
				i = -1
		}
	}
	return tampung.join('')
}

console.log(to_roman(522))
