// tutarHesapla fonksiyonu, yardimYapanlar isimli bir dizi alır
// ve belirli bağışçı harfleriyle eşleşen harflerin sayısına göre
// toplam bağış tutarını hesaplar.
function tutarHesapla(yardimYapanlar) {
  // bagisci dizisi: bağışçılar olarak kabul edilen harfler
  const bagisci = ['a', 'h', 'm', 'e', 't'];
  
  // eslesenHarfler: toplam eşleşen harf sayısını tutacak değişken
  let eslesenHarfler = 0;

  // yardimYapanlar dizisi üzerinde döngü: her bir kişinin ismini kontrol eder
  for (let i = 0; i < yardimYapanlar.length; i++) {
    // yardimYapan: mevcut kişinin ismi, küçük harfe çevrilir
    const yardimYapan = yardimYapanlar[i].toLowerCase();

    // bagisci dizisi üzerinde döngü: her bir bağışçı harfi ile eşleşme kontrolü
    for (let k = 0; k < bagisci.length; k++) {
      // bakilanHarf: mevcut bağışçı harfi, küçük harfe çevrilir
      const bakilanHarf = bagisci[k].toLowerCase();

      // yardimYapan isminin her bir harfi üzerinde döngü
      for (let p = 0; p < yardimYapan.length; p++) {
        // Eğer isimdeki harf bağışçı harfi ile eşleşiyorsa
        if (yardimYapan[p] === bakilanHarf) {
          // eslesenHarfler sayısını bir artır
          eslesenHarfler++;
        }
      }
    }
  }

  // Her eşleşen harf için 1000 birim bağış eklenir ve toplam tutar döndürülür
  return eslesenHarfler * 1000;
}