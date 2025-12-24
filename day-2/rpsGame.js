function tasKagitMakas(kullaniciSecim) {
    let randomIndex = Math.floor(Math.random() * 3);
    let bilgisayarSecimi;
    if (randomIndex === 0) {
      bilgisayarSecimi = 'taş';
    } else if (randomIndex === 1) {
      bilgisayarSecimi = 'kağıt';
    } else {
      bilgisayarSecimi = 'makas';
    }
    // Berabere
    if (kullaniciSecim === bilgisayarSecimi) {
      return `Senin seçimin: ${kullaniciSecim}. Bilgisayarın seçimi: ${bilgisayarSecimi}. Beraberlik!`;
    }
    // Kazanma
    if (
      (kullaniciSecim === 'taş' && bilgisayarSecimi === 'makas') ||
      (kullaniciSecim === 'kağıt' && bilgisayarSecimi === 'taş') ||
      (kullaniciSecim === 'makas' && bilgisayarSecimi === 'kağıt')
    ) {
      return `Senin seçimin: ${kullaniciSecim}. Bilgisayarın seçimi: ${bilgisayarSecimi}. Kazandın!`;
    }
    // Kaybetme
    return `Senin seçimin: ${kullaniciSecim}. Bilgisayarın seçimi: ${bilgisayarSecimi}. Kaybettin!`;
  }
  
  console.log(tasKagitMakas('makas'));
  