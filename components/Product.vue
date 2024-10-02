<template>
    <div class="background bg-gradient-to-r from-[#0B2F9F] to-[#161D6F] text-white py-3 px-5 sm:px-10 my-5 sm:text-xl">
        <p id="product" class="text-center m-5 font-bold text-2xl sm:text-3xl text-white animate-on-scroll">Produk Kami</p>
        <br />
        <div class=" animate-on-scroll my-3">
            <button class="btn btn-sm sm:btn-md text-lg hover:scale-125 hover:text-white hover:bg-[#3ABEF9]"
            :class="selectedTab == 1 ? 'btn-white text-[#0B2F9F]' : 'btn-ghost'" @click="() => selectedTab = 1">Tab
            1</button>
            |
            <button class="btn btn-sm sm:btn-md text-lg hover:scale-125 hover:text-white hover:bg-[#3ABEF9]"
            :class="selectedTab == 2 ? 'btn-white text-[#0B2F9F]' : 'btn-ghost'" @click="() => selectedTab = 2">Tab
            2</button>
            |
            <button class="btn btn-sm sm:btn-md text-lg hover:scale-125 hover:text-white hover:bg-[#3ABEF9]"
            :class="selectedTab == 3 ? 'btn-white text-[#0B2F9F]' : 'btn-ghost'" @click="() => selectedTab = 3">Tab
            3</button>
        </div>

        <div class="bg bg-white rounded-xl p-5 text-black animate-on-scroll">
            <div v-if="selectedTab == 1">
                <div class="scroll-container">
                    <div class="flex gap-2">
                        <!-- Repeatable card items -->
                        <div class="card bg-base-100 w-56 sm:w-80 shadow-xl">
                            <figure>
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 w-56 sm:w-80 shadow-xl">
                            <figure>
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 w-56 sm:w-80 shadow-xl">
                            <figure>
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 w-56 sm:w-80 shadow-xl">
                            <figure>
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-base-100 w-56 sm:w-80 shadow-xl">
                            <figure>
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <!-- More cards... -->
                    </div>
                </div>
            </div>

            <div v-if="selectedTab == 2">Tab 2</div>
            <div v-if="selectedTab == 3">Tab 3</div>
        </div>
    </div>
</template>
  
<script setup>
import { onMounted } from 'vue';

const selectedTab = ref(1)
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
}
</style>


