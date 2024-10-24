<template>
    <div class="mx-3 sm:mx-10">
        <h1 id="about" class="text-center m-10 font-bold text-2xl sm:text-3xl animate-on-scroll">Tentang Kami</h1>

        <div class="sm:grid sm:grid-cols-2 sm:items-center gap-2">
            <div class="animate-on-scroll">
                <img :src="`/image/${logoUrl}`" class="w-[400px] mx-auto my-3" />
                <p class=" md:text-xl lg:text-2xl">
                    <strong>PT FURUNO ELECTRIC INDONESIA</strong> didirikan pada Tahun 2016, sebagai anak perusahaan dari
                    <strong>FURUNO SINGAPORE PTE., LTD</strong> dan <strong>FURUNO ELECTRIC CO., LTD.</strong> untuk
                    meningkatkan
                    pelayanan dan mendukung kegiatan-kegiatan lokal secara professional sesuai dengan standar FURUNO Global.
                </p>
            </div>
            <img class="mx-auto w-80 md:w-full rounded-2xl animate-on-scroll"
                src="~/assets/image/gambar1.jpg" alt="" />
        </div>
    </div>

    <div
        class="background bg-gradient-to-r from-[#0B2F9F] to-[#161D6F] text-white py-3 px-5 sm:px-10 my-5 md:text-xl animate-on-scroll">
        <p class="text-white md:text-xl">
            PT FURUNO ELECTRIC INDONESIA bergerak dibidang perdagangan besar untuk produk-produk elektronik kelautan MERK
            FURUNO
            yang meliputi:
        </p>
        <ul>
            <li>1. Peralatan navigasi dan keselamatan pelayaran</li>
            <li>2. Peralatan yang mendukung kegiatan penangkapan ikan</li>
            <li>3. Peralatan yang mendukung kegiatan industri</li>
            <li>4. Peralatan yang mendukung kegiatan medis</li>
            <li>5. Sistem solusi bagi Mitigasi Bencana, Sistem Monitoring Ekosistem Pesisir, Sistem Radio Pesisir, Sistem
                Pergerakan Tanah dan Longsor, Pengawasan Cuaca</li>
        </ul>
    </div>

    <div class="mx-5 sm:mx-10 animate-on-scroll">
      <p class="mt-3 text-center md:text-xl">
        <strong class="text-[#0B2F9F]">PT FURUNO ELECTRIC INDONESIA</strong> berkomitmen untuk melayani konsumen dengan
        sepenuh hati, sesuai dengan motto kami, yaitu:
      </p>
      <p class="text-center text-3xl font-bold text-[#0B2F9F]">C A R E +</p>
  
      <div class="sm:grid sm:grid-cols-3 lg:grid-cols-5 text-center gap-2">
        <div>
          <Icon name="fluent:people-chat-20-filled" class="text-6xl text-[#0B2F9F]" />
          <br />
          <p class="font-semibold text-[#0B2F9F]"><strong class="sm:text-xl">C</strong>onsult</p>
          <p>Mendengarkan keluhan dan permasalahan konsumen.</p>
        </div>
        <div>
          <Icon name="uil:analysis" class="text-6xl text-[#0B2F9F]" />
          <br />
          <p class="font-semibold text-[#0B2F9F]"><strong class="sm:text-xl">A</strong>nalyze & Assist</p>
          <p>Membantu konsumen untuk mengerti dan menganalisa permasalahannya.</p>
        </div>
        <div>
          <Icon name="material-symbols:task-alt-rounded" class="text-6xl text-[#0B2F9F]" />
          <br />
          <p class="font-semibold text-[#0B2F9F]"><strong class="sm:text-xl">R</strong>esolve</p>
          <p>Memberikan konsumen saran, solusi dan rekomendasi yang sesuai dengan permasalahannya, termasuk merekomendasikan produk FURUNO yang sesuai.</p>
        </div>
        <div>
          <Icon name="icons8:idea" class="text-6xl text-[#0B2F9F]" />
          <br />
          <p class="font-semibold text-[#0B2F9F]"><strong class="sm:text-xl">E</strong>ducate</p>
          <p>Memberikan pelatihan dalam menggunakan produk FURUNO secara baik dan benar dan memberikan masukan mengenai strategi-strategi terkait.</p>
        </div>
        <div>
          <Icon name="ic:baseline-plus" class="text-6xl text-[#0B2F9F]" />
          <br />
          <p class="font-semibold text-[#0B2F9F]"><strong class="sm:text-xl">P</strong>lus</p>
          <p>Pelayanan purna jual lain yang memungkinkan</p>
        </div>
      </div>
    </div>
</template>
  

<script setup>
import { onMounted } from 'vue';
const config = useRuntimeConfig()
const logoUrl = config.public.logoUrl
onMounted(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
                observer.unobserve(entry.target); // Optional: stop observing after animation
            }
        });
    });

    elements.forEach((el) => observer.observe(el));
});
</script>

<style scoped>
/* Awal state tanpa animasi */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

/* Ketika elemen muncul */
.slide-up {
    opacity: 1;
    transform: translateY(0);
}
</style>
  
  