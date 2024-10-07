<template>
    <div class="background bg-gradient-to-r from-[#0B2F9F] to-[#161D6F] text-white py-3 px-5 sm:px-10 my-5 sm:text-xl">
        <h1 id="product" class="text-center m-5 font-bold text-2xl sm:text-3xl text-white animate-on-scroll">Produk Kami
        </h1>
        <br />

        <div class="text-black animate-on-scroll">
            <div class="scroll-container">
                <div class="flex gap-2">
                    <!-- Repeatable card items -->
                    <div v-for="item of product" class="card bg-base-100 w-56 sm:w-80 shadow-xl pt-5">
                        <figure>
                            <img :src="`/image/${item.img}`" class="max-h-[200px]" :alt="item.title" />
                        </figure>
                        <div class="card-body mx-auto">
                            <h2 class="card-title">{{ item.title }}</h2>
                            <div class="card-actions justify-center">
                                <button class="btn bg-[#0B2F9F] hover:scale-125 hover:bg-[#0B2F9F] text-white"
                                    @click="modalToggle('my_modal_1', item)">Lihat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <dialog id="my_modal_1" class="modal">
            <div class="modal-box w-11/12 max-w-5xl">
                <h3 class="text-center font-bold text-black text-3xl">List Tipe {{ activeItem.title }}</h3>
                <div v-if="activeItem.id == 1">
                    <div class="flex items-center justify-center mb-5">
                        <div @click="toggleDropdown"
                            class="flex items-center justify-center bg bg-[#0B2F9F] w-screen text-white p-2 mt-3 cursor-pointer text-center font-bold text-black text-xl mr-2">
                            RADAR NON IMO
                            <Icon :name="isDropdownOpen ? 'mingcute:up-fill' : 'mingcute:down-fill'"
                                class="items-center text-3xl text-white" />
                        </div>
                    </div>

                    <!-- Dropdown Section with Animation -->
                    <transition name="slide">
                        <div v-if="isDropdownOpen" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
                            <a :href="image.link" target="_blank" v-for="image of activeItem.tipe1">
                                <img v-for="image of activeItem.tipe1" :key="image" :src="`/image/${image.img}`"
                                    class="hover:scale-125 hover:z-50 hover:shadow-xl hover:border-4 hover:border-[#0B2F9F] max-h-[300px] text-center mx-auto m-5"
                                    :alt="image" />
                            </a>
                        </div>
                    </transition>

                    <div class="flex items-center justify-center mb-5">
                        <div @click="toggleDropdown2"
                            class="flex items-center justify-center bg bg-[#0B2F9F] w-screen text-white p-2 mt-3 cursor-pointer text-center font-bold text-black text-xl mr-2">
                            RADAR IMO
                            <Icon :name="isDropdownOpen2 ? 'mingcute:up-fill' : 'mingcute:down-fill'"
                                class="items-center text-3xl text-white" />
                        </div>
                    </div>

                    <transition name="slide">
                        <div v-if="isDropdownOpen2" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
                            <a :href="image.link" target="_blank" v-for="image of activeItem.tipe2">
                                <img :key="image" :src="`/image/${image.img}`"
                                    class="hover:scale-125 hover:z-50 hover:shadow-xl hover:border-4 hover:border-[#0B2F9F] max-h-[300px] text-center mx-auto m-5"
                                    :alt="image" />
                            </a>
                        </div>
                    </transition>
                    <h3 class="text-center font-bold text-black text-xl"></h3>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <a :href="image.link" target="_blank" v-for="image of activeItem.tipe">
                        <img :src="`/image/${image.img}`"
                            class="hover:scale-125 hover:z-50 hover:shadow-xl hover:border-4 hover:border-[#0B2F9F] max-h-[300px] text-center mx-auto m-5"
                            :alt="image" />
                    </a>

                </div>

                <div class="modal-action">
                    <form method="dialog">
                        <button class="btn" @click="modalToggle('my_modal_1')">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

