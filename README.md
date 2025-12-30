
```markdown
# JavaScript Temel Çalışmalar

Bu repo, JavaScript temel konular üzerinde yapılan çalışmaları içerir.  
Özellikle **if/else**, **fonksiyonlar**, **döngüler** ve **array işlemleri** konularına odaklanılmıştır.

## Proje Yapısı

```

/lib
├── gradeCalculator.js       // Vize ve final notuna göre dönem notunu hesaplar
├── tasKagitMakas.js        // Taş-Kağıt-Makas oyunu fonksiyonu
├── lottery.js              // Başvuranlar arasından kazananları seçen fonksiyon
└── tutarHesapla.js         // Yardım yapanların isimlerindeki harflere göre bağış tutarını hesaplar

````

---

## Fonksiyonlar

### 1. Grade Calculator (`gradeCalculator.js`)
- **Konu:** if / else, değişkenler
- **Açıklama:** Vize ve final notuna göre dönem notunu hesaplar ve harf notunu belirler.
- **Örnek Kullanım:**
```javascript
let vize = 70;
let final = 50;
let donemNotu = vize * 0.3 + final * 0.7;
console.log('Sonuç:', donemNotu);
````

---

### 2. Taş-Kağıt-Makas (`tasKagitMakas.js`)

* **Konu:** Fonksiyonlar, if/else, Math.random
* **Açıklama:** Kullanıcının seçimine göre bilgisayar ile taş-kağıt-makas oyunu oynar ve sonucu döndürür.
* **Örnek Kullanım:**

```javascript
console.log(tasKagitMakas('makas'));
```

---

### 3. Lottery (`lottery.js`)

* **Konu:** Array işlemleri, döngüler, Math.random
* **Açıklama:** Başvuranlar listesinden rastgele kazananlar seçer. İlk ve belirli indekslerdeki başvuranlar öncelikli olarak kazananlara eklenir.
* **Örnek Kullanım:**

```javascript
const kazananlar = lottery(basvuranlarArray);
console.log(kazananlar);
```

---

### 4. Tutar Hesapla (`tutarHesapla.js`)

* **Konu:** Array ve string döngüleri, nested loop
* **Açıklama:** Yardım yapanların isimlerindeki belirli harfleri sayarak toplam bağış tutarını hesaplar.
* **Örnek Kullanım:**

```javascript
const tutar = tutarHesapla(['Ahmet', 'Mehmet', 'Emre']);
console.log(tutar); // Toplam bağış tutarını döndürür
```

---

## Notlar

* Tüm fonksiyonlar **modüler** şekilde `lib` klasöründe yer almaktadır.
* JavaScript mantıkları ve fonksiyon yazımı üzerinde pratik yapılmıştır.

---

```

