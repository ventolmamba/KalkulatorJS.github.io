// Memasukan Angka Ke Textarea
function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// Hasil Hitung
function jumlah(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
}

// Reset
function reset(){
	document.form.textarea.value = "";
}

// Menhapus 1 Angka (Del)
function hapus(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}