// Define product array
const product = ref([
    {
        id: 1, title: 'MARINE RADAR', img: 'marineradar.png',
        tipe1: [
            { img: '6b48508ba8f35ff6f33f3f9b25a32360.jpg', link: '' },
            { img: '3bd7046506be1915f425521682618fbc.jpg', link: '' },
            { img: '47124744dce910cf4f5efedac0b7a09d.jpg', link: '' },
            { img: '79b178a336e1f3077040c11e8f28233f.jpg', link: '' },
            { img: 'd0f40f8f5440afdf1d703bdc96f65f6b.jpg', link: '' }
        ],
        tipe2: [
            { img: '46de204ddf50b6db5346cfa7342b3f38.jpg', link: '' },
            { img: 'd90f8dea4100afb44a6113fc90da5182.jpg', link: '' },
            { img: '096ef260998f48a94a1b5b4bc5dfb985.jpg', link: '' },
        ]
    },
    {
        id: 2, title: 'ECHO SOUNDER', img: 'echosounder.png',
        tipe: [
            { img: '784ad12fd54c6ca3d2054e72b0ee7d00.jpg', link: '' }
        ]
    },
    {
        id: 3, title: 'SONAR', img: 'sonar.png',
        tipe: [
            { img: 'e2effc47b061b445b668c23774d9ffa7.jpg', link: '' },
            { img: '12a65320c82e35441e61993a20dd8347.jpg', link: '' },
            { img: '4b4a34cc899b34cdaf860b99e863883a.jpg', link: '' }
        ]
    },
    {
        id: 4, title: 'ECDIS', img: 'ecdis.png',
        tipe: [
            { img: '68d981054f727105d5ab46d5b34a98e9_299x408.63333333333.jpg', link: '' },
            { img: 'deff2aba67653d242cdb9a4269aa1811_299x408.63333333333.jpg', link: '' }
        ]
    },
    {
        id: 5, title: 'GPS, CHART PLOTTER', img: 'gps.png',
        tipe: [
            { img: '43f8cd53100748fbaaa30e1ef41dcb09.jpg', link: '' },
            { img: '58a89a8c3027d695e5ee0f3c7a58f73c.jpg', link: '' },
            { img: '7825d156eb1031cf208480c743c7712c_298x383.96153846154.jpg', link: '' },
            { img: '48adf17967ff022fa8c15325bc2139a8.jpg', link: '' },
            { img: '767b8ad516fff35373961bf9118e21fb_300x383.83838383838.jpg', link: '' },
            { img: '04066ec3ff45c872fe38864b79cd6a4a_363x439.54313099042.jpg', link: '' }
        ]
    },
    {
        id: 6, title: 'FISHFINDER', img: 'fishfinder.png',
        tipe: [
            { img: '5d1f561074b24e53bc1ea74f88f80e4a_292x368.03018867925.jpg', link: '' },
            { img: 'e3966428507d24df27d1a6e15d3f57b6_296x376.42264150943.jpg', link: '' },
            { img: '7d9f374f798f4a7153d328cb5a48bc22_295x374.25373134328.jpg', link: '' },
            { img: '05699671b4e9d571ab087bc9bbf7881e_295x377.06766917293.jpg', link: '' },
            { img: '55ba74e7cd15eb7bfc0f740b841307ff_299x368.8961038961.jpg', link: '' },
            { img: '7669d9785f8630fb6130ad9df1dea847_298x361.50819672131.jpg', link: '' },
            { img: '2ce80cbeb4206f4a0d8d13a5184a07a0_298x382.84722222222.jpg', link: '' }
        ]
    },
    {
        id: 7, title: 'AIS', img: 'ais.png',
        tipe: [
            { img: '767b8ad516fff35373961bf9118e21fb_300x383.83838383838.jpg', link: '' },
            { img: '90c83a182bc42bbbd3b979658334b403.jpg', link: '' },
            { img: '4275945f66af2b3be312a927d54db593.jpg', link: '' }
        ]
    },
    {
        id: 8, title: 'VDR', img: 'vdr.jpg',
        tipe: [
            { img: '357052b0d274f1fef07c473e104cce18.jpg', link: '' }
        ]
    },
    {
        id: 9, title: 'NAVNET', img: 'navnet.png',
        tipe: [
            { img: '5aaf0c3c944fd04a92999e4440130a70.jpg', link: '' },
            { img: '096d81d3c351162dd104bc613cbecddd.jpg', link: '' },
            { img: 'c994af9ae8efca8387beef115f3f6ad4.jpg', link: '' }
        ]
    },
    {
        id: 10, title: 'NAVNET TZTOUCH1', img: 'navnet2.png',
        tipe: [
            { img: '43ffac844b5a036ca8a6b1d82b0a49cc.jpg', link: '' },
            { img: 'f2d546d2ebaa2a2b5fbf0fbbc320b27b.jpg', link: '' },
            { img: 'ed1446be6d93e6f64fbdd76b9632227c.jpg', link: '' }
        ]
    },
    {
        id: 11, title: 'NAVPILOT', img: 'navpilot.jpg',
        tipe: [
            { img: '46de204ddf50b6db5346cfa7342b3f38.jpg', link: '' },
            { img: 'd90f8dea4100afb44a6113fc90da5182.jpg', link: '' },
            { img: '096ef260998f48a94a1b5b4bc5dfb985.jpg', link: '' },
        ]
    },
    {
        id: 12, title: 'SPEEDLOG', img: 'speedlog.png',
        tipe: [
            { img: '0906baefc8735c3b34c20ec3971437c1.jpg', link: '' }
        ]
    },
    {
        id: 13, title: 'SATELLITE COMPASS', img: 'satellitecompass.png',
        tipe: [
            { img: '2eafb3e51323533b72c2b66bfb05839d.jpg', link: '' },
            { img: '55d3f7b0893a78e32bed9ad8ca85863f.jpg', link: '' },
            { img: 'f5d5e37ff091ca61faf8f10653b347d4.jpg', link: '' }
        ]
    },
    {
        id: 14, title: 'BNWAS', img: 'bnwas.png',
        tipe: [
            { img: 'c473a087d043d84453a6e43b09b8f37d.jpg', link: '' }
        ]
    },
]);

const activeItem = ref([]);
const isShowModal = ref(false);

onMounted(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
                observer.unobserve(entry.target);
            }
        });
    });

    elements.forEach((el) => observer.observe(el));
});

const modalToggle = (modalId, item) => {
    isShowModal.value = !isShowModal.value;

    if (item) {
        activeItem.value = item;
    }

    const modal = document.getElementById(modalId);
    if (isShowModal.value) {
        modal?.classList.add('modal-open');
    } else {
        modal?.classList.remove('modal-open');
    }
}

const isDropdownOpen = ref(false);
const isDropdownOpen2 = ref(false);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};
const toggleDropdown2 = () => {
    isDropdownOpen2.value = !isDropdownOpen2.value;
};

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


