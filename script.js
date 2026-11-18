// Function Switcher Tab Buku Menu
function openMenu(evt, categoryName) {
    let i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    document.getElementById(categoryName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Data Lengkap Cabang Neosantara (Alamat ala Google Maps & Nomor WhatsApp Cabang)
const daftarCabang = [
    {
        id: "bandung",
        nama: "Neosantara - Bandung (Cisangkuy)",
        alamat: "Jl. Cisangkuy No.60, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115",
        wa: "62895403299384"
    },
    {
        id: "harapanindah",
        nama: "Neosantara - Harapan Indah, Bekasi",
        alamat: "Jl. Bulevar Bekasi CBD, RT.001/RW.011, Marga Mulya, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17143",
        wa: "6285869015168"
    },
    {
        id: "jakartatimur",
        nama: "Neosantara - Jakarta Timur",
        alamat: "Jl. Ampera Raya No.9, RT.4/RW.2, Cilandak Tim., Ps. Minggu, Kota Jakarta Selatan, DKI Jakarta 12560",
        wa: "6289504156425"
    },
    {
        id: "makassar",
        nama: "Neosantara - Makassar",
        alamat: "Jl. Mutiara Boulevard, Bulurokeng, Biringkanaya, Kota Makassar, Sulawesi Selatan 90243",
        wa: "6282124960502"
    },
    {
        id: "jakartautara",
        nama: "Neosantara - Jakarta Utara (Koja)",
        alamat: "JL Yos Sudarso Lorong X No. 1 RT 009/001, Koja, Kec. Koja, Jkt Utara, DKI Jakarta 14260",
        wa: "6287786917494"
    },
    {
        id: "lampung",
        nama: "Neosantara - Bandar Lampung",
        alamat: "Jalan Griya Utama No. 57, Way Halim Permai, Kec. Way Halim, Kota Bandar Lampung, Lampung 35135",
        wa: "6283193450697"
    }
];

// Fungsi untuk mengirim pesan WhatsApp otomatis saat tombol pesan cabang diklik
function pesanSekarang(indexCabang) {
    const cabang = daftarCabang[indexCabang];
    
    // Format pesan langsung muncul rapi di chat WhatsApp
    const teksPesan = `Halo Admin *${cabang.nama}*,\n` +
                      `Alamat: ${cabang.alamat}\n\n` +
                      `Saya ingin memesan menu Neosantara. Mohon info ketersediaan dan menu selanjutnya, terima kasih!`;

    // Buka WhatsApp di tab baru dengan teks otomatis
    const urlWhatsApp = `https://wa.me/${cabang.wa}?text=${encodeURIComponent(teksPesan)}`;
    window.open(urlWhatsApp, '_blank');
}