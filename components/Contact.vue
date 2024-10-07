<template>
    <div class="background bg-gradient-to-r from-[#0B2F9F] to-[#161D6F] text-white py-3 px-5 sm:px-10 my-5 sm:text-xl">
        <h1 id="contact" class="text-center m-5 font-bold text-2xl sm:text-3xl text-white animate-on-scroll">Hubungi Kami</h1>
        <div class="grid grid-cols-2 sm:grid-cols-4 text-center">

            <!-- ALAMAT -->
            <div class="animate-on-scroll">
                <Icon name="mdi:address-marker-outline" class="text-4xl sm:text-6xl text-white" />
                <br />
                <p class="font-semibold text-white"><strong class="text-xl">A</strong>ddress</p>
                <p class="text-white">Ravindo Tower Lt.14, Jl. Kebon Sirih Kav.75, Kota Jakarta Pusat, Daerah Khusus Ibukota
                    Jakarta 10340</p>
            </div>

            <!-- TELEPHONE -->
            <div class="animate-on-scroll">
                <Icon name="bi:telephone" class="text-4xl sm:text-6xl text-white" />
                <br />
                <p class="font-semibold text-white"><strong class="text-xl">T</strong>elephone</p>
                <p class="text-white">+62-21-390-3540</p>
            </div>

            <!-- FAX -->
            <div class="animate-on-scroll">
                <Icon name="material-symbols-light:fax-outline" class="text-4xl sm:text-6xl text-white" />
                <br />
                <p class="font-semibold text-white"><strong class="text-xl">F</strong>ax</p>
                <p class="text-white">+62-21-391-2198</p>
            </div>

            <!-- EMAIL -->
            <div class="animate-on-scroll">
                <Icon name="material-symbols:mail-outline" class="text-4xl sm:text-6xl text-white" />
                <br />
                <p class="font-semibold text-white"><strong class="text-xl">E</strong>-mail</p>
                <div class="lg:grid lg:grid-cols-2 lg:justify-center gap-1 ">
                    <div class="text-sm lg:text-right">Marine Products :</div>
                    <div class="text-sm lg:text-left">
                        <div>fid@furuno.id</div>
                        <div>sales@furuno.id</div>
                        <div>service@furuno.id</div>
                    </div>
                </div>
                <div class="mt-3 lg:mt-0 lg:grid lg:grid-cols-2 lg:justify-center gap-1 ">
                    <div class="text-sm lg:text-right">Medical Products :</div>
                    <div class="text-sm lg:text-left">Medical@furuno.id</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { onMounted } from 'vue';

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

