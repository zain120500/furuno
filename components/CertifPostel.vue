<template>
    <div class="background bg-slate-200 py-3 px-5 sm:px-10 my-5 text-xl">
        <h1 id="certifPostel" class="text-center m-5 font-bold text-2xl sm:text-3xl animate-on-scroll">
            Sertifikasi POSTEL
        </h1>
        <br />
        <p class="animate-on-scroll">
            Berdasarkan Peraturan Menteri Komunikasi dan Informatika No. 5 Tahun 2013, Tentang Kelompok Alat dan Perangkat
            Telekomunikasi yaitu setiap alat dan perangkat telekomunikasi berbasis radio/nirkabel dan menggunakan spektrum
            frekuensi radio, baik itu yang dibuat, dirakit dan dimasukkan untuk diperdagangkan dan/ atau digunakan di
            wilayah Negara Republik Indonesia wajib memenuhi persyaratan teknis alat dan perangkat telekomunikasi.
        </p>
        <p class="animate-on-scroll">
            Sertifikat POSTEL adalah Sertifikat yang harus dibuat untuk setiap alat telekomunikasi yang mentransmisi, atau
            mentransmisi dan menerima spektrum radio.
        </p>
        <p class="animate-on-scroll">Sertifikat POSTEL diperlukan untuk:</p>
        <div class="flex text-sm animate-on-scroll">
            <div>1.</div>
            <div class="col-span-11">Melakukan import setiap alat yang wajib disertifikasi tersebut.</div>
        </div>
        <div class="flex text-sm animate-on-scroll">
            <div>2.</div>
            <div class="col-span-11">Diperlukan oleh konsumen saat akan mendaftarkan frekwensi radio setiap alat yang wajib
                sertifikasi.</div>
        </div>
        <br />
        <p class="animate-on-scroll">
            Jika konsumen membutuhkan Sertifikat POSTEL untuk keperluan pendaftaran stasiun radio atau pendaftaran frekwensi
            radio, dapat menghubungi PT FURUNO ELECTRIC INDONESIA.
        </p>
        <p class="animate-on-scroll">
            PT FURUNO ELECTRIC INDONESIA menyediakan Sertifikat POSTEL untuk alat-alat tertentu yang wajib disertifikasi
            untuk diedarkan dan dijual oleh PT FURUNO ELECTRIC INDONESIA di wilayah Negara Republik Indonesia, dalam rangka
            memenuhi kewajiban sesuai dengan peraturan perundang-undangan yang berlaku di wilayah hukum Republik Indonesia.
        </p>

        <h2 class="text-center m-5 font-bold text-2xl sm:text-3xl animate-on-scroll">
            Produk yang telah ter-sertifikasi POSTEL oleh PT. Furuno Electric Indonesia
        </h2>

        <div class="overflow-x-auto">
            <div class="table-container animate-on-scroll">
                <table class="table">
                    <!-- head -->
                    <thead class="text-white">
                        <tr>
                            <th></th>
                            <th>Certificate No.</th>
                            <th>Name Of the Equipment</th>
                            <th>Model/Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row -->
                        <tr v-for="(item, index) in sertifikat" :key="item.id">
                            <th>{{ index + 1 }}</th>
                            <td>{{ item.id }}</td>
                            <td>{{ item.nama }}</td>
                            <td>{{ item.model }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { onMounted } from 'vue';

const sertifikat = ref([
    { id: "40235/R/I/SDPPI/2018", nama: "Inmarsat C Mobile Earth Station", model: "FELCOM18" },
    { id: "40236/R/I/SDPPI/2018", nama: "Marine VHF Radiotelephone", model: "FM-8900S" },
    { id: "40238/R/I/SDPPI/2018", nama: "Inmarsat MINI-C Mobile Earth Station", model: "FELCOM19" },
    { id: "40237/R/I/SDPPI/2018", nama: "SSB Radiotelephone", model: "FS-5075" },
    { id: "44161/R/SDPPI/2017", nama: "Fleetboardband", model: "FELCOM500" },
    { id: "44162/R/SDPPI/2017", nama: "Furuno Chart Radar", model: "FAR-3220" },
    { id: "52376/SDPPI/2017", nama: "Multi color LCD-Radar, Marine Radar", model: "MODEL 1815" },
    { id: "52077/SDPPI/2017", nama: "Marine Radar", model: "MODEL 1715" },
    { id: "51807/SDPPI/2017", nama: "Marine Radar", model: "FAR-1518" },
    { id: "51790/SDPPI/2017", nama: "RADAR MARITIM", model: "MODEL 1945" },
    { id: "50830/SDPPI/2017", nama: "Multi color LCD-Radar, Marine Radar", model: "MODEL 1835" },
    { id: "50831/SDPPI/2017", nama: "Automatic Identification System", model: "FA-170" },
    { id: "50832/SDPPI/2017", nama: "MF/HF Radiotelephone", model: "FS-2575" },
    { id: "53821/SDPPI/2017", nama: "Class B AIS Transponder", model: "FA-50" },
    { id: "53822/SDPPI/2017", nama: "Marine Radar", model: "FAR-2127" },
    { id: "53823/SDPPI/2017", nama: "Multicolor LCD Radar", model: "Model 1623" },
    { id: "54184/SDPPI/2017", nama: "Marine Radar", model: "FAR-2117" },
    { id: "54599/SDPPI/2018", nama: "MF/HF Radiotelephone", model: "FS-1575" },
    { id: "55606/SDPPI/2018", nama: "S-Band Marine Radar", model: "FAR-2137S" },
    { id: "55887/SDPPI/2018", nama: "Weather Radar", model: "WR-2100" },
    { id: "58978/SDPPI/2018", nama: "Marine VHF Radiotelephone", model: "FM-4800" },
    { id: "65746/SDPPI/2020", nama: "Jotron - EPIRB", model: "Tron 60S" },
    { id: "66007/SDPPI/2020", nama: "Jotron - GMDSS & maritime VHF", model: "Tron TR30" },
    { id: "66158/SDPPI/2020", nama: "Jotron - Radar Transponder", model: "Tron SART20" },
    { id: "66488/SDPPI/2020", nama: "GPS/WAAS CHART PLOTTER with CHIRP FISH FINDER", model: "GP-1871F" },
    { id: "68225/SDPPI/2020", nama: "MF/HF Radiotelephone", model: "FS-2575" },
    { id: "68224/SDPPI/2020", nama: "Automatic Identification System (AIS)", model: "FA-170" },
    { id: "72599/SDPPI/2021", nama: "Marine Radar", model: "FAR-2328" },
    { id: "72597/SDPPI/2021", nama: "Marine Radar", model: "FAR-2338SW" },
    { id: "72598/SDPPI/2021", nama: "Marine Radar", model: "FAR-2338S" },
    { id: "72661/SDPPI/2021", nama: "Marine Radar", model: "FAR-2328W" },
    { id: "72841/SDPPI/2021", nama: "MF/HF Radiotelephone", model: "FS-1575" },
    { id: "73023/SDPPI/2021", nama: "CLASS B AIS TRANSPONDER", model: "FA-50" },
    { id: "75746/SDPPI/2021", nama: "MF/HF Radiotelephone", model: "FS-5075" },
    { id: "75748/SDPPI/2021", nama: "Multi-function Display", model: "TZT12F" },
    { id: "75749/SDPPI/2021", nama: "Multi-function Display", model: "TZT16F" },
    { id: "75719/SDPPI/2021", nama: "CLASS B AIS TRANSPONDER", model: "FA-70" },
    { id: "75784/SDPPI/2021", nama: "VHF Radiotelephone", model: "FM-8900S" },
    { id: "75818/SDPPI/2021", nama: "INMARSAT MINI-C MOBILE EARTH STATION", model: "Felcom19" }
])
onMounted(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    });

    elements.forEach((el) => observer.observe(el));
});
</script>
<style scoped>
/* State before the animation */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

/* When element is in viewport */
.slide-up {
  opacity: 1;
  transform: translateY(0);
}
</style>
