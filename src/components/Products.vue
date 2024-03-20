<template>
    <div class=" grid grid-cols-4 gap-5">
        <div v-for="category in products" :key="category.id">
            <div class=" rounded-lg bg-white   justify-between relative">
                <img :src='category.image' class=" rounded-t-lg w-full h-[220px]" alt="">
                <i class="fa-regular fa-heart absolute right-3 top-3 text-white text-2xl cursor-pointer"></i>
                <div class=" shadow-md p-4 rounded-b-lg">
                    <h1 class=" mb-2 text-lg font-semibold">{{ category.name }}</h1>
                    <p class=" text-sm">{{ category.description }}</p>
                    <div class=" flex justify-between items-center mt-3">
                        <p class=" text-lg font-semibold">{{ category.price }} <span class=" text-sm">so'm</span></p>
                        <button class=" bg-primary text-white flex items-center justify-center px-5 py-3 rounded-3xl text-sm">Qo'shish</button>
                        <div class=" flex items-center justify-between px-5 py-3 border-primary bg-primary-300 rounded-3xl gap-4">
                            <i class="fa-solid fa-minus text-base cursor-pointer hover:text-primary"></i>
                            <span>1</span>
                            <i class="fa-solid fa-plus text-base cursor-pointer hover:text-primary"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';
import { useProductStore } from '../stores/ProductStore';



export default defineComponent({
    props:{
        products: {
            type: Object,
            required: true
        }
    },
    methods: {
    }
})
    
   

</script>

<style scoped>

</style>