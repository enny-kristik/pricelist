// script.js
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarLinks = document.querySelector(".navbar-links");

    menuToggle.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
    });
});

<script>
    function sendToWhatsApp() {
         const name = document.getElementById('name').value;
         const product = document.getElementById('product').value;
         const quantity = document.getElementById('quantity').value;
         const address = document.getElementById('address').value;
         const ucapan = document.getElementById('ucapan').value;
       
        if (name && product && quantity && address && ucapan) {
            // Membuat pesan
            const message = Halo, saya ingin memesan kue:\n\n +
                            Nama: ${name}\n +
                            Produk: ${product}\n +
                            Jumlah: ${quantity}\n +
                            Alamat: ${address} \n +
                            ucapan: ${ucapan};
            
            // Nomor WhatsApp tujuan (gunakan format internasional tanpa tanda +)
            const phoneNumber = "6285270317187"; // Ganti dengan nomor Anda
            const url = https://wa.me/${6285270317187}?text=${encodeURIComponent(message)};
            
            // Membuka WhatsApp
            window.open(url, '_blank');
        } else {
            alert('Harap isi semua data pada formulir.');
        }
    }
</script>