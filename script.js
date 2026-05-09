// 1. Inisialisasi Ikon Lucide
lucide.createIcons();

// 2. Fungsi untuk Spoiler
const spoilerBtn = document.getElementById('spoilerBtn');
const secretFact = document.getElementById('secretFact');

if (spoilerBtn) {
    spoilerBtn.addEventListener('click', () => {
        if (secretFact.style.display === 'none' || secretFact.style.display === '') {
            secretFact.style.display = 'block';
            spoilerBtn.innerText = 'Tutup Rahasia 🤫';
        } else {
            secretFact.style.display = 'none';
            spoilerBtn.innerText = 'Klik Untuk Rahasia ✨';
        }
    });
}

// 3. Interaksi Tombol Sapa (SweetAlert)
const greetBtn = document.getElementById('greetBtn');
if (greetBtn) {
    greetBtn.addEventListener('click', function() {
        Swal.fire({
            title: 'Halo Kamu! (´｡• ᵕ •｡`)',
            text: 'Makasih ya udah mampir ke awan kecilku. Semoga harimu tenang!',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/3069/3069155.png',
            imageWidth: 100,
            confirmButtonText: 'Mampir lagi ya! 🧸',
            confirmButtonColor: '#ffc2d1'
        });
    });
}

// 4. Efek Navbar & Night Mode
const nightModeBtn = document.getElementById('nightModeBtn');
nightModeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('night-mode');
    const isNight = document.body.classList.contains('night-mode');
    
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'info',
        title: isNight ? 'Mode Senyap Aktif 🌙' : 'Mode Cerah Aktif ☀️',
        showConfirmButton: false,
        timer: 2000
    });
});

// 5. Fungsi Recharge Baterai
function rechargeBattery() {
    const level = document.getElementById('batteryLevel');
    const status = document.getElementById('batteryStatus');
    
    level.style.width = '100%';
    level.style.background = '#50fa7b';
    status.innerText = "Yey! Siap baca buku 10 jam lagi! ✨";
    
    setTimeout(() => {
        Swal.fire({
            title: 'Full Power! 🔋',
            text: 'Baterai sosial penuh! Tapi tetap mau di kamar aja kan? Aku tahu kok. 😂☕',
            confirmButtonText: 'Hehe, iya 🧸',
            confirmButtonColor: '#b392f0'
        });
    }, 500);
}

// 6. Ghost Interaction (Easter Egg)
// Easter Egg: Ghost Interaction yang lebih akurat
const ghostBtn = document.getElementById('ghostBtn');
if (ghostBtn) {
    ghostBtn.addEventListener('click', (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Boo! 👻',
            text: 'Tenang, hantunya juga introvert. Dia cuma mau nemenin baca buku tanpa ngajak ngobrol kok.',
            showConfirmButton: false,
            timer: 3000,
            background: '#f8f9fa'
        });
    });
}

// 7. Logika Kirim Pesan ke WhatsApp
const msgForm = document.getElementById('messageForm');
if (msgForm) {
    msgForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const messageText = document.getElementById('userMsg').value;
        const phoneNumber = "6283121858630"; // GANTI DENGAN NOMOR DIA

        if (messageText.trim() === "") {
            Swal.fire('Eits!', 'Isi dulu pesannya yaa..', 'warning');
            return;
        }

        const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Pesan dari Website: " + messageText)}`;
        window.open(waLink, '_blank');
        msgForm.reset();
        
        Swal.fire({
            title: 'Terkirim! ☁️',
            text: 'Pesanmu meluncur ke WhatsApp! (´｡• ᵕ •｡`)',
            icon: 'success',
            confirmButtonColor: '#b392f0'
        });
    });
}

// 8. Logika Sync Music (Klik atas, bawah berubah)
const playBtn = document.getElementById('playMusicBtn');
const musicIcon = document.getElementById('musicIcon');
const songTitle = document.getElementById('currentSong');
const artistName = document.getElementById('currentArtist');
const songQuote = document.getElementById('currentQuote');

// Ambil elemen audio
const audio = document.getElementById('myAudio');

