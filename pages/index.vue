<template>
    <Headers />

    <div class="relative w-screen h-screen">
        <!-- Background Image -->
        <!-- <img src="~/assets/image/bg1.png" alt="Background Image" class="w-full h-full object-cover fade-in"> -->
        <img src="~/assets/image/bg1.png" alt="Background Image" class="w-full h-full object-cover fade-in">

        <!-- Overlay with Logo and Text -->
        <div class="absolute inset-0 flex flex-col justify-center items-center p-10">
            <!-- Logo -->
            <!-- <img src="~/assets/image/logo.png" alt="Logo" class="w-[800px] h-auto slide-up"> -->
            <!-- <div class="mb-5 text-white font-bold text-6xl fade-in-delay">I  N  D  O  N  E  S  I  A</div> -->

            <!-- Paragraph Text -->
            <div class="mb-5 text-white font-bold text-3xl sm:text-6xl fade-in-delay">Navigational Equipments For Marine Based</div>
            <p class="text-white text-xl sm:text-3xl font-light px-5 fade-in-delay">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua.
            </p>
            <button class="btn btn-primary  hover:scale-125 mt-5 fade-in-delay " @click="scrollToSection('about')">Read More ></button>

        </div>
    </div>

    <About />
    <Product />
    <Service />
    <CertifPostel />
    <Contact />
</template>

<script setup>
import Headers from '~/components/Headers.vue';
import About from '~/components/About.vue';
import Product from '~/components/Product.vue';
import Service from '~/components/Service.vue';
import CertifPostel from '~/components/CertifPostel.vue';
import Contact from '~/components/Contact.vue';
// import { ref } from 'vue';
// const selectedTab = ref<number>(2); 

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Element dengan ID ${id} tidak ditemukan.`);
    }
};


</script>

<style scoped>
/* Fade-in animation */
.fade-in {
    animation: fadeIn 1s ease-in-out forwards;
}

.fade-in-delay {
    animation: fadeIn 2s ease-in-out forwards;
}

.slide-up {
    animation: slideUp 1s ease-in-out forwards;
}

.slide-up-delay {
    animation: slideUp 2s ease-in-out 0.5s forwards;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>