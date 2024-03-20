<script setup lang="ts">
import Advertising from './components/Advertising.vue';
import Category from './components/Category.vue';
import Header from './components/Header.vue';
import { RouterView} from 'vue-router'

</script>

<template>
  <div class="app">
    <Header />
    <Advertising/>
    <Category/>
  </div>
  <router-view/>
</template>

<style scoped>

</style>
