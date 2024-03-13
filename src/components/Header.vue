<script setup lang='ts'>
import { RouterLink } from 'vue-router';
import { useTaskStore } from '../stores/TaskStore';
const tastArray = useTaskStore()

</script>



<template>
    <div class=" bg-black">
        <nav class="wrapper h-20 flex justify-between items-center w-full">
            <div class="">
                <img src="../../public/vite.svg" alt="icon" srcset="">
            </div>
            <ul class=" flex items-center gap-x-8">
                <RouterLink :to="{name: 'home'}" class="router-link">
                    <li class=" text-base cursor-pointer ">
                        Home
                    </li>
                </RouterLink>
                <RouterLink :to="{name: 'products'}" class="router-link">
                    <li class=" text-base cursor-pointer ">
                        Product
                    </li>
                </RouterLink>
            </ul>
            <button class=" bg-indigo-500 h-8 w-16 rounded-md text-white">
                {{ tastArray.favsCount }} favs 
            </button>
        </nav>
    </div> 
</template>
    
    
<style scoped>
    li.active{
        color: red;
    }
    .router-link{
        color: #fff;
    }
    .router-link-active{
        color: green;
    }
</style>../stores/TaskStore