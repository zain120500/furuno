<template>
    <div class="mx-5 sm:mx-10">
        <p id="service" class="text-center m-5 font-bold text-2xl sm:text-3xl animate-on-scroll">Layanan Kami</p>
        <div class="sm:grid sm:grid-cols-3 gap-2">
            <div class="animate-on-scroll my-3 sm:my-0">
                <div class="text-center">
                    <Icon name="ep:sell" class="text-4xl sm:text-6xl text-[#0B2F9F]" />
                    <br />
                    <p class="font-semibold text-[#0B2F9F]">
                        <strong class="text-xl">P</strong>enjualan (Sales)
                    </p>
                </div>
                <p>PT FURUNO ELECTRIC INDONESIA mendistribusikan, mensupply dan menjual berbagai macam alat dan suku
                    cadangnya ke seluruh Indonesia.</p>
                <p>Harga jual kami sudah termasuk:</p>
                <div class="grid grid-cols-12">
                    <div>1.</div>
                    <div class="col-span-11">PPN.</div>
                </div>
                <div class="grid grid-cols-12">
                    <div>2.</div>
                    <div class="col-span-11">Instalasi dan commisioning oleh tenaga engineer yang tersertifikasi resmi
                        FURUNO.</div>
                </div>
                <div class="grid grid-cols-12">
                    <div>3.</div>
                    <div class="col-span-11">Warranty (dengan syarat dan ketentuan yang berlaku).</div>
                </div>
            </div>

            <div class="animate-on-scroll my-3 sm:my-0">
                <div class="text-center">
                    <Icon name="ri:service-line" class="text-4xl sm:text-6xl text-[#0B2F9F]" />
                    <br />
                    <p class="font-semibold text-[#0B2F9F]">
                        <strong class="text-xl">L</strong>ayanan purna jual (After sales service)
                    </p>
                </div>
                <p>Layanan purna jual yang ditawarkan oleh PT FURUNO ELECTRIC INDONESIA diantaranya adalah:</p>
                <div class="grid grid-cols-12">
                    <div>1.</div>
                    <div class="col-span-11">Instalasi.</div>
                </div>
                <div class="grid grid-cols-12">
                    <div>2.</div>
                    <div class="col-span-11">Training pengoperasian alat bagi operator.</div>
                </div>
                <div class="grid grid-cols-12">
                    <div>3.</div>
                    <div class="col-span-11">Pelatihan ECDIS (Classroom Training dan Computer Based Training).</div>
                </div>
                <div class="grid grid-cols-12">
                    <div>4.</div>
                    <div class="col-span-11">Reparasi atau perbaikan alat.</div>
                </div>
                <div class="grid grid-cols-12">
                    <div>5.</div>
                    <div class="col-span-11">Penggantian consumable spare parts.</div>
                </div>
                <div class="grid grid-cols-12">
                    <div>6.</div>
                    <div class="col-span-11">Menyediakan informasi mengenai warranty dan proses claim-nya.</div>
                </div>
                <div class="grid grid-cols-12">
                    <div>7.</div>
                    <div class="col-span-11">Berkoordinasi dengan para FURUNO National Distributors (FND) lainnya untuk
                        memberikan pelayanan purna jual secara global, dll.</div>
                </div>
            </div>

            <div class="animate-on-scroll my-3 sm:my-0">
                <div class="text-center">
                    <Icon name="material-symbols-light:other-admission-outline" class="text-4xl sm:text-6xl text-[#0B2F9F]" />
                    <br />
                    <p class="font-semibold text-[#0B2F9F]">
                        <strong class="text-xl">L</strong>ayanan lainnya
                    </p>
                </div>
                <p>Layanan lainnya dari PT FURUNO ELECTRIC INDONESIA adalah:</p>
                <div class="grid grid-cols-12">
                    <div>1.</div>
                    <div class="col-span-11">Pelayanan konsultasi teknis untuk konsumen dan calon konsumen.</div>
                </div>
                <div class="grid grid-cols-12">
                    <div>2.</div>
                    <div class="col-span-11">Menyediakan sertifikat POSTEL kepada konsumen beberapa jenis alat yang
                        didistribusikan dan dijual oleh PT FURUNO ELECTRIC INDONESIA.</div>
                </div>
                <div class="grid grid-cols-12">
                    <div>3.</div>
                    <div class="col-span-11">Mengadakan pelatihan ECDIS (Electronic Chart Display Information System)) tipe
                        tertentu.</div>
                </div>
                <div class="grid grid-cols-12">
                    <div>4.</div>
                    <div class="col-span-11">Mengumpulkan dan menindaklanjuti "suara konsumen" untuk meningkatkan pelayanan
                        dan kualitas produk-produk FURUNO.</div>
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
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
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
}</style>
