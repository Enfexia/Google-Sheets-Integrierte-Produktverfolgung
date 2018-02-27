Durumlar = ["Aktif",'Beklemede','Onaybekliyor','Sırada','İptal','Kontrol']
window.setInterval(function(){
$(function() {
for (i = 0; i < Durumlar.length; i++) { 
    olayuzunluk = $('.' + Durumlar[i]).length;
    $('.' + Durumlar[i]+'durum').text(olayuzunluk);
}
});
}, 1000);
console.log("asd")