if (playBtn) {
    playBtn.addEventListener('click', function() {
        const currentIconEl = playBtn.querySelector('[data-lucide]');
        const currentStatus = currentIconEl.getAttribute('data-lucide');
        const audio = document.getElementById('myAudio'); // Ambil elemen audio

        if (currentStatus === 'play') {
            // CEK DULU: Ada filenya gak? Kalau ada, baru putar.
            if (audio && audio.readyState >= 2) { 
                audio.play(); 
            }

            // Teks tetap berubah walaupun musik gak ada
            songTitle.innerText = "1am Study Session";
            artistName.innerText = "Lofi Girl";
            songQuote.innerText = "Fokus mode: On. Selamat menikmati dentuman lo-fi yang tenang. ✨";
            
            currentIconEl.setAttribute('data-lucide', 'pause');
            lucide.createIcons();

            Swal.fire({
                title: 'Volume Up! 🎧',
                text: 'Dunia dimatikan, musik dinyalakan...',
                showConfirmButton: false,
                timer: 2000
            });
        } else {
            // Matikan kalau ada musiknya
            if (audio) { audio.pause(); }

            currentIconEl.setAttribute('data-lucide', 'play');
            lucide.createIcons();

            Swal.fire({
                text: 'Ssttt.. musiknya istirahat dulu ya. ☁️',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
}
// Interaksi Klik pada Kartu Biodata
const bioCard = document.querySelector('.col-md-8 .bento-item');
if (bioCard) {
    bioCard.addEventListener('click', () => {
        Swal.fire({
            title: 'Pssttt... 🤫',
            text: 'Sebenernya website ini dibuat khusus buat nemenin kamu lho. Jangan bosen-bosen mampir ya!',
            iconHtml: '❤️',
            confirmButtonText: 'Iya! 🧸',
            confirmButtonColor: '#ffb3c1'
        });
    });
}

// Interaksi Jam Tidur
const sleepCard = document.querySelector('.col-md-4 .bento-item');
if (sleepCard) {
    sleepCard.addEventListener('click', () => {
        Swal.fire({
            title: 'Zzzzz...',
            text: 'Kalau kamu baca ini malem-malem, mending sekarang tidur ya. Mimpi indah! 🌙',
            showConfirmButton: false,
            timer: 2500
        });
    });
}

const coffeeBtn = document.getElementById('coffeeBtn');

if (coffeeBtn) {
    coffeeBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Biar halaman nggak reload pas diklik
        
        Swal.fire({
            title: 'Coffee Break! ☕',
            text: 'golda enak nih! (´◡`)',
            iconHtml: '☕',
            confirmButtonText: 'hehee,! 🧸',
            confirmButtonColor: '#d4a373',
            showClass: {
                popup: 'animate__animated animate__fadeInUp'
            }
        });
    });
}
// 1. Data Drakor (Tinggal tambah di sini kalau ada judul baru)
const dataDrakor = [
    {
        judul: "Hometown Cha-Cha-Cha",
        tag: "Healing",
        desc: "Definisi 'rumah' dalam bentuk serial. Pemandangan desa Gongjin selalu bikin tenang.",
        img: "https://images.unsplash.com/photo-15120706327b2-ac7c52a3935d?w=400",
        warna: "#ffb3c1"
    },
    {
        judul: "Our Beloved Summer",
        tag: "Life",
        desc: "Cocok buat ditonton pas hujan. Vibes-nya sangat introvert-friendly!",
        img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400",
        warna: "#92e3a9"
    },
    {
        judul: "Reply 1988",
        tag: "Family",
        desc: "Nonton ini berasa punya keluarga kedua di Ssangmun-dong.",
        img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400",
        warna: "#a2d2ff"
    }
];

// 2. Fungsi untuk menampilkan ke HTML
const renderDrakor = () => {
    const container = document.getElementById('drakorContainer');
    
    const htmlContent = dataDrakor.map(drama => `
        <div class="col-md-4">
            <div class="bento-item p-0 overflow-hidden h-100">
                <img src="${drama.img}" class="img-fluid w-100" style="height: 180px; object-fit: cover;" alt="${drama.judul}">
                <div class="p-3 text-start">
                    <span class="badge mb-2" style="background-color: ${drama.warna}; color: #333;">${drama.tag}</span>
                    <h5 class="brand-font">${drama.judul}</h5>
                    <p class="small text-muted mb-0">${drama.desc}</p>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = htmlContent;
};

// 3. Jalankan fungsi saat halaman load
document.addEventListener('DOMContentLoaded', renderDrakor);
