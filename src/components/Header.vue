<script setup lang='ts'>
import { RouterLink } from 'vue-router';
import { useTaskStore } from '../stores/TaskStore';
const tastArray = useTaskStore()

</script>



<template>
    <div class=" bg-white border-b">
        <nav class="wrapper h-20 flex justify-between items-center w-full">
            <ul class=" flex items-center gap-x-8">
                <div class=" w-10">
                    <img src="../assets/images/logo.jpeg" alt="icon" srcset="">
                </div>
                <RouterLink :to="{name: 'home'}" class="router-link">
                    <li class=" text-base cursor-pointer ">
                        Home
                    </li>
                </RouterLink>
                <RouterLink :to="{name: 'filial'}" class="router-link">
                    <li class=" text-base cursor-pointer ">
                        Filiallar
                    </li>
                </RouterLink>
                <RouterLink :to="{name: 'about'}" class="router-link">
                    <li class=" text-base cursor-pointer ">
                        Biz haqimizda
                    </li>
                </RouterLink>
                <RouterLink :to="{name: 'contact'}" class="router-link">
                    <li class=" text-base cursor-pointer ">
                        Bog'lanish
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
                    <div class=" w-16 h-8 bg-primary-300 flex items-center gap-1 px-2 py-1 rounded-[9rem] justify-between cursor-pointer">
                        <img src="../assets/images/uzb-flag.png" alt="flag" class=" w-6">
                        <i class="fa-solid fa-chevron-down text-primary text-sm font-semibold"></i>
                    </div>
                </div>
                <div class=" flex items-center justify-between gap-4 cursor-pointer">
                    <div class=" w-8 h-8 bg-primary-300 flex items-center rounded-full justify-center cursor-pointer">
                        <i class="fa-solid fa-cart-shopping text-primary text-sm font-semibold"></i>
                    </div>
                    <span>{{ tastArray.favsCount }} so'm </span>
                </div>
                <div class=" w-8 h-8 bg-primary-300 flex items-center rounded-full justify-center cursor-pointer">
                    <i class="fa-solid fa-user text-primary text-sm font-semibold"></i>
                </div>
            </div>
        </nav>
    </div> 
</template>
    
    
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