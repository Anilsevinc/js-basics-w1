function lottery(basvuranlar) {
    let kazananlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    kazananlar.splice(0, 5);
    kazananlar.unshift(
      basvuranlar[0],
      basvuranlar[1],
      basvuranlar[2],
      basvuranlar[3],
      basvuranlar[4]
    );
  
    kazananlar.splice(5, 6);
    kazananlar.push(
      basvuranlar[9],
      basvuranlar[19],
      basvuranlar[29],
      basvuranlar[39],
      basvuranlar[49]
    );
  
    while (kazananlar.length < 11) {
      let sonKisi = basvuranlar[Math.floor(Math.random() * basvuranlar.length)];
      let mevcutMu = false;
  
      for (let i = 0; i < kazananlar.length; i++) {
        if (kazananlar[i] === sonKisi) {
          mevcutMu = true;
        }
      }
      if (mevcutMu === false) {
        kazananlar.push(sonKisi);
      }
    }
    return kazananlar;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = lottery;
  