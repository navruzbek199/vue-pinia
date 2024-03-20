<script setup lang="ts">
import Advertising from './components/Advertising.vue';
import Header from './components/Header.vue';
import { RouterView} from 'vue-router'

</script>

<template>
  <div class="app">
    <Header />
    <Advertising/>
  </div>
  <router-view/>
</template>

<style scoped>

</style>
