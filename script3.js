// ===== Tantangan Mandiri 3 =====

// 1. Memilih semua elemen li
const semuaLi = document.getElementsByTagName("li");

// Mengubah warna teks elemen li terakhir menjadi biru
semuaLi[semuaLi.length - 1].style.color = "blue";

// 2. Memilih semua elemen h2
const semuaH2 = document.getElementsByTagName("h2");

// Mengubah warna semua h2 menjadi teal
for (let i = 0; i < semuaH2.length; i++) {
    semuaH2[i].style.color = "teal";
}
