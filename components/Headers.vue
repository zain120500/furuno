<template>
    <div class="navbar transition-all duration-300" :class="isScrolled ? ' sm:bg-base-100' : ' sm:bg-ghost'">
        <div class="flex-1 ml-20">
            <img src="~/assets/image/logo.png" class="w-[100px]" />
        </div>
        <div class="flex-none mr-20">
            <ul class="menu menu-horizontal px-1">
                <li><a :class="['font-semibold text-lg', isScrolled ? 'text-[#0B2F9F]' : 'text-white']"
                        class="hover:scale-125 hover:text-white hover:bg-[#0B2F9F]"
                        @click="scrollToSection('about')">About</a></li>
                <li><a :class="['font-semibold text-lg', isScrolled ? 'text-[#0B2F9F]' : 'text-white']"
                        class="hover:scale-125 hover:text-white hover:bg-[#0B2F9F]"
                        @click="scrollToSection('product')">Product</a></li>
                <li><a :class="['font-semibold text-lg', isScrolled ? 'text-[#0B2F9F]' : 'text-white']"
                        class="hover:scale-125 hover:text-white hover:bg-[#0B2F9F]"
                        @click="scrollToSection('service')">Service</a></li>
                <li><a :class="['font-semibold text-lg', isScrolled ? 'text-[#0B2F9F]' : 'text-white']"
                        class="hover:scale-125 hover:text-white hover:bg-[#0B2F9F]"
                        @click="scrollToSection('certifPostel')">Sertifikat Postel</a></li>
                <li><a :class="['font-semibold text-lg', isScrolled ? 'text-[#0B2F9F]' : 'text-white']"
                        class="hover:scale-125 hover:text-white hover:bg-[#0B2F9F]"
                        @click="scrollToSection('contact')">Contact</a></li>
            </ul>
        </div>
    </div>

    <div class="sm:hidden navbar transition-all duration-300 bg-base-100">
        <div class="flex-1 ">
            <img src="~/assets/image/logo.png" class="w-[100px]" />
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <button v-if="!sideBar" class="text-2xl" @click="() => { sideBar = true }">
                        <Icon name="mingcute:menu-fill" />
                    </button>
                    <button v-if="sideBar" class="text-2xl" @click="() => { sideBar = false }">
                        <Icon name="mingcute:close-fill" />
                    </button>
                </li>
            </ul>
        </div>

    </div>
    <div :class="sideBar ? 'translate-x-0 z-50' : '-translate-x-full z-50'"
        class="sm:hidden w-full h-full duration-300 md:w-[225px] background bg-gradient-to-r from-[#0B2F9F] to-[#161D6F] -translate-x-full md:translate-x-0 fixed md:relative">

        <div class="h-[65px] flex items-center justify-between px-2 bg-white">
            <div class="flex-1 flex items-center justify-between">
                <button @click="() => { sideBar = false }" class="md:hidden text-slate-600 text-2xl">
                    <Icon name="mingcute:close-fill" />
                </button>
            </div>
        </div>

        <div class="top-0 p-3">
            <div class="grid grid-rows-5 gap-5 text-left mt-5">
                <button class="font-semibold text-white hover:scale-125" @click="scrollToSection('about')">About</button>
                <button class="font-semibold text-white hover:scale-125"
                    @click="scrollToSection('product')">Product</button>
                <button class="font-semibold text-white hover:scale-125"
                    @click="scrollToSection('service')">Service</button>
                <button class="font-semibold text-white hover:scale-125" @click="scrollToSection('certifPostel')">Sertifikat
                    Postel</button>
                <button class="font-semibold text-white hover:scale-125"
                    @click="scrollToSection('contact')">Contact</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isScrolled: false,
            sideBar: false
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 0;
        },
        scrollToSection(sectionId) {
            this.sideBar = false
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>

<style scoped>
.navbar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}
</style>
  