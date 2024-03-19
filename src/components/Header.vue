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
            <div>
                <el-icon>
                    <LocationFilled/>
                </el-icon>
                <button class=" bg-indigo-500 h-8 w-16 rounded-md text-white">
                    {{ tastArray.favsCount }} favs 
                </button>
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