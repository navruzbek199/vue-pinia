<script setup lang='ts'>
import { RouterLink } from 'vue-router';
import { useTaskStore } from '../stores/TaskStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const tastArray = useTaskStore()
const dropdown = ref(true)
const check = ref('active')
const router = useRouter()
const onHandleDropdown = () => {
    dropdown.value = !dropdown.value
}
const auth = () => {
    router.push('/auth')
}
</script>



<template>
    <div class=" bg-white border-b">
        <nav class="wrapper h-20 flex justify-between items-center w-full">
            <ul class=" flex items-center gap-x-8">
                <a href="/" class=" w-10">
                    <img src="../assets/images/logo.jpeg" alt="icon" srcset="">
                </a>
                <RouterLink :to="{name: 'home'}" class="router-link">
                    <li class=" text-base cursor-pointer ">
                        Home
                    </li>
                </RouterLink>
                <RouterLink :to="{name: 'product'}" class="router-link">
                    <li class=" text-base cursor-pointer ">
                        Products
                    </li>
                </RouterLink>
                <RouterLink :to="{name: 'about'}" class="router-link">
                    <li class=" text-base cursor-pointer ">
                        About
                    </li>
                </RouterLink>
                <RouterLink :to="{name: 'contact'}" class="router-link">
                    <li class=" text-base cursor-pointer ">
                        Contact
                    </li>
                </RouterLink>
            </ul>
            <div class=" flex gap-4 items-center">
                <div class=" gap-10 flex items-center">
                    <div class=" flex gap-2 items-center">
                        <div class=" bg-primary-300  w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                            <i class="fa-solid fa-location-dot  text-primary"></i>
                        </div>
                        <div class=" cursor-pointer flex-col ">
                            <p class=" text-sm mb-0">yoki Yetkazib berish Olib ketish</p>
                            <p class=" text-sm text-primary">Qabul qilib olish turini tanlang</p>
                        </div>
                    </div>
                    <div class=" relative w-16 h-8 bg-primary-300 flex items-center gap-1 px-2 py-1 rounded-[9rem] justify-between cursor-pointer" @click="onHandleDropdown">
                        <img src="../assets/images/uzb-flag.png" alt="flag" class=" w-6">
                        <i class="fa-solid fa-chevron-down text-primary text-sm font-semibold" v-if="dropdown"></i>
                        <i class="fa-solid fa-chevron-up text-primary text-sm font-semibold" v-else="dropdown"></i>
                        <div v-if="!dropdown" class=" absolute w-[232px] h-[176px] grid gap-3 px-2 py-3 top-[57px] right-0 bg-white rounded-md">
                            <div class=" hover:bg-primary-300 w-full px-[16px] py-[8px] flex items-center justify-between gap-5 cursor-pointer rounded-md"  @click="check === 'active'">
                                <div class=" flex items-center gap-3">
                                    <img src="../assets/images/uzb-flag.png" alt="flag" class=" w-6">
                                    <span>Uzbek</span>
                                </div>
                                <i v-if="check === 'active'" class="fa-solid fa-check text-primary"></i>
                            </div>
                            <div class=" hover:bg-primary-300 w-full px-[16px] py-[8px] flex items-center justify-between gap-5 cursor-pointer rounded-md"  @click="check === 'active1'">
                                <div class="flex items-center gap-3">
                                    <img src="../assets/images/uzb-flag.png" alt="flag" class=" w-6">
                                    <span>Russian</span>
                                </div>
                                <i v-if="check === 'active1'" class="fa-solid fa-check text-primary"></i>
                            </div>
                            <div class=" hover:bg-primary-300 w-full px-[16px] py-[8px] flex items-center justify-between gap-5 cursor-pointer rounded-md"  @click="check === 'active2'">
                                <div class="flex items-center gap-3">
                                    <img src="../assets/images/uzb-flag.png" alt="flag" class=" w-6">
                                    <span>English</span>
                                </div>
                                <i v-if="check === 'active2'" class="fa-solid fa-check text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" flex items-center justify-between gap-4 cursor-pointer">
                    <div class=" w-8 h-8 bg-primary-300 flex items-center rounded-full justify-center cursor-pointer">
                        <i class="fa-solid fa-cart-shopping text-primary text-sm font-semibold"></i>
                    </div>
                    <span>{{ tastArray.favsCount }} so'm </span>
                </div>
                <div class=" w-8 h-8 bg-primary-300 flex items-center rounded-full justify-center cursor-pointer">
                    <i class="fa-solid fa-user text-primary text-sm font-semibold" @click="auth"></i>
                </div>
            </div>
        </nav>
    </div> 
</template>


≈
    
<style scoped lang="scss">
    .router-link{
        color: #212527;
        font-weight: 400;
    }
    .router-link-active{
        color: #000;
        font-weight: 700;
    }
</style>