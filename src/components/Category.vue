<template>
    <div class="wrapper" v-for="category in categoryList.product" :key="category.id">
        <div class=" pt-12">
            <h3 class=" capitalize text-3xl mb-5 font-semibold">{{ category.name }}</h3>
            <Products :products="category.sub_category"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '../stores/ProductStore';
import Products from './Products.vue';



const categoryList = useProductStore()


</script>

<style scoped>

</